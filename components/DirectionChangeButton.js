"use client";
import React from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import { useCustomTheme } from "../context/useThemeHook";

const DirectionChangeButton = () => {
  const { direction, toggleDirection } = useCustomDirection();
  const { themeStyles } = useCustomTheme();

  return (
    <button
      onClick={toggleDirection}
      className={themeStyles.classButton}
      style={{
        cursor: "pointer",
        color: themeStyles.col02.color,
        fontFamily: themeStyles.font,
      }}
    >
      {direction}
    </button>
  );
};

export default DirectionChangeButton;
