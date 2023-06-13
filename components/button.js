"use client";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeProvider } from "./themeProvider";

export default function Button(props) {
  const { theme, getThemeStyles } = useContext(ThemeContext);
  const themeStyles = getThemeStyles();
  console.log(theme);
  console.log(themeStyles);
  return (
    <button
      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 ml-2 rounded-full "
      style={{
        backgroundColor: themeStyles.col01.backgroundColor,
        color: themeStyles.col01.color,
        cursor: "pointer",
        fontFamily:
          "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = themeStyles.col03.backgroundColor;
        e.target.style.color = themeStyles.col03.color;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = themeStyles.col01.backgroundColor;
        e.target.style.color = themeStyles.col01.color;
      }}
    >
      {props.index}
    </button>
  );
}
