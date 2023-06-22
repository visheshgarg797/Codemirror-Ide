"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";
import EditorModeToggleButton from "./EditorModeToggleButton";
import IDE from "./ide";
const MainEditor = () => {
  const { themeStyles } = useCustomTheme();
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
      }}
    >
      <EditorModeToggleButton />
      <IDE />
    </div>
  );
};
export default MainEditor;
