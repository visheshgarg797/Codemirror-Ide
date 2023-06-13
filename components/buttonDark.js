"use client";
import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./themeProvider";

export default function ButtonDark() {
  const { theme, toggleTheme, getThemeStyles } = useContext(ThemeContext);
  const themeStyles = getThemeStyles();
  console.log(theme);
  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 ml-2 rounded-full "
      style={{
        backgroundColor: themeStyles.col01.backgroundColor,
        color: themeStyles.col01.color,
        fontFamily:
          "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = themeStyles.col03.backgroundColor;
        e.target.style.color = themeStyles.col03.color;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = themeStyles.col01.backgroundColor;
        e.target.style.color = themeStyles.col01.color;
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDNW8b6sLF4IrKXmqod4_t_key4XESlyWSg&usqp=CAU"
        width="30"
        height="30"
      ></img>
    </button>
  );
}
