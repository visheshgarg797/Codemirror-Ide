"use client";
import React from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import { useCustomTheme } from "../context/useThemeHook";
import { Theme_Name } from "@/constants/ThemeName";

const DirectionChangeButton = () => {
  const { toggleDirection } = useCustomDirection();
  const { themeStyles } = useCustomTheme();

  return (
    <div style={{ marginTop: "4px", marginRight: "12px" }}>
      <button
        type="button"
        className={`active:scale-95 transition-transform flex w-10 h-10 rounded-full items-center justify-center outline-link hover:bg-gray-${
          themeStyles.theme === Theme_Name.DARK_MODE ? "500" : "300"
        }`}
        onClick={toggleDirection}
      >
        <svg
          stroke={
            themeStyles.theme === Theme_Name.DARK_MODE ? "white" : "black"
          }
          width="30"
          height="30"
          viewBox="-2 -2 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default DirectionChangeButton;
