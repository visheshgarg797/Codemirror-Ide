"use cilent";
import React, { useRef, useState, useEffect } from "react";
import { EditorState } from "@codemirror/state";
import {
  EditorView,
  highlightActiveLine,
  lineNumbers,
  placeholder,
} from "@codemirror/view";
import { basicSetup } from "codemirror";
import { autocompletion } from "@codemirror/autocomplete";
import { SampleThemeListForSingleLineEditor } from "@/utils/SingleSampleThemeList";
import getKeywordFilter from "@/utils/GetSuggestions";
import { syntaxHighlighting } from "@codemirror/language";
import { startCompletion } from "@codemirror/autocomplete";
import { useCustomTheme } from "@/context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { tags } from "@lezer/highlight";
import { HighlightStyle } from "@codemirror/language";
import { Direction } from "@/constants/Direction";
import { Theme_Name } from "@/constants/ThemeName";
import Popup from "../Autocomplete/Popup";
import { antrl4Lang } from "../Grammer/antrl4-lang";
import IsValidSelection from "@/utils/IsValidSelection";
import { getTokensForText } from "../Grammer/antrl4-lang";
import CustomSuggestionsComponent from "../Autocomplete/CustomSuggestionsComponent";
import { ResearchAdvanceQLLexer } from "../antlrGenerated";
import { ResearchAdvanceQLParser } from "../antlrGenerated";
import { ResearchAdvanceQLVisitor } from "../antlrGenerated";
import EditorErrorStrategy from "../Grammer/editorErrorStrategy";
import EditorQueryVisitor from "../Grammer/editorVisitor";
import { linter, lintGutter, Diagnostic } from "@codemirror/lint";
import antlr4 from "antlr4";
import { DIVIDER } from "@netlify/plugin-nextjs/lib/constants";

