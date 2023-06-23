"use client";
import { createContext, useState } from "react";
import GlobalThemeStyles from "../components/globalThemeNames";
import { Theme_Name } from "@/constants/ThemeName";
// Create the theme context
export const ThemeContext = createContext();

const initTheme = () => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    return storedTheme;
  } else {
    // If no stored theme, set the initial theme
    localStorage.setItem("theme", Theme_Name.LIGHT_MODE);
    return Theme_Name.LIGHT_MODE;
  }
};

// Create the theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initTheme);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const updatedTheme =
      theme === Theme_Name.LIGHT_MODE
        ? Theme_Name.DARK_MODE
        : Theme_Name.LIGHT_MODE;
    setTheme(updatedTheme);

    // Store the theme in cookies or local storage
    localStorage.setItem("theme", updatedTheme);
  };

  // Getting the theme colors for dark or light mode
  const getThemeStyles = () => {
    return GlobalThemeStyles.find((item) => item.theme === theme);
  };
  // Define the context value

  const themeStyles = getThemeStyles();
  const themeContextValue = {
    toggleTheme,
    themeStyles,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
