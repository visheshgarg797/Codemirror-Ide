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
            ? themeStyles.theme === "light"
              ? 0
              : 1
            : themeStyles.theme === "light"
            ? 2
            : 3
        ],
        EditorView.lineWrapping,
        // keymap.of(customCompletionKeymap),
      ],
    });

    //seeing selected text  and calling callback if any text is selected

    let isTextSelected = false;

    const handleTextSelection = () => {
      if (isTextSelected) {
        const { ranges } = View.state.selection;

        if (ranges.some((range) => !range.empty)) {
          const selectedText = ranges
            .map((range) => View.state.doc.sliceString(range.from, range.to))
            .join("");
          // Call your callback function with the selected text
          console.log("Selected text:", selectedText);
        }

        isTextSelected = false;
      }
    };

    const handleMouseDown = () => {
      isTextSelected = false;
    };

    const handleMouseUp = () => {
      isTextSelected = true;
      setTimeout(handleTextSelection, 0);
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        isTextSelected = true;
        setTimeout(handleTextSelection, 0);
      }
    };

    const View = new EditorView({
      state: startState,
      parent: editorRef.current,
      docChanged: { handleDocChange },
    });

    View.dom.addEventListener("mousedown", handleMouseDown);
    View.dom.addEventListener("mouseup", handleMouseUp);

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
