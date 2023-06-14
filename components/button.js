"use client";
import React, { useState } from "react";
import { useCustomTheme } from "./useThemeHook";

export default function Button(props) {
  const { themeStyles } = useCustomTheme();
  return (
    <button
      className="bg-gray-700 px-4 py-2 ml-2 rounded-full hover:bg-gray-800"

      // style={{
      //   cursor: "pointer",
      //   "&:hover": {
      //     backgroundColor: themeStyles.col03.backgroundColor,
      //   },
      //   fontFamily:
      //     "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      // }}
      // onMouseEnter={(e) => {
      //   e.target.style.backgroundColor = themeStyles.col03.backgroundColor;
      //   e.target.style.color = themeStyles.col03.color;
      // }}
      // onMouseLeave={(e) => {
      //   e.target.style.backgroundColor = themeStyles.col01.backgroundColor;
      //   e.target.style.color = themeStyles.col01.color;
      // }}
    >
      {props.index}
    </button>
  );
}
