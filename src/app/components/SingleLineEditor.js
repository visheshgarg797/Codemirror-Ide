"use cilent";
import React, { useRef, useEffect, useContext } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { autocompletion } from "@codemirror/autocomplete";
import { SampleThemeListForSingleLineEditor } from "../../../utils/SingleSampleThemeList";
import ThemeModeContext from "../../../context/ThemeModeContext";
import ThemeChangeButton from "./ThemeChangeButton";
import DirectionModeContext from "../../../context/DirectionModeContext";
import DirectionChangeButton from "./DirectionChangeButton";

const SingleLineEditor = () => {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const EditorTheme = useContext(ThemeModeContext);
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
            ? EditorTheme.ThemeMode.DarkMode
              ? 0
              : 1
            : EditorTheme.ThemeMode.DarkMode
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
  }, [EditorTheme.ThemeMode, EditorDirection.directionMode]);

  return (
    <>
      <div className="flex justify-between">
        <ThemeChangeButton />
        <DirectionChangeButton />
      </div>
      <div ref={editorRef} className="EditorContainer" />
    </>
  );
};

export default SingleLineEditor;
