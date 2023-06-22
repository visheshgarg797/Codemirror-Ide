"use client";
import React, { useRef, useEffect, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { autocompletion } from "@codemirror/autocomplete";
import { SampleThemeList } from "@/utils/SampleThemeList";
import { syntaxHighlighting } from "@codemirror/language";
import { useCustomTheme } from "@/context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import myHighlightStyle from "@/utils/Highlights";
import keywordFilter from "@/utils/GetSuggestions";
import { startCompletion } from "@codemirror/autocomplete";

import { Theme_Name } from "@/constants/ThemeName";

import { wordHover } from "./hover-tooltip";

import { antrl4Lang, getTokensForText } from "./antrl4-lang";
import IsValidSelection from "@/utils/IsValidSelection";
import { EditorSelection } from "@codemirror/state";
import Popup from "./Popup";
// import getInfo from "@/utils/GetInfo";

const MultiLineEditor = () => {
  const editorRef = useRef(null);

  const viewRef = useRef(null);

  const { themeStyles } = useCustomTheme();

  const { direction } = useCustomDirection();

  // TODO: club all variables of popup into one useState
  const [selection, setSelection] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [tempPos, setTempPos] = useState(-1);

  let code = "";

  const pushSelectionChangesToEditor = (wordsToInsert) => {
    let textToInsert = "";
    wordsToInsert.forEach((word) => {
      textToInsert += ` OR ${word.label}`;
    });
    textToInsert += ")";
    const changes = [
      { from: tempPos, insert: "(" },
      { from: tempPos + selection.length, insert: textToInsert },
    ];
    viewRef.current.dispatch({ changes });
    viewRef.current.dispatch({
      selection: {
        anchor: viewRef.current.state.doc.toString().length,
        head: viewRef.current.state.doc.toString().length,
      },
    });
    viewRef.current.dispatch;
    setShowPopup(false);
  };

  useEffect(() => {
    if (viewRef && viewRef.current) {
      code = viewRef.current.state.doc.toString();
    }
    const handleTextSelection = (e) => {
      const { ranges } = View.state.selection;
      if (ranges.some((range) => !range.empty)) {
        const checkValidityOfSelection = IsValidSelection(
          window.totalEditorText,
          ranges[0].from,
          ranges[0].to
        );
        if (!checkValidityOfSelection.isValidSelection) {
          return;
        }
        setSelection(checkValidityOfSelection.actualSelectedText);
        const st = View.coordsAtPos(checkValidityOfSelection.actualStartPos);
        const ed = View.coordsAtPos(checkValidityOfSelection.actualEndPos);
        setMenuPosition({
          x: (st.left + ed.left) / 2,
          y: (st.bottom + ed.bottom) / 2,
        });
        setTempPos(checkValidityOfSelection.actualStartPos);
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
            const text = update.view.state.doc.toString();
            const tokens = getTokensForText(text);
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

    // this retriggers autocomplete after any particular selection from autocomplete
    View.dom.addEventListener("mousedown", (e) => {
      // use this in getSuggestions.js to find total text
      window.totalEditorText = viewRef.current.state.doc.toString();
      return startCompletion(View, { trigger: "input" });
    });

    View.dom.addEventListener("mousedown", handleMouseDown);
    viewRef.current = View;

    return () => {
      View.destroy();
    };
  }, [themeStyles, direction, code]);

  return (
    <>
      <div ref={editorRef} className="EditorContainer">
        {showPopup && (
          <Popup
            position={menuPosition}
            selection={selection}
            handleOnClick={pushSelectionChangesToEditor}
          />
        )}
      </div>
    </>
  );
};
