"use cilent";
import React, { useRef, useState, useEffect } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, lineNumbers } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { autocompletion } from "@codemirror/autocomplete";
import { SampleThemeListForSingleLineEditor } from "@/utils/SingleSampleThemeList";
import keywordFilter from "@/utils/GetSuggestions";
import myHighlightStyle from "@/utils/Highlights";
import { language, syntaxHighlighting } from "@codemirror/language";
import { startCompletion } from "@codemirror/autocomplete";
import { useCustomTheme } from "@/context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";

import { Theme_Name } from "@/constants/ThemeName";
import Popup from "./Popup";
import { antrl4Lang } from "./antrl4-lang";
import IsValidSelection from "@/utils/IsValidSelection";

const SingleLineEditor = () => {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { direction } = useCustomDirection();
  const { themeStyles } = useCustomTheme();
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
        from: popupState.selectionPos + popupState.selection.length,
        insert: textToInsert,
      },
    ];
    viewRef.current.dispatch({ changes });
    viewRef.current.dispatch({
      selection: {
        anchor: viewRef.current.state.doc.toString().length + 2,
        head: viewRef.current.state.doc.toString().length,
      },
    });
    viewRef.current.dispatch;
    setPopupState({ ...popupState, showPopup: false });
  };

  const handlePaste = (pastedText) => {
    let concatenatedText = "";
    pastedText.split("\n").forEach((singlularText) => {
      concatenatedText += singlularText;
      singlularText += "  ";
    });

    const { anchor, head } = viewRef.current.state.selection.main;
    let newCursorPosition = anchor + concatenatedText.length;
    newCursorPosition =
      newCursorPosition -
      (pastedText.split("\n").length === 1 ? concatenatedText.length : 0);

    viewRef.current.dispatch({
      // changes cursor position to end of string i.e. to the new cursor position
      selection: {
        anchor: newCursorPosition,
        head: newCursorPosition,
      },
      changes: [
        {
          from: anchor,
          to: head,
          insert: pastedText.split("\n").length > 1 ? concatenatedText : "",
        },
      ],
    });
  };

  const handleTextSelection = () => {
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

  const handleMouseDown = () => {
    setPopupState({ ...popupState, selection: null, showPopup: false });
    return startCompletion(View, { trigger: "input" });
  };

  const handleCut = () => {
    return;
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
        EditorState.transactionFilter.of((tr) =>
          tr.newDoc.lines > 1 ? [] : tr
        ),

        SampleThemeListForSingleLineEditor[
          direction === "ltr"
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],
        lineNumbers({ visible: false }),
        EditorView.domEventHandlers({
          paste(event, view) {
            console.log("paste event");
            handlePaste(event.clipboardData.getData("text/plain"));
          },
          cut(event, view) {
            handleCut();
          },
        }),
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

export default SingleLineEditor;
