"use client";

import React, { useRef, useEffect } from "react";

import { EditorState } from "@codemirror/state";

import { EditorView, keymap } from "@codemirror/view";

import { basicSetup } from "codemirror";

import { javascript } from "@codemirror/lang-javascript";

import { java } from "@codemirror/lang-java";

import { highlightTree } from "@lezer/highlight";

import { autocompletion } from "@codemirror/autocomplete";

import { SampleThemeList } from "@/utils/SampleThemeList";

import { language, syntaxHighlighting } from "@codemirror/language";

import { useCustomTheme } from "@/context/useThemeHook";

import { useCustomDirection } from "@/context/useDirectionHook";

import myHighlightStyle from "@/utils/Highlights";

import keywordFilter from "@/utils/GetSuggestions";

import { startCompletion } from "@codemirror/autocomplete";

import { Theme_Name } from "@/constants/ThemeName";

import { wordHover } from "./hover-tooltip";

import { antrl4Lang, getTokensForText } from "./antrl4-lang";

const MultiLineEditor = () => {
  const editorRef = useRef(null);

  const viewRef = useRef(null);

  const { themeStyles } = useCustomTheme();

  const { direction } = useCustomDirection();

  let code = "";
  let firstUpdate = true;

  useEffect(() => {
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

        SampleThemeList[
          direction === "ltr"
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],

        EditorView.lineWrapping,

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
    });

    // this retriggers autocomplete after any particular selection from autocomplete

    View.dom.addEventListener("mousedown", (e) => {
      // use this in getSuggestions.js to find total text

      window.totalEditorText = viewRef.current.state.doc.toString();

      return startCompletion(View, { trigger: "input" });
    });

    View.dom.addEventListener("mousedown", handleMouseDown);

    View.dom.addEventListener("mouseup", handleMouseUp);

    viewRef.current = View;

    return () => {
      View.destroy();
    };
  }, [themeStyles, direction, code]);

  return <div ref={editorRef} className="EditorContainer" />;
};

export default MultiLineEditor;
