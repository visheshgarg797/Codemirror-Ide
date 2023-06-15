"use client";
import React, { useRef, useEffect, useContext } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { autocompletion } from "@codemirror/autocomplete";
import { syntaxHighlighting } from "@codemirror/language";
import { useCustomTheme } from "./useThemeHook";
import DirectionModeContext from "../context/DirectionModeContext";
import DirectionChangeButton from "./DirectionChangeButton";
import myHighlightStyle from "../utils/Highlights";
import keywordFilter from "../utils/GetSuggestions";
import words from "../utils/Data";
import { SampleThemeList } from "../utils/SampleThemeList";
import { completionKeymap } from "@codemirror/autocomplete";

export default function Editor() {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { themeStyles } = useCustomTheme();
  const EditorDirection = useContext(DirectionModeContext);
  let code = "";

  const customCompletionKeymap = [
    {
      Enter: "autocomplete",
    },
  ];

  const handleDocChange = (e) => {
    console.log(e);
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
          // completionKeymap: [customCompletionKeymap],
        }),

        syntaxHighlighting(myHighlightStyle),
        SampleThemeList[
          EditorDirection.directionMode.LeftToRight
            ? themeStyles.theme === "dark"
              ? 0
              : 1
            : themeStyles.theme === "dark"
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
      docChanged: { handleDocChange },
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
}
