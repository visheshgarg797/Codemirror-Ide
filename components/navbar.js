"use client";
import Button from "./button";
import ButtonDark from "./themeToggleButton";
import React from "react";
import { useCustomTheme } from "./useThemeHook";
import ThemeToggleButton from "./themeToggleButton";

export default function Navbar() {
  const { themeStyles } = useCustomTheme();

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
          <ThemeToggleButton index="Mode" />
        </div>
      </div>
    </nav>
  );
}
