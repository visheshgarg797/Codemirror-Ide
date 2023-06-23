"use client";
import React, { useState, useContext } from "react";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import { EDITOR_MODES } from "@/constants/EditorModes";

const EditorModeToggleButton = () => {
  const { themeStyles } = useCustomTheme();
  const { editorMode, updateEditorMode } = useCustomEditorMode();
  const handleModeChange = (e) => {
    const selectedMode = e.target.value;
    updateEditorMode(selectedMode);
  };
  return (
    <>
      <h1
        className={"text-xl font-serif mb-2"}
        style={{
          color: themeStyles.col02.color,
          font: themeStyles.font,
          fontSize: "24px",
          fontWeight: 800,
        }}
      >
        Select mode
      </h1>

      <label
        for="Multi Line Editing Mode"
        style={{
          color: themeStyles.col02.color,
          font: themeStyles.font,
          fontSize: "20px",
        }}
      >
        <input
          type="radio"
          value={EDITOR_MODES.MULTILINE_EDITOR_MODE}
          checked={editorMode === EDITOR_MODES.MULTILINE_EDITOR_MODE}
          onChange={handleModeChange}
          className="form-radio pl-2"
          id={EDITOR_MODES.MULTILINE_EDITOR_MODE}
        />
        Multi Line Editing Mode
      </label>
      <br />
      <label
        for={EDITOR_MODES.SINGLELINE_EDITOR_MODE}
        style={{
          color: themeStyles.col02.color,
          font: themeStyles.font,
          fontSize: "20px",
        }}
      >
        <input
          type="radio"
          value={EDITOR_MODES.SINGLELINE_EDITOR_MODE}
          checked={editorMode === EDITOR_MODES.SINGLELINE_EDITOR_MODE}
          onChange={handleModeChange}
          className="form-radio pl-2"
          style={{ color: themeStyles.col02.color }}
          id={EDITOR_MODES.SINGLELINE_EDITOR_MODE}
        />
        Single Line Editing Mode
      </label>
      <br />
      <label
        for="Resizable Editor"
        style={{
          color: themeStyles.col02.color,
          font: themeStyles.font,
          fontSize: "20px",
        }}
      >
        <input
          type="radio"
          value={EDITOR_MODES.RESIZABLE_EDITOR_MODE}
          checked={editorMode === EDITOR_MODES.RESIZABLE_EDITOR_MODE}
          onChange={handleModeChange}
          className="form-radio pl-2"
          id={EDITOR_MODES.RESIZABLE_EDITOR_MODE}
        />
        Resizable Editor
      </label>
    </>
  );
};

export default EditorModeToggleButton;
