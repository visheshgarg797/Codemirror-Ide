"use client";
import Button from "./button";
import ButtonDark from "./buttonDark";
import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./themeProvider";

export default function Navbar() {
  const { theme, getThemeStyles } = useContext(ThemeContext);
  const themeStyles = getThemeStyles();

  return (
    <nav
      className="bg-gray-800 py-0 px-8 sticky top-0 z-10"
      style={{
        backgroundColor: themeStyles.col01.backgroundColor,
        borderRadius: "100px",
        height: "68px",
      }}
    >
      <div className="flex justify-between items-center">
        <h1
          className="text-white flex-grow"
          style={{
            color: themeStyles.col03.color,
            fontWeight: "bold",
            fontSize: "40px",
            fontFamily:
              "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontWeight: "700",
          }}
        >
          {" "}
          CODEMIRROR IDE{" "}
        </h1>
        <div className="flex justify-end">
          <Button index="Button" />
          <Button index="Github" />
          <ButtonDark index="Mode" />
        </div>
      </div>
    </nav>
  );
}
