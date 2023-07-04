"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import ThemeToggleButton from "../Buttons/themeToggleButton";
import DirectionChangeButton from "../Buttons/DirectionChangeButton";
import GitHubButton from "../Buttons/GitHubButton";

const Navbar = () => {
  const { themeStyles } = useCustomTheme();

  return (
    <nav
      className="py-0 px-4 sticky top-0 z-10"
      style={{
        backgroundColor: themeStyles.col01.backgroundColor,
        height: "3rem",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    >
      <div className="flex justify-between items-center">
        <h1
          className="text-white flex-grow"
          style={{
            color: themeStyles.col03.color,
            fontSize: "25px",
            fontFamily: themeStyles.font,
            fontWeight: "700",
            marginTop: "5px",
          }}
        >
          CODEMIRROR IDE
        </h1>
        <div className="flex justify-end">
          <DirectionChangeButton />
          <GitHubButton />
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
