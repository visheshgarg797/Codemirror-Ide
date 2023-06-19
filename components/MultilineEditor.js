"use client";
import React, { useRef, useEffect, useState } from "react";
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
import Popup from "./Popup";

const MultiLineEditor = () => {
  const editorRef = useRef(null);

  const viewRef = useRef(null);

  const { themeStyles } = useCustomTheme();

  const { direction } = useCustomDirection();

  const [selection, setSelection] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

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
        // triggers autocomplete on any change in doc
        EditorView.updateListener.of((update) => {
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

    // this retriggers autocomplete after any particular selection from autocomplete

    View.dom.addEventListener("mousedown", (e) => {
      // use this in getSuggestions.js to find total text

      window.totalEditorText = viewRef.current.state.doc.toString();

      return startCompletion(View, { trigger: "input" });
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
