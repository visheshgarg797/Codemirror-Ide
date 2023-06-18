"use client";
import { useContext } from "react";
import { ThemeContext } from "./themeProvider";

export function useCustomTheme() {
  const themeContext = useContext(ThemeContext);

  const { toggleTheme, themeStyles } = themeContext;

  return {
    toggleTheme,
    themeStyles,
  };
}
