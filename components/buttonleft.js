"use client";
import React, { useState, useContext } from "react";
import { ThemeContext, ThemeProvider } from "./themeProvider";

export default function ButtonLeft(props) {
  const { theme, getThemeStyles } = useContext(ThemeContext);
  const themeStyles = getThemeStyles();
  return (
    <a
      href={props.href}
      className="your-link-styles text-white text-xl font-bold pt-0.5 pb-0.5"
      style={{
        marginLeft: "0px",
      }}
    >
      <button
        className="text-gray-300 hover:text-white py-4 px-4 mb-1 text-center flex-1 rounded-r-full "
        style={{
          backgroundColor:
            window.location.pathname === props.path
              ? themeStyles.col03.backgroundColor
              : themeStyles.col01.backgroundColor,
          color:
            window.location.pathname === props.path
              ? themeStyles.col03.color
              : themeStyles.col01.color,
          width: "20rem",
          fontFamily:
            "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          fontWeight: "700",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = themeStyles.col03.backgroundColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor =
            window.location.pathname === props.path
              ? themeStyles.col03.backgroundColor
              : themeStyles.col01.backgroundColor;
          e.target.style.color =
            window.location.pathname === props.path
              ? themeStyles.col03.color
              : themeStyles.col01.color;
        }}
      >
        {props.index}
      </button>
    </a>
  );
}
