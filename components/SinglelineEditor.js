"use client";
import React, { useRef, useEffect, useContext } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { autocompletion } from "@codemirror/autocomplete";
import { syntaxHighlighting } from "@codemirror/language";
import { useCustomTheme } from "./useThemeHook";
import DirectionChangeButton from "./DirectionChangeButton";
import DirectionModeContext from "../context/DirectionModeContext";
import words from "../utils/Data";
import keywordFilter from "../utils/GetSuggestions";
import { SampleThemeListForSingleLineEditor } from "../utils/SingleSampleThemeList";
import { completionKeymap } from "@codemirror/autocomplete";

const SingleLineEditor = () => {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { themeStyles } = useCustomTheme();
  const EditorDirection = useContext(DirectionModeContext);
  let code = "";

  const handlePaste = (pastedText) => {
    let concatenatedText = "";
    pastedText.split("\n").forEach((singlularText) => {
      concatenatedText += singlularText;
      singlularText += "  ";
    });

    const { anchor, head } = viewRef.current.state.selection.main;
    console.log(anchor, head);
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
    if (viewRef && viewRef.current) {
      code = viewRef.current.state.doc.toString();
    }

    const startState = EditorState.create({
      doc: code,
      extensions: [
        basicSetup,
        javascript(),
        autocompletion(),
        EditorState.transactionFilter.of((tr) =>
          tr.newDoc.lines > 1 ? [] : tr
        ),
        SampleThemeListForSingleLineEditor[
          EditorDirection.directionMode.LeftToRight
            ? themeStyles.theme === "dark"
              ? 0
              : 1
            : themeStyles.theme === "light"
            ? 2
            : 3
        ],
        EditorView.domEventHandlers({
          paste(event, view) {
            console.log("paste event");
            handlePaste(event.clipboardData.getData("text/plain"));
          },
          cut(event, view) {
            handleCut();
          },
        }),
      ],
    });

    const View = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    viewRef.current = View;

    return () => {
      View.destroy();
    };
  }, [themeStyles.theme, EditorDirection.directionMode]);

  return (
    <>
      <div ref={editorRef} className="EditorContainer" />
    </>
  );
};

export default SingleLineEditor;
