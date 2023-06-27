"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";
import EditorModeToggleButton from "./EditorModeToggleButton";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import IDE from "./ide";
const MainEditor = () => {
  const { themeStyles } = useCustomTheme();
  const { editorMode } = useCustomEditorMode();
  console.log(editorMode);
  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        paddingTop: "100px",
        marginInlineStart: "390px",
        marginInlineEnd: "130px",
        paddingRight: "20px",
        paddingBottom: "60px",
        marginTop: "40px",
      }}
    >
      <IDE />
    </div>
  );
};
export default MainEditor;
