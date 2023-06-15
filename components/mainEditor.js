"use client";
import ButtonLeft from "./leftNavButton";
import React, { useState } from "react";
import { useCustomTheme } from "./useThemeHook";

export default function MainEditor() {
  const { themeStyles } = useCustomTheme();
  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        marginLeft: "390px",
        marginRight: "130px",
        paddingRight: "20px",
        paddingBottom: "60px",
      }}
    >
      <h1
        className="editor pt-70"
        style={{
          color: themeStyles.col02.color,
          paddingTop: "40px",
          fontSize: "40px",
          fontFamily: themeStyles.font,
          fontWeight: "700",
        }}
      >
        Editor
      </h1>
      <p>
        <iframe
          src="https://www.programiz.com/javascript/online-compiler/"
          style={{ width: "100%", height: "500px" }}
        ></iframe>
      </p>
    </div>
  );
}
