"use client";
import React, { useState, useContext } from "react";
import EditorModeContext from "../context/EditorModeContext";
import { useCustomTheme } from "./useThemeHook";

const EditorModeToggleButton = () => {
  const EditorMode = useContext(EditorModeContext);
  const { themeStyles } = useCustomTheme();

  const [currentEditorMode, setCurrentEditorMode] = useState(
    EditorMode.editorMode.MultiLineEditorMode
      ? "Multi Line Editing Mode"
      : "Single Line Editing Mode"
  );
  const handleModeChange = (e) => {
    const selectedMode = e.target.value;
    console.log(selectedMode, EditorMode.editorMode);

    if (
      selectedMode === "Single Line Editing Mode" &&
      EditorMode.editorMode.MultiLineEditorMode
    ) {
      console.log("working");
      EditorMode.updateEditorMode();
    }
    if (
      selectedMode === "Multi Line Editing Mode" &&
      EditorMode.editorMode.SingleLineEditorMode
    ) {
      console.log("working");
      EditorMode.updateEditorMode();
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
            value="Multi Line Editing Mode"
            checked={currentEditorMode === "Multi Line Editing Mode"}
            onChange={handleModeChange}
            className="form-radio pl-2"
            id="Multi Line Editing Mode"
          />
          Multi Line Editing Mode
        </lable>
        <lable
          for="Single Line Editing Mode"
          style={{ color: themeStyles.col02.color }}
        >
          <input
            type="radio"
            value="Single Line Editing Mode"
            checked={currentEditorMode === "Single Line Editing Mode"}
            onChange={handleModeChange}
            className="form-radio pl-2"
            style={{ color: themeStyles.col02.color }}
            id="Single Line Editing Mode"
          />
          Single Line Editing Mode
        </lable>
      </div>
    </div>
  );
};

export default EditorModeToggleButton;
