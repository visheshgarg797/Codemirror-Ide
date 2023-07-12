import React, { useRef, useEffect, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, highlightActiveLine, lineNumbers } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { autocompletion } from "@codemirror/autocomplete";
import { MultilineSampleThemeList } from "@/utils/MultilineSampleThemeList";
import { syntaxHighlighting } from "@codemirror/language";
import { useCustomTheme } from "@/context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import {
  editorHighlightStyle,
  regexpLinter,
  pushSelectionChangesToEditor,
  handleTextSelection,
  handleDiscardPopup,
  handleMouseDown,
} from "@/utils/EditorFunctions";
import getKeywordFilter from "@/utils/GetSuggestions";
import { startCompletion } from "@codemirror/autocomplete";
import { Theme_Name } from "@/constants/ThemeName";
import { antrl4Lang } from "../Grammer/antrl4-lang";
import { Direction } from "@/constants/Direction";
import { lintGutter } from "@codemirror/lint";
import { SampleThemeListForSingleLineEditor } from "@/utils/SingleSampleThemeList";
import { ResizableSampleThemeList } from "@/utils/ResizableSampleThemeList";
import { multiThemeSampleThemeList } from "@/utils/multiThemeSampleThemeList";
import MultiLineEditorComponent from "./MultiLineEditorComponent";
import SingleLineEditorComponent from "./SingleLineEditorComponent";
import ResizeableEditorComponent from "./ResizeableEditorComponent";
import MultipleThemeEditorComponent from "./MultipleThemeEditorComponent";
import COMPONENT_CONSTANTS from "../ComponentConstants";

