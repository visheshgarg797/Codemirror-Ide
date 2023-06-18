"use client";
import React, { useRef, useEffect } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { autocompletion } from "@codemirror/autocomplete";
import { SampleThemeList } from "@/utils/SampleThemeList";
import { syntaxHighlighting } from "@codemirror/language";
import { useCustomTheme } from "@/context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import myHighlightStyle from "@/utils/Highlights";
import keywordFilter from "@/utils/GetSuggestions";
import { startCompletion } from "@codemirror/autocomplete";
import constants from "@/utils/constants";

export default function Editor() {
  const editorRef = useRef(null);
  const viewRef = useRef(null);

  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();
  let code = "";

  // idea: record the chnages in the document using editor.updateListener then on keypress of enter, dispatch a space to the editor. Maybe that will trigger an autocompete since applying a space using autocomplete does not

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
        syntaxHighlighting(myHighlightStyle),
        SampleThemeList[
          direction === constants.LEFT_TO_RIGHT
            ? themeStyles.theme === constants.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === constants.LIGHT_MODE
            ? 2
            : 3
        ],
        EditorView.lineWrapping,
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
    View.dom.addEventListener("keyup", (e) => {
      // use this in getSuggestions.js to find total text
      window.totalEditorText = viewRef.current.state.doc.toString();
      if (e.key === "Enter") {
        return startCompletion(View, { trigger: "input" });
      }
    });

    View.dom.addEventListener("mousedown", handleMouseDown);
    View.dom.addEventListener("mouseup", handleMouseUp);

    viewRef.current = View;

    return () => {
      View.destroy();
    };
  }, [themeStyles, direction, code]);

  return <div ref={editorRef} className="EditorContainer" />;
}
