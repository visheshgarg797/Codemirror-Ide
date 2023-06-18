"use client";
import React from "react";
import { useCustomTheme } from "../context/useThemeHook";

export default function ThemeToggleButton() {
  const { themeStyles, toggleTheme } = useCustomTheme();
  return (
    <button
      onClick={toggleTheme}
      className={themeStyles.classButton}
      style={{
        fontFamily: themeStyles.font,
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
