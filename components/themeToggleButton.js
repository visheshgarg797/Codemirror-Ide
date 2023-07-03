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
      style={{
        marginInlineStart: "20px",
        marginTop: "8px",
        borderRadius: "50%",
        marginInlineEnd: "6px",
      }}
      height="32px"
      width="32px"
    >
      {themeStyles.theme === Theme_Name.DARK_MODE ? (
        <FaSun size={15} />
      ) : (
        <FaMoon color="black" size={15} />
      )}
    </button>
  );
};
export default ThemeToggleButton;
