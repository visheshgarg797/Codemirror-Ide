"use client";
import React, { useRef, useEffect, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { autocompletion } from "@codemirror/autocomplete";
import { ResizableSampleThemeList } from "@/utils/ResizableSampleThemeList";
import { syntaxHighlighting } from "@codemirror/language";
import { useCustomTheme } from "@/context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import myHighlightStyle from "@/utils/Highlights";
import keywordFilter from "@/utils/GetSuggestions";
import { startCompletion } from "@codemirror/autocomplete";

import { Theme_Name } from "@/constants/ThemeName";

import { Direction } from "@/constants/Direction";

import { wordHover } from "./hover-tooltip";

import { antrl4Lang, getTokensForText } from "./antrl4-lang";
import Popup from "./Popup";
import IsValidSelection from "@/utils/IsValidSelection";

export default function ResizaleEditor() {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { themeStyles } = useCustomTheme();

  const { direction } = useCustomDirection();
  const [popupState, setPopupState] = useState({
    selection: null,
    showPopup: false,
    popupPosition: { x: 0, y: 0 },
    selectionPos: -1,
  });

  let code = "";

  const pushSelectionChangesToEditor = (wordsToInsert) => {
    let textToInsert = "";
    wordsToInsert.forEach((word) => {
      textToInsert += ` OR ${word.label}`;
    });
    textToInsert += ")";
    const changes = [
      { from: popupState.selectionPos, insert: "(" },
      {
        from: popupState.selectionPos + popupState.selection.length,
        insert: textToInsert,
      },
    ];
    viewRef.current.dispatch({ changes });
    viewRef.current.dispatch({
      selection: {
        anchor: viewRef.current.state.doc.toString().length,
        head: viewRef.current.state.doc.toString().length,
      },
    });
    viewRef.current.dispatch;
    setPopupState({ ...popupState, showPopup: false });
  };

  useEffect(() => {
    let firstUpdate = true;
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
        const st = View.coordsAtPos(checkValidityOfSelection.actualStartPos);
        const ed = View.coordsAtPos(checkValidityOfSelection.actualEndPos);
        setPopupState({
          ...popupState,
          selection: checkValidityOfSelection.actualSelectedText,
          popupPosition: {
            x: ((st.left + ed.left) / 2 + (st.right + ed.right) / 2) / 2,
            y: (st.bottom + ed.bottom) / 2,
          },
          selectionPos: checkValidityOfSelection.actualStartPos,
          showPopup: true,
        });
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

        ResizableSampleThemeList[
          direction === Direction.LTR
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],

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
      setPopupState({ ...popupState, selection: null, showPopup: false });
      return startCompletion(View, { trigger: "input" });
    };

    const View = new EditorView({
      state: startState,

      parent: editorRef.current,
    });

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

  return (
    <>
      <div ref={editorRef} className="EditorContainer">
        {popupState.showPopup && (
          <Popup
            position={popupState.popupPosition}
            selection={popupState.selection}
            handleOnClick={pushSelectionChangesToEditor}
          />
        )}
      </div>
    </>
  );
}
