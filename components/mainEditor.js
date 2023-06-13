"use client";
import ButtonLeft from "./buttonleft";
import React, { useState, useContext } from "react";
import { ThemeContext, ThemeProvider } from "./themeProvider";

export default function MainEditor() {
  const { theme, getThemeStyles } = useContext(ThemeContext);
  const themeStyles = getThemeStyles();
  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        marginLeft: "390px",
        marginRight: "130px",
        paddingLeft: "0px",
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
          fontFamily:
            "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          fontWeight: "700",
        }}
      >
        {" "}
        Editor{" "}
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
