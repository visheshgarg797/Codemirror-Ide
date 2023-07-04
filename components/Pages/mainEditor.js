"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import IDE from "../Layout/ide";

const MainEditor = () => {
  const { themeStyles } = useCustomTheme();

  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        paddingTop: "60px",
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
