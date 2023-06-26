"use client";
import Button from "./button";
import ButtonDark from "./themeToggleButton";
import React from "react";
import { useCustomTheme } from "../context/useThemeHook";
import ThemeToggleButton from "./themeToggleButton";
import DirectionChangeButton from "./DirectionChangeButton";
import GitHubButton from "./GitHubButton";

const Navbar = () => {
  const { themeStyles } = useCustomTheme();

  return (
    <nav
      className="py-0 px-4   sticky top-0 z-10"
      style={{
        backgroundColor: themeStyles.col01.backgroundColor,
        height: "60px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    >
      <div className="flex justify-between items-center">
        <h1
          className="text-white flex-grow"
          style={{
            color: themeStyles.col03.color,
            fontSize: "30px",
            fontFamily: themeStyles.font,
            fontWeight: "700",
            marginTop: "8px",
          }}
        >
          CODEMIRROR IDE
        </h1>
        <div className="flex justify-end" style={{ marginTop: "8px" }}>
          <DirectionChangeButton />
          <GitHubButton />
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