const SingleLineEditor = () => {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { direction } = useCustomDirection();
  const { themeStyles } = useCustomTheme();
  const [popupState, setPopupState] = useState({
    selection: null,
    showPopup: false,
    popupPosition: { x: 0, y: 0 },
    selectionPos: -1,
  });

  const [suggestions, setSuggestions] = useState(null);
  const [code, setCode] = useState("");
  const [selectedTextIsKeyword, setSelectedTextIsKeyword] = useState(false);
  const [suggestionBoxCorrds, setSuggestionBoxCoords] = useState({
    left: 0,
    top: 0,
  });
  let selectedIndex = 0;

  const myHighlightStyle = HighlightStyle.define([
    { color: themeStyles.syntaxNumberColor, tag: [tags.number, tags.inserted] },
    {
      color: themeStyles.syntaxORColor,
      tag: [tags.logicOperator, tags.inserted],
    },
    {
      color: themeStyles.syntaxNOTColor,
      tag: [tags.bitwiseOperator, tags.inserted],
    },
    {
      color: themeStyles.syntaxANDColor,
      tag: [tags.arithmeticOperator, tags.inserted],
    },
    {
      color: themeStyles.syntaxColonColor,
      tag: [tags.className, tags.deleted],
    },
    {
      color: themeStyles.syntaxPhraseColor,
      tag: [tags.content, tags.inserted],
    },
    {
      color: themeStyles.syntaxParenColor,
      tag: [tags.paren, tags.inserted],
    },
    {
      color: themeStyles.syntaxCommentColor,
      tag: [tags.comment, tags.inserted],
    },
  ]);

  function getErrors(text) {
    const errors = [];
    const lexer = createLexer(text);
    //removing errorListeners of lexer as these errors will be reported in tokensProvider
    lexer.removeErrorListeners();
    const { parser, tokens } = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    parser._errHandler = new EditorErrorStrategy();

    try {
      const tree = parser.mainQ();
      const visitor = new EditorQueryVisitor();
      tree.accept(visitor);
    } catch (e) {
      errors.push({
        from: e.offendingToken.start,
        to: e.offendingToken.stop + 1,
        message: e.message,
      });
    }
    return errors;
  }

  const createParserFromLexer = (lexer) => {
    const tokens = new antlr4.CommonTokenStream(lexer);

    return {
      tokens: tokens.tokens,
      parser: new ResearchAdvanceQLParser(tokens),
    };
  };

  const createLexer = (input) => {
    const chars = new antlr4.InputStream(input);

    const lexer = new ResearchAdvanceQLLexer(chars);

    lexer.strictMode = false;

    return lexer;
  };

  function getErrors(text) {
    const errors = [];
    const lexer = createLexer(text);
    //removing errorListeners of lexer as these errors will be reported in tokensProvider
    lexer.removeErrorListeners();
    const { parser, tokens } = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    parser._errHandler = new EditorErrorStrategy();

    try {
      const tree = parser.mainQ();
      const visitor = new EditorQueryVisitor();
      tree.accept(visitor);
    } catch (e) {
      errors.push({
        from: e?.offendingToken?.start,
        to: e?.offendingToken?.stop + 1,
        message: e?.message,
      });
    }
    return errors;
  }

  // customized  extension to show errors on editor
  const regexpLinter = linter((view) => {
    let diagnostics = [];
    const text = viewRef.current.state.doc.toString();
    const errors = getErrors(text);
    errors.map((error) => {
      diagnostics.push({
        from: error?.from,
        to: error?.to,
        severity: "error",
        message: error?.message,
      });
    });
    return diagnostics;
  });

  const pushSelectionChangesToEditor = (wordsToInsert) => {
    let textToInsert = "";
    wordsToInsert.forEach((word) => {
      textToInsert += ` OR "${word}"`;
    });
    textToInsert += ")";
    const changes = [
      { from: popupState.selectionPos, insert: "(" },
      {
        from:
          popupState.selectionPos +
          popupState.selection.length +
          2 -
          selectedTextIsKeyword,
        insert: textToInsert,
      },
    ];
    viewRef.current.dispatch({ changes });
    viewRef.current.dispatch({
      selection: {
        anchor: viewRef.current.state.doc.toString().length,
        head: viewRef.current.state.doc.toString().length,
      },
    });
    viewRef.current.dispatch;
    setPopupState((popupState) => ({ ...popupState, showPopup: false }));
  };

  const handlePaste = (pastedText) => {
    let concatenatedText = "";
    pastedText.split("\n").forEach((singlularText) => {
      concatenatedText += singlularText;
      singlularText += "  ";
    });

    const { anchor, head } = viewRef.current.state.selection.main;
    let newCursorPosition = anchor + concatenatedText.length;
    newCursorPosition =
      newCursorPosition -
      (pastedText.split("\n").length === 1 ? concatenatedText.length : 0);

    viewRef.current.dispatch({
      // changes cursor position to end of string i.e. to the new cursor position
      selection: {
        anchor: newCursorPosition,
        head: newCursorPosition,
      },
      changes: [
        {
          from: anchor,
          to: head,
          insert: pastedText.split("\n").length > 1 ? concatenatedText : "",
        },
      ],
    });
  };

  const handleTextSelection = () => {
    const { ranges } = viewRef.current.state.selection;
    if (ranges.some((range) => !range.empty)) {
      const tokens = getTokensForText(viewRef.current.state.doc.toString());
      const checkValidityOfSelection = IsValidSelection(
        tokens,
        ranges[0].from,
        ranges[0].to
      );
      if (!checkValidityOfSelection.isValidSelection) {
        return;
      }
      setSelectedTextIsKeyword(checkValidityOfSelection.isSelectedTextKeyword);
      const st = viewRef.current.coordsAtPos(
        checkValidityOfSelection.actualStartPos
      );
      const ed = viewRef.current.coordsAtPos(
        checkValidityOfSelection.actualEndPos
      );
      setPopupState((popupState) => ({
        ...popupState,
        selection: checkValidityOfSelection.actualSelectedText,
        popupPosition: {
          x: ed.right - 2,
          y: (st.bottom + ed.bottom) / 2,
        },
        selectionPos: checkValidityOfSelection.actualStartPos,
        showPopup: true,
      }));
    }
  };

  const handleDiscardPopup = () => {
    setPopupState((popupState) => ({ ...popupState, showPopup: false }));
  };

  const handleMouseDown = () => {
    setCode(viewRef.current.state.doc.toString());
    setPopupState((popupState) => ({
      ...popupState,
      selection: null,
      showPopup: false,
    }));
    if (!popupState.showPopup) {
      return startCompletion(viewRef.current, { trigger: "input" });
    }
  };

  const handleCut = () => {
    return;
  };

  const handleKeyPress = (e) => {
    setkeyPressed(e.code);
  };

  useEffect(() => {
    if (viewRef && viewRef.current) {
      setCode(viewRef.current.state.doc.toString());
    }

    const startState = EditorState.create({
      doc: code,
      extensions: [
        basicSetup,
        antrl4Lang,
        regexpLinter,
        autocompletion({
          override: [
            getKeywordFilter({
              setSuggestions,
              showCustomSuggestionsPopup: true,
            }),
          ],
        }),
        placeholder("Write Query here ..."),
        syntaxHighlighting(myHighlightStyle),
        EditorState.transactionFilter.of((tr) =>
          tr.newDoc.lines > 1 ? [] : tr
        ),
        SampleThemeListForSingleLineEditor[
          direction === Direction.LTR
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],
        highlightActiveLine(),
        lineNumbers({ visible: false }),
        EditorView.domEventHandlers({
          paste(event, view) {
            handlePaste(event.clipboardData.getData("text/plain"));
          },
          cut(event, view) {
            handleCut();
          },
        }),
        EditorView.updateListener.of((update) => {
          if (update?.state?.selection?.ranges) {
            handleTextSelection();
          }
          if (update.docChanged) {
            setCode(viewRef.current.state.doc.toString());
            return startCompletion(View, { trigger: "input" });
          }
        }),
      ],
    });

    const View = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    View.dom.addEventListener("mousedown", handleMouseDown);
    viewRef.current = View;

    const suggestionCoords = editorRef.current.getBoundingClientRect();
    if (suggestionBoxCorrds.left === 0 && suggestionBoxCorrds.top === 0) {
      setSuggestionBoxCoords((suggestionBoxCorrds) => ({
        ...suggestionBoxCorrds,
        left: suggestionCoords.left - 2,
        top: suggestionCoords.top + 50,
      }));
    }

    return () => {
      View.destroy();
    };
  }, [themeStyles, direction]);

  const giveDirection = () => {
    console.log(direction);
    if (direction === Direction.LTR) {
      return `left:${suggestionBoxCorrds.left + 1}px !important;`;
    } else {
      return `left:${suggestionBoxCorrds.left + 1}px !important;`;
    }
  };

  return (
    <>
      <div
        ref={editorRef}
        className="EditorContainer"
        style={{ width: "43.7rem", margin: "auto" }}
      >
        <style>
          {`.cm-tooltip {
            top:${suggestionBoxCorrds.top + 2}px !important;
            ${giveDirection()}
            position: fixed !important;
            border: 1px solid #181a1f;
            width: 43.83rem;
            border-radius: 0px 0px 10px 10px;
          }

          .cm-tooltip > ul > li{
            width:100%;
          }

          .cm-tooltip > ul{
            border-radius: 0px 0px 10px 10px;
          }
          `}
        </style>
        {popupState.showPopup && (
          <Popup
            position={popupState.popupPosition}
            selection={popupState.selection}
            handleOnClick={pushSelectionChangesToEditor}
            handleDiscardPopup={handleDiscardPopup}
          />
        )}
      </div>
    </>
  );
};

export default SingleLineEditor;
