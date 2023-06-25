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
import { antrl4Lang, getTokensForText } from "./antrl4-lang";
import IsValidSelection from "@/utils/IsValidSelection";
import Popup from "./Popup";
import { Direction } from "@/constants/Direction";

const MultiLineEditor = () => {
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

  const [code, setCode] = useState("");

  const pushSelectionChangesToEditor = (wordsToInsert) => {
    let textToInsert = "";
    wordsToInsert.forEach((word) => {
      textToInsert += ` OR ${word.label}`;
    });
    textToInsert += ")";
    const changes = [
      { from: popupState.selectionPos, insert: "(" },
      {
        from: popupState.selectionPos + popupState.selection.length + 2,
        insert: textToInsert,
      },
    ];
    viewRef.current.dispatch({ changes });
    viewRef.current.dispatch({
      selection: {
        anchor: code.length,
        head: code.length,
      },
    });
    setPopupState((popupState) => ({ ...popupState, showPopup: false }));
  };

  const handleMouseDown = () => {
    setCode(viewRef.current.state.doc.toString());
    setPopupState((popupState) => ({
      ...popupState,
      selection: null,
      showPopup: false,
    }));
    return startCompletion(viewRef.current, { trigger: "input" });
  };

  const handleTextSelection = (e) => {
    const { ranges } = viewRef.current.state.selection;
    if (ranges.some((range) => !range.empty)) {
      const tokens = getTokensForText(viewRef.current.state.doc.toString());
      console.log(tokens);
      const checkValidityOfSelection = IsValidSelection(
        tokens,
        ranges[0].from,
        ranges[0].to
      );
      console.log(checkValidityOfSelection);
      if (!checkValidityOfSelection.isValidSelection) {
        return;
      }
      const st = viewRef.current.coordsAtPos(
        checkValidityOfSelection.actualStartPos
      );
      const ed = viewRef.current.coordsAtPos(
        checkValidityOfSelection.actualEndPos
      );
      setPopupState((popupState) => ({
        ...popupState,
        selection: checkValidityOfSelection.actualSelectedText,
        popupPosition: {
          x: ((st.left + ed.left) / 2 + (st.right + ed.right) / 2) / 2,
          y: (st.bottom + ed.bottom) / 2,
        },
        selectionPos: checkValidityOfSelection.actualStartPos,
        showPopup: true,
      }));
    }
  };

  useEffect(() => {
    if (viewRef && viewRef.current) {
      setCode(viewRef.current.state.doc.toString());
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
          direction === Direction.LTR
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update?.state?.selection?.ranges) {
            handleTextSelection();
          }
          if (update.docChanged) {
            setCode(viewRef.current.state.doc.toString());
            return startCompletion(View, { trigger: "input" });
          }
        }),
      ],
    });

    const View = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    View.dom.addEventListener("mousedown", handleMouseDown);
    viewRef.current = View;

    return () => {
      View.destroy();
    };
  }, [themeStyles, direction]);

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
};
export default MultiLineEditor;
