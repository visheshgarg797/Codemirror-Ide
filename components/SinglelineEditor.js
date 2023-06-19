"use cilent";
import React, { useRef, useEffect, useContext } from "react";

import { EditorState } from "@codemirror/state";

import { EditorView, lineNumbers } from "@codemirror/view";

import { basicSetup } from "codemirror";

import { javascript } from "@codemirror/lang-javascript";

import { autocompletion } from "@codemirror/autocomplete";

import { SampleThemeListForSingleLineEditor } from "@/utils/SingleSampleThemeList";

import keywordFilter from "@/utils/GetSuggestions";

import myHighlightStyle from "@/utils/Highlights";

import { language, syntaxHighlighting } from "@codemirror/language";

import { startCompletion } from "@codemirror/autocomplete";

import { useCustomTheme } from "@/context/useThemeHook";

import { useCustomDirection } from "@/context/useDirectionHook";

import { Theme_Name } from "@/constants/ThemeName";
import { wordHover } from "./hover-tooltip";

import { antrl4Lang, getTokensForText } from "./antrl4-lang";
import Popup from "./Popup";

const SingleLineEditor = () => {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { direction } = useCustomDirection();
  const { themeStyles } = useCustomTheme();
  const [selection, setSelection] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  let code = "";

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

  const handleCut = () => {
    return;
  };

  useEffect(() => {
    let firstUpdate = true;
    if (viewRef && viewRef.current) {
      code = viewRef.current.state.doc.toString();
    }

    const startState = EditorState.create({
      doc: code,
      extensions: [
        basicSetup,
        antrl4Lang,
        autocompletion({
          override: [keywordFilter],
        }),
        syntaxHighlighting(myHighlightStyle),
        EditorState.transactionFilter.of((tr) =>
          tr.newDoc.lines > 1 ? [] : tr
        ),

        SampleThemeListForSingleLineEditor[
          direction === "ltr"
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],
        lineNumbers({ visible: false }),
        EditorView.domEventHandlers({
          paste(event, view) {
            console.log("paste event");
            handlePaste(event.clipboardData.getData("text/plain"));
          },
          cut(event, view) {
            handleCut();
          },
        }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged || firstUpdate) {
            firstUpdate = false;
            const text = update.view.state.doc.toString();
            const tokens = getTokensForText(text);
            console.log("====tokens", tokens);
          }
        }),

        EditorView.updateListener.of((update) => {
          window.totalEditorText = viewRef.current.state.doc.toString();

          if (update.docChanged) {
            return startCompletion(View, { trigger: "input" });
          }
        }),
      ],
    });

    //seeing selected text  and calling callback if any text is selected

    const handleTextSelection = () => {
      let selectedText = "";
      if (window.getSelection != "undefined") {
        selectedText = window.getSelection().toString();
      } else if (
        document.selection != "undefined" &&
        document.selection.type == "Text"
      ) {
        selectedText = document.selection.createRange().text;
      }
      console.log(selectedText.split(" ").length - 1);
      if (
        selectedText &&
        selectedText.length > 0 &&
        selectedText.split(" ").length - 1 !== selectedText.length
      ) {
        console.log("Selected text", selectedText);
        const selectionRange = window
          .getSelection()
          .getRangeAt(0)
          .getBoundingClientRect();

        setSelection(selectedText);
        setMenuPosition({
          x: selectionRange.x + selectionRange.width / 2,
          y: selectionRange.y + selectionRange.height,
        });
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    const handleMouseDown = () => {
      setSelection(null);
      setShowPopup(false);
      return startCompletion(View, { trigger: "input" });
    };

    const View = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    View.dom.addEventListener("mousedown", handleMouseDown);
    View.dom.addEventListener("mouseup", handleTextSelection);
    View.dom.addEventListener("keyup", handleTextSelection);

    viewRef.current = View;

    return () => {
      View.destroy();
    };
  }, [themeStyles, direction, code]);

  return (
    <>
      <div ref={editorRef} className="EditorContainer">
        {showPopup && <Popup position={menuPosition} selection={selection} />}
      </div>
    </>
  );
};

export default SingleLineEditor;
