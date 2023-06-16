"use client";
import React, { useState, useContext } from "react";
import { useCustomTheme } from "./useThemeHook";
import DirectionModeContext from "@/context/DirectionModeContext";

export default function LeftNavButton(props) {
  const { themeStyles } = useCustomTheme();
  const Direction = useContext(DirectionModeContext);
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
          borderTopRightRadius: Direction.directionMode.LeftToRight
            ? "50px"
            : "0px",
          borderBottomRightRadius: Direction.directionMode.LeftToRight
            ? "50px"
            : "0px",
          borderTopLeftRadius: Direction.directionMode.LeftToRight
            ? "0px"
            : "50px",
          borderBottomLeftRadius: Direction.directionMode.LeftToRight
            ? "0px"
            : "50px",
        }}
      >
        {props.index}
      </div>
    </a>
  );
}