const BaseEditor = ({ editorType }) => {
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
  const [suggestionBoxCorrds, setSuggestionBoxCoords] = useState({
    left: 0,
    top: 0,
  });
  const myHighlightStyle = editorHighlightStyle(themeStyles);
  const [code, setCode] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [selectedTextIsKeyword, setSelectedTextIsKeyword] = useState(false);
  const [maxLines, setMaxLines] = useState(0);

  const themeMapping = {};
  for (let i = 0; i < 4; i++) {
    themeMapping[COMPONENT_CONSTANTS.THEME_NAMES[i]] = i;
  }
  const [themeNamesRender, setThemeNamesRender] = useState([]);
  const [themeIndex, setThemeIndex] = useState(
    themeStyles.theme === Theme_Name.LIGHT_MODE ? 0 : 1
  );
  const [currentThemeSelected, setCurrentThemeSelected] = useState(
    COMPONENT_CONSTANTS.THEME_NAMES[themeIndex]
  );
  const handleThemeChange = (themeChangeEvent) => {
    let idx =
      themeMapping[themeChangeEvent.target.value] +
      (direction === Direction.RTL ? 4 : 0);
    setThemeIndex(idx);
    setCurrentThemeSelected(COMPONENT_CONSTANTS.THEME_NAMES[idx % 4]);
  };

  const EXTENSION_CONFIG = {
    MULTILINE_EDITOR_MODE: {
      dynamicDepedency: [themeStyles, direction],
      extensions: [
        MultilineSampleThemeList[
          direction === Direction.LTR
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],
        lintGutter(),
        EditorView.lineWrapping,
      ],
    },
    SINGLELINE_EDITOR_MODE: {
      dynamicDepedency: [themeStyles, direction],
      extensions: [
        EditorState.transactionFilter.of((tr) =>
          tr.newDoc.lines > 1 ? [] : tr
        ),
        SampleThemeListForSingleLineEditor[
          direction === Direction.LTR
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],
        highlightActiveLine(),
        lineNumbers({ visible: false }),
        EditorView.domEventHandlers({
          paste(event, view) {
            handlePaste(event.clipboardData.getData("text/plain"));
          },
        }),
      ],
    },
    RESIZABLE_EDITOR_MODE: {
      dynamicDepedency: [themeStyles, direction, maxLines],
      extensions: [
        ResizableSampleThemeList[maxLines][
          direction === Direction.LTR
            ? themeStyles.theme === Theme_Name.LIGHT_MODE
              ? 0
              : 1
            : themeStyles.theme === Theme_Name.LIGHT_MODE
            ? 2
            : 3
        ],
        lintGutter(),
        EditorView.lineWrapping,
      ],
    },
    MULTITHEME_EDITOR_MODE: {
      dynamicDepedency: [themeStyles, direction, themeIndex],
      extensions: [
        multiThemeSampleThemeList[themeIndex],
        lintGutter(),
        EditorView.lineWrapping,
      ],
    },
  };
  const BASE_EDITOR_CONFIG = [
    basicSetup,
    antrl4Lang,
    regexpLinter({ viewRef }),
    autocompletion({
      override: [
        getKeywordFilter({
          setSuggestions,
          showCustomSuggestionsPopup: true,
        }),
      ],
    }),
    syntaxHighlighting(myHighlightStyle),
    EditorView.updateListener.of((update) => {
      if (update?.state?.selection?.ranges) {
        handleTextSelection(
          viewRef,
          popupState,
          setPopupState,
          setSelectedTextIsKeyword
        );
      }
      if (update.docChanged) {
        setCode(viewRef.current.state.doc.toString());
        setPopupState((popupState) => ({
          ...popupState,
          showPopup: false,
        }));
        return startCompletion(viewRef.current, { trigger: "input" });
      }
    }),
  ];

  useEffect(() => {
    if (viewRef && viewRef.current) {
      setCode(viewRef.current.state.doc.toString());
    }
    const startState = EditorState.create({
      doc: code,
      extensions: [
        ...BASE_EDITOR_CONFIG,
        ...EXTENSION_CONFIG[editorType].extensions,
      ],
    });
    const View = new EditorView({
      state: startState,
      parent: editorRef.current,
    });
    View.dom.addEventListener("mousedown", () =>
      handleMouseDown({ setCode, popupState, setPopupState, viewRef })
    );
    viewRef.current = View;

    const suggestionCoords = editorRef.current.getBoundingClientRect();
    if (suggestionBoxCorrds.left === 0 && suggestionBoxCorrds.top === 0) {
      setSuggestionBoxCoords((suggestionBoxCorrds) => ({
        ...suggestionBoxCorrds,
        left: suggestionCoords.left - 2,
        top: suggestionCoords.top + 50,
      }));
    }

    return () => {
      View.destroy();
    };
  }, EXTENSION_CONFIG[editorType].dynamicDepedency);

  useEffect(() => {
    if (
      editorType === COMPONENT_CONSTANTS.EDITOR_CONFIG.MULTITHEME_EDITOR_MODE
    ) {
      let persistCurrentTheme = false;
      let idx;
      if (themeStyles.theme == Theme_Name.LIGHT_MODE) {
        setThemeNamesRender((themeNamesRender) => [
          "Github Light Theme",
          "Gruvbox Light Hard",
        ]);
        if (
          currentThemeSelected === COMPONENT_CONSTANTS.THEME_NAMES[0] ||
          currentThemeSelected === COMPONENT_CONSTANTS.THEME_NAMES[2]
        ) {
          persistCurrentTheme = true;
        } else {
          if (currentThemeSelected === COMPONENT_CONSTANTS.THEME_NAMES[1]) {
            idx = 0;
          }
          if (currentThemeSelected === COMPONENT_CONSTANTS.THEME_NAMES[3]) {
            idx = 2;
          }
        }
      } else {
        setThemeNamesRender((themeNamesRender) => [
          "Github Dark Theme",
          "Gruvbox Dark Hard",
        ]);
        if (
          currentThemeSelected === COMPONENT_CONSTANTS.THEME_NAMES[1] ||
          currentThemeSelected === COMPONENT_CONSTANTS.THEME_NAMES[3]
        ) {
          persistCurrentTheme = true;
        } else {
          if (currentThemeSelected === COMPONENT_CONSTANTS.THEME_NAMES[0]) {
            idx = 1;
          }
          if (currentThemeSelected === COMPONENT_CONSTANTS.THEME_NAMES[2]) {
            idx = 3;
          }
        }
      }
      if (!persistCurrentTheme) {
        setThemeIndex(idx);
        setCurrentThemeSelected(COMPONENT_CONSTANTS.THEME_NAMES[idx]);
      }
    }
  }, [themeStyles.theme]);

  return editorType ===
    COMPONENT_CONSTANTS.EDITOR_CONFIG.MULTILINE_EDITOR_MODE ? (
    <MultiLineEditorComponent
      editorRef={editorRef}
      popupState={popupState}
      pushSelectionChangesToEditor={(wordsToInsert) =>
        pushSelectionChangesToEditor({
          wordsToInsert,
          viewRef,
          popupState,
          setPopupState,
          selectedTextIsKeyword,
          code,
        })
      }
      handleDiscardPopup={() =>
        handleDiscardPopup({ popupState, setPopupState })
      }
    />
  ) : editorType ===
    COMPONENT_CONSTANTS.EDITOR_CONFIG.SINGLELINE_EDITOR_MODE ? (
    <SingleLineEditorComponent
      editorRef={editorRef}
      popupState={popupState}
      pushSelectionChangesToEditor={(wordsToInsert) =>
        pushSelectionChangesToEditor({
          wordsToInsert,
          viewRef,
          popupState,
          setPopupState,
          selectedTextIsKeyword,
          code,
        })
      }
      handleDiscardPopup={() =>
        handleDiscardPopup({ popupState, setPopupState })
      }
      suggestionBoxCorrds={suggestionBoxCorrds}
    />
  ) : editorType === COMPONENT_CONSTANTS.EDITOR_CONFIG.RESIZABLE_EDITOR_MODE ? (
    <ResizeableEditorComponent
      editorRef={editorRef}
      popupState={popupState}
      pushSelectionChangesToEditor={(wordsToInsert) =>
        pushSelectionChangesToEditor({
          wordsToInsert,
          viewRef,
          popupState,
          setPopupState,
          selectedTextIsKeyword,
          code,
        })
      }
      handleDiscardPopup={() =>
        handleDiscardPopup({ popupState, setPopupState })
      }
      setMaxLines={setMaxLines}
    />
  ) : (
    <MultipleThemeEditorComponent
      editorRef={editorRef}
      popupState={popupState}
      pushSelectionChangesToEditor={(wordsToInsert) =>
        pushSelectionChangesToEditor({
          wordsToInsert,
          viewRef,
          popupState,
          setPopupState,
          selectedTextIsKeyword,
          code,
        })
      }
      currentThemeSelected={currentThemeSelected}
      handleThemeChange={handleThemeChange}
      themeNamesRender={themeNamesRender}
    />
  );
};

export default BaseEditor;
