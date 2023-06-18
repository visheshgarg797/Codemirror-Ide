"use client";
import React from "react";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import constants from "@/utils/constants";

export default function LeftNavButton(props) {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();
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
          borderTopRightRadius:
            direction === constants.LEFT_TO_RIGHT ? "50px" : "0px",
          borderBottomRightRadius:
            direction === constants.LEFT_TO_RIGHT ? "50px" : "0px",
          borderTopLeftRadius:
            direction === constants.LEFT_TO_RIGHT ? "0px" : "50px",
          borderBottomLeftRadius:
            direction === constants.LEFT_TO_RIGHT ? "0px" : "50px",
        }}
      >
        {props.index}
      </div>
    </a>
  );
}
