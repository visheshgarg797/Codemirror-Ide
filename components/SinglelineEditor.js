"use cilent";
import React, { useRef, useEffect, useContext } from "react";

import { EditorState } from "@codemirror/state";

import { EditorView, lineNumbers } from "@codemirror/view";

import { basicSetup } from "codemirror";

import { javascript } from "@codemirror/lang-javascript";

import { autocompletion } from "@codemirror/autocomplete";

import { SampleThemeListForSingleLineEditor } from "@/utils/SingleSampleThemeList";

import keywordFilter from "@/utils/GetSuggestions";

import myHighlightStyle from "@/utils/Highlights";

import { language, syntaxHighlighting } from "@codemirror/language";

import { startCompletion } from "@codemirror/autocomplete";

import { useCustomTheme } from "@/context/useThemeHook";

import { useCustomDirection } from "@/context/useDirectionHook";

import { Theme_Name } from "@/constants/ThemeName";
import { wordHover } from "./hover-tooltip";

import { antrl4Lang, getTokensForText } from "./antrl4-lang";
import Popup from "./Popup";

const SingleLineEditor = () => {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { direction } = useCustomDirection();
  const { themeStyles } = useCustomTheme();
  const [selection, setSelection] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  let code = "";

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

  const handleCut = () => {
    return;
  };

  useEffect(() => {
    let firstUpdate = true;
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
            setTimeout(() => {
              handleTextSelection();
            }, 500);
          }
          if (update.docChanged) {
            window.totalEditorText = viewRef.current.state.doc.toString();
            return startCompletion(View, { trigger: "input" });
          }
        }),
      ],
    });

    //seeing selected text  and calling callback if any text is selected

    const handleTextSelection = () => {
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
        setSelection(selectedText);
        setMenuPosition({
          x: constants.X - 15 + (constants.DEL_X + 0.8) * col,
          y: constants.Y + 12 + constants.DEL_Y * row,
        });
        setShowPopup(true);
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

export default SingleLineEditor;
