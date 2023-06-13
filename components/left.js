"use client";
import ButtonLeft from "./buttonleft";
import React, { useState, useContext } from "react";
import { ThemeContext, ThemeProvider } from "./themeProvider";

export default function Left() {
  const { theme, getThemeStyles } = useContext(ThemeContext);
  const themeStyles = getThemeStyles();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="bg-gray-800 w-128 fixed left-0 top-32"
      style={{
        width: "23rem",
        backgroundColor: themeStyles.col02.backgroundColor,
        height: "calc(100vh - 270px)",
      }}
    >
      <nav className="flex flex-col items-stretch" style={{ width: "20rem" }}>
        <a className="text-white text-2xl font-bold p-4 py-10 " />

        <ButtonLeft
          index="Introduction"
          href="http://localhost:3000/intro"
          path="/intro"
        />
        <ButtonLeft
          index="Analysis"
          href="http://localhost:3000/analysis"
          path="/analysis"
        />
        <ButtonLeft
          index="Editor"
          href="http://localhost:3000/editor"
          path="/editor"
        />
        <ButtonLeft
          index="Conclusion"
          href="http://localhost:3000/conclusion"
          path="/conclusion"
        />
      </nav>
    </div>
  );
}
