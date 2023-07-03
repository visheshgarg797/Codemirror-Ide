"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import IDE from "./ide";
import RightBar from "./RightFeatures";

const MainEditor = () => {
  const { themeStyles } = useCustomTheme();

  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        paddingTop: "100px",
        marginInlineStart: "320px",
        marginInlineEnd: "200px",
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
