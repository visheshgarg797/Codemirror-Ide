import { HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";
import { linter } from "@codemirror/lint";
import antlr4 from "antlr4";
import { ResearchAdvanceQLParser } from "@/components/antlrGenerated";
import { ResearchAdvanceQLLexer } from "@/components/antlrGenerated";
import EditorQueryVisitor from "@/components/Grammer/editorVisitor";
import EditorErrorStrategy from "../components/Grammer/editorErrorStrategy.js";
import { getTokensForText } from "@/components/Grammer/antrl4-lang.js";
import IsValidSelection from "./IsValidSelection.js";
import { startCompletion } from "@codemirror/autocomplete";

const editorHighlightStyle = (themeStyles) => {
  return HighlightStyle.define([
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
      color: themeStyles.syntaxParenColor,
      tag: [tags.paren, tags.inserted],
    },
    {
      color: themeStyles.syntaxCommentColor,
      tag: [tags.comment, tags.inserted],
    },
  ]);
};

const createParserFromLexer = (lexer) => {
  const tokens = new antlr4.CommonTokenStream(lexer);
  return {
    tokens: tokens.tokens,
    parser: new ResearchAdvanceQLParser(tokens),
  };
};

const createLexer = (text) => {
  const chars = new antlr4.InputStream(text);
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

const regexpLinter = ({ viewRef }) =>
  linter(() => {
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

const pushSelectionChangesToEditor = ({
  wordsToInsert,
  viewRef,
  popupState,
  setPopupState,
  selectedTextIsKeyword,
  code,
}) => {
  let textToInsert = "";
  wordsToInsert.forEach((word) => {
    textToInsert += ` OR "${word}"`;
  });
  textToInsert += ") ";
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

const handleTextSelection = (
  viewRef,
  popupState,
  setPopupState,
  setSelectedTextIsKeyword
) => {
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

const handleDiscardPopup = ({ popupState, setPopupState }) => {
  setPopupState((popupState) => ({ ...popupState, showPopup: false }));
};

const handleMouseDown = ({ setCode, popupState, setPopupState, viewRef }) => {
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

export {
  editorHighlightStyle,
  getErrors,
  regexpLinter,
  pushSelectionChangesToEditor,
  handleTextSelection,
  handleDiscardPopup,
  handleMouseDown,
};
