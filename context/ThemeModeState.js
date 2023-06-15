"use client";
import React, { useState } from "react";
import ThemeModeContext from "./ThemeModeContext";

const ThemeModeState = (props) => {
  const State = {
    DarkMode: true,
    LightMode: false,
  };

  const [ThemeMode, setThemeMode] = useState(State);

  const updateThemeMode = () => {
    setThemeMode({
      DarkMode: !ThemeMode.DarkMode,
      LightMode: !ThemeMode.LightMode,
    });
  };

  return (
    <ThemeModeContext.Provider value={{ ThemeMode, updateThemeMode }}>
      {props.children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeState;
