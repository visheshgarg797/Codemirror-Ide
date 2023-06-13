"use client";
import { createContext, useState, useEffect } from "react";
import themeStyles from "./globalThemeNames";
// Create the theme context
export const ThemeContext = createContext();

const initTheme = () => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    return storedTheme;
  } else {
    // If no stored theme, set the initial theme
    localStorage.setItem("theme", "light");
    return "light";
  }
};

// Create the theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initTheme);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);

    // Store the theme in cookies or local storage
    localStorage.setItem("theme", updatedTheme);
  };

  // Getting the theme colors for dark or light mode
  const getThemeStyles = () => {
    return themeStyles.find((item) => item.theme === theme);
  };
  // Define the context value
  const themeContextValue = {
    theme,
    toggleTheme,
    getThemeStyles,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
