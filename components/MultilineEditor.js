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
// import getInfo from "@/utils/GetInfo";

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
    const handleTextSelection = (e) => {
      const { ranges } = View.state.selection;
      console.log(ranges[0].from, ranges[0].to);
      if (ranges.some((range) => !range.empty)) {
        let selectedText = ranges
          .map((range) => View.state.doc.sliceString(range.from, range.to))
          .join("");
        selectedText = selectedText.trim();
        if (selectedText.length === 0) {
          return;
        }
        console.log(View.state.selection);
        const splitTotalText = viewRef.current.state.doc.toString().split("\n");
        let col = (ranges[0].from + ranges[0].to) / 2;
        let row = 0,
          k = 0;
        let flag = false;
        for (let i = 0; i < splitTotalText.length; i++) {
          for (let j = 0; j < splitTotalText[i].length; j++, k++) {
            if (k === ranges[0].from) {
              row = i;
              flag = true;
              break;
            }
          }
          k++;
          if (flag) {
            break;
          }
        }
        col = col - row;
        for (let i = 0; i < row; i++) {
          col = col - splitTotalText[i].length;
        }
        console.log(row, col);
        setSelection(selectedText);
        setMenuPosition({
          x: constants.X + (constants.DEL_X + 0.8) * col,
          y: constants.Y + (constants.DEL_Y + 0.8) * row,
        });
        setShowPopup(true);
      }
    };
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
          if (update?.state?.selection?.ranges) {
            // setTimeout(() => {
            //   handleTextSelection();
            // }, 500);
            handleTextSelection();
          }
          if (update.docChanged) {
            window.totalEditorText = viewRef.current.state.doc.toString();
            return startCompletion(View, { trigger: "input" });
          }
        }),
      ],
    });

    const handleMouseDown = () => {
      setSelection(null);
      setShowPopup(false);
      return startCompletion(View, { trigger: "input" });
    };

    const View = new EditorView({
      state: startState,

      parent: editorRef.current,
    });

    // View.domEventHandlers.set("mousedown", handleMouseDown);
    // EditorView.domEventHandlers.set("mouseup", handleTextSelection);
    View.dom.addEventListener("mousedown", handleMouseDown);
    // View.dom.addEventListener("mouseup", handleTextSelection);

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
