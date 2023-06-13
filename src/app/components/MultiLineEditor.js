"use client";
import React, { useRef, useEffect, useContext } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { autocompletion } from "@codemirror/autocomplete";
import { SampleThemeList } from "../../../utils/SampleThemeList";
import { syntaxHighlighting } from "@codemirror/language";
import ThemeModeContext from "../../../context/ThemeModeContext";
import ThemeChangeButton from "./ThemeChangeButton";
import DirectionModeContext from "../../../context/DirectionModeContext";
import DirectionChangeButton from "./DirectionChangeButton";
import myHighlightStyle from "../../../utils/Highlights";
import keywordFilter from "../../../utils/GetSuggestions";
import words from "../../../utils/Data";
import { completionKeymap } from "@codemirror/autocomplete";

export default function Editor() {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const EditorTheme = useContext(ThemeModeContext);
  const EditorDirection = useContext(DirectionModeContext);
  let code = "";

  const customCompletionKeymap = [
    {
      key: "Enter",
      run: (state, dispatch) => {
        console.log("enter key pressed");
      },
    },
  ];

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
          // completionKeymap: [customCompletionKeymap],
        }),

        syntaxHighlighting(myHighlightStyle),
        SampleThemeList[
          EditorDirection.directionMode.LeftToRight
            ? EditorTheme.ThemeMode.DarkMode
              ? 0
              : 1
            : EditorTheme.ThemeMode.DarkMode
            ? 2
            : 3
        ],
        EditorView.lineWrapping,
        // keymap.of(customCompletionKeymap),
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
}
