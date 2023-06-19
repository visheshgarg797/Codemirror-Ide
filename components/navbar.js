"use client";
import Button from "./button";
import ButtonDark from "./themeToggleButton";
import React from "react";
import { useCustomTheme } from "../context/useThemeHook";
import ThemeToggleButton from "./themeToggleButton";
import DirectionChangeButton from "./DirectionChangeButton";

export default function Navbar() {
  const { themeStyles } = useCustomTheme();

  return (
    <nav
      className="py-0 px-8 sticky top-0 z-10"
      style={{
        backgroundColor: themeStyles.col01.backgroundColor,
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        height: "60px",
      }}
    >
      <div className="flex justify-between items-center">
        <h1
          className="text-white flex-grow"
          style={{
            color: themeStyles.col03.color,
            fontWeight: "bold",
            fontSize: "40px",
            fontFamily: themeStyles.font,
            fontWeight: "700",
          }}
        >
          CODEMIRROR IDE
        </h1>
        <div className="flex justify-end">
          <DirectionChangeButton />
          <Button index="About" href="https://codemirror.net/" />
          <Button
            index="Github"
            href="https://github.com/visheshgarg797/Codemirror-Ide"
          />
          <ThemeToggleButton index="Mode" />
        </div>
      </div>
    </nav>
  );
}
