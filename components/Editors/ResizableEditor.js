"use client";
import React, { useRef, useEffect, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { autocompletion } from "@codemirror/autocomplete";
import { ResizableSampleThemeList } from "@/utils/ResizableSampleThemeList";
import { syntaxHighlighting } from "@codemirror/language";
import { useCustomTheme } from "@/context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { tags } from "@lezer/highlight";
import { HighlightStyle } from "@codemirror/language";
import Data from "@/utils/Data";
import getKeywordFilter from "@/utils/GetSuggestions";
import { startCompletion } from "@codemirror/autocomplete";
import { Theme_Name } from "@/constants/ThemeName";
import { Direction } from "@/constants/Direction";
import { antrl4Lang, getTokensForText } from "../Grammer/antrl4-lang";
import Popup from "../Autocomplete/Popup";
import IsValidSelection from "@/utils/IsValidSelection";
import { ResearchAdvanceQLLexer } from "../antlrGenerated";
import { ResearchAdvanceQLParser } from "../antlrGenerated";
import { ResearchAdvanceQLVisitor } from "../antlrGenerated";
import EditorErrorStrategy from "../Grammer/editorErrorStrategy";
import EditorQueryVisitor from "../Grammer/editorVisitor";
import { linter, lintGutter, Diagnostic } from "@codemirror/lint";
import antlr4 from "antlr4";

export default function ResizaleEditor() {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { themeStyles } = useCustomTheme();

  const { direction } = useCustomDirection();
  const [popupState, setPopupState] = useState({
    selection: null,
    showPopup: false,
    popupPosition: { x: 0, y: 0 },
    selectionPos: -1,
  });
  const Heightoptions = [
    { maxLine: "4", index: "0" },
    { maxLine: "6", index: "1" },
    { maxLine: "8", index: "2" },
  ];
  const [code, setCode] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [selectedTextIsKeyword, setSelectedTextIsKeyword] = useState(false);
  const [maxLines, setMaxLines] = useState(0);

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

  const handleHeightChange = (heightChangeEvent) => {
    let idx = (1 + parseInt(heightChangeEvent.target.value[0])) / 3;
    idx = parseInt(idx) - 1;
    setMaxLines(idx);
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
        anchor: code.length,
        head: code.length,
      },
    });
    setPopupState((popupState) => ({ ...popupState, showPopup: false }));
  };

  const handleTextSelection = (e) => {
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
        lintGutter(),
        autocompletion({
          override: [
            getKeywordFilter({
              setSuggestions,
              showCustomSuggestionsPopup: true,
            }),
          ],
        }),
        syntaxHighlighting(myHighlightStyle),
        ResizableSampleThemeList[maxLines][
          direction === Direction.LTR
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],
        EditorView.lineWrapping,
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

    return () => {
      View.destroy();
    };
  }, [themeStyles, direction, maxLines]);

  return (
    <>
      <div
        ref={editorRef}
        className="EditorContainer"
        style={{ width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              color: themeStyles.col02.color,
              fontSize: "14px",
            }}
          >
            {" "}
            MAXIMUM LINES
          </div>
          <div>
            <select
              // value={maxLines.value}
              onChange={(heightChangeEvent) =>
                handleHeightChange(heightChangeEvent)
              }
              style={{
                backgroundColor: themeStyles.col02.backgroundColor,
                color: themeStyles.col02.color,
                border: `1px solid ${
                  themeStyles.theme === Theme_Name.DARK_MODE ? "white" : "black"
                }`,
                marginInlineStart: "9px",
                borderRadius: "3px",
              }}
            >
              {Heightoptions.map((index) => {
                return (
                  <option value={index.maxLine} key={index.index}>
                    {index.maxLine}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

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
}
