"use client";
import React, { useState } from "react";
import { useCustomTheme } from "./useThemeHook";

export default function LeftNavButton(props) {
  const { themeStyles } = useCustomTheme();
  return (
    <a href={props.href}>
      <div
        className={themeStyles.classLnb}
        style={{
          color:
            window.location.pathname === props.path
              ? themeStyles.col03.color
              : themeStyles.col01.color,
          width: "20rem",
          fontFamily: themeStyles.font,
          fontWeight: "700",
          borderTopRightRadius: "50px",
          borderBottomRightRadius: "50px",
        }}
      >
        {props.index}
      </div>
    </a>
  );
}
