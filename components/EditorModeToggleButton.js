"use client";
import React, { useState, useContext } from "react";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import constants from "@/utils/constants";

const EditorModeToggleButton = () => {
  const { themeStyles } = useCustomTheme();
  const { editorMode, updateEditorMode } = useCustomEditorMode();

  const [currentEditorMode, setCurrentEditorMode] = useState(editorMode);
  console.log("current mode", currentEditorMode);
  const handleModeChange = (e) => {
    const selectedMode = e.target.value;

    if (
      (selectedMode === constants.SINGLELINE_EDITOR_MODE &&
        editorMode === constants.MULTILINE_EDITOR_MODE) ||
      (selectedMode === constants.MULTILINE_EDITOR_MODE &&
        editorMode === constants.SINGLELINE_EDITOR_MODE)
    ) {
      updateEditorMode();
    }
    setCurrentEditorMode(selectedMode);
  };
  return (
    <div className="flex flex-col items-start">
      <div
        className={`text-xl font-serif mb-2 `}
        style={{ color: themeStyles.col02.color }}
      >
        Select mode:
      </div>
      <div className="flex flex-col font-serif antialiased">
        <lable
          for="Multi Line Editing Mode"
          style={{ color: themeStyles.col02.color }}
        >
          <input
            type="radio"
            value={constants.MULTILINE_EDITOR_MODE}
            checked={currentEditorMode === constants.MULTILINE_EDITOR_MODE}
            onChange={handleModeChange}
            className="form-radio pl-2"
            id={constants.MULTILINE_EDITOR_MODE}
          />
          Multi Line Editing Mode
        </lable>
        <lable
          for={constants.SINGLELINE_EDITOR_MODE}
          style={{
            color: themeStyles.col02.color,
            font: themeStyles.font,
            fontSize: "20px",
          }}
        >
          <input
            type="radio"
            value={constants.SINGLELINE_EDITOR_MODE}
            checked={currentEditorMode === constants.SINGLELINE_EDITOR_MODE}
            onChange={handleModeChange}
            className="form-radio pl-2"
            style={{ color: themeStyles.col02.color }}
            id={constants.SINGLELINE_EDITOR_MODE}
          />
          Single Line Editing Mode
        </lable>
      </div>
    </div>
  );
};

export default EditorModeToggleButton;
