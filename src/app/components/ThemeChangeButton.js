"use client";
import React, { useState, useContext } from "react";
import ThemeModeContext from "../../../context/ThemeModeContext";

const ThemeChangeButton = () => {
  const Theme = useContext(ThemeModeContext);
  const [currentTheme, setCurrentTheme] = useState(
    Theme.ThemeMode.DarkMode ? "Dark Mode" : "Light Mode"
  );
  const handleChangeMode = (e) => {
    setCurrentTheme(currentTheme === "Dark Mode" ? "Light Mode" : "Dark Mode");
    Theme.updateThemeMode();
  };

  return (
    <>
      <button
        id="theme-toggle"
        type="button"
        className={`mb-2 flex items-center justify-center px-4 py-2 rounded-md shadow ${
          currentTheme === "Dark Mode"
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-white text-gray-900 border-gray-300"
        }`}
        onClick={handleChangeMode}
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {currentTheme}
      </button>
    </>
  );
};

export default ThemeChangeButton;
