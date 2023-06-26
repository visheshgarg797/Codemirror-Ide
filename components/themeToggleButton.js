"use client";
import React from "react";
import { useCustomTheme } from "../context/useThemeHook";
import { FaMoon, FaSun } from "react-icons/fa";
import { Theme_Name } from "@/constants/ThemeName";

const ThemeToggleButton = () => {
  const { themeStyles, toggleTheme } = useCustomTheme();
  return (
    <button
      onClick={toggleTheme}
      className={themeStyles.classButton}
      style={{ marginLeft: "20px" }}
    >
      {themeStyles.theme === Theme_Name.DARK_MODE ? (
        <FaSun />
      ) : (
        <FaMoon color="black" />
      )}
    </button>
  );
};
export default ThemeToggleButton;
