"use cilent";
import React, { useRef, useEffect, useContext } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, lineNumbers } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { autocompletion } from "@codemirror/autocomplete";
import { SampleThemeListForSingleLineEditor } from "@/utils/SingleSampleThemeList";
import keywordFilter from "@/utils/GetSuggestions";
import { startCompletion } from "@codemirror/autocomplete";
import { useCustomTheme } from "@/context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import constants from "@/utils/constants";

const SingleLineEditor = () => {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { direction } = useCustomDirection();
  const { themeStyles } = useCustomTheme();
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
    if (viewRef && viewRef.current) {
      code = viewRef.current.state.doc.toString();
    }

    const startState = EditorState.create({
      doc: code,
      extensions: [
        basicSetup,
        javascript(),
        autocompletion({
          override: [keywordFilter],
        }),
        EditorState.transactionFilter.of((tr) =>
          tr.newDoc.lines > 1 ? [] : tr
        ),
        SampleThemeListForSingleLineEditor[
          direction === constants.LEFT_TO_RIGHT
            ? themeStyles.theme === constants.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === constants.LIGHT_MODE
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
      ],
    });

    const View = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    // this retriggers autocomplete after any particular selection from autocomplete
    View.dom.addEventListener("keyup", (e) => {
      // use this in getSuggestions.js to find total text
      window.totalEditorText = viewRef.current.state.doc.toString();
      if (e.key === "Enter") {
        return startCompletion(View, { trigger: "input" });
      }
    });

    viewRef.current = View;

    return () => {
      View.destroy();
    };
  }, [themeStyles, direction, code]);

  return <div ref={editorRef} className="EditorContainer" />;
};

export default SingleLineEditor;
