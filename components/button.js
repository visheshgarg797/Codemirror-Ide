"use client";
import React, { useState } from "react";
import { useCustomTheme } from "./useThemeHook";

export default function Button(props) {
  const { themeStyles } = useCustomTheme();
  const classname = "hover : bg-cyan-900";
  return (
    <a href={props.href}>
      <div
        className={themeStyles.classButton}
        style={{
          cursor: "pointer",
          color: themeStyles.col02.color,
          fontFamily: themeStyles.font,
        }}
      >
        {props.index}
      </div>
    </a>
  );
}
