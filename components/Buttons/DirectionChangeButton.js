"use client";
import React from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import { useCustomTheme } from "../../context/useThemeHook";
import { Theme_Name } from "@/constants/ThemeName";
import { Direction } from "@/constants/Direction";

const DirectionChangeButton = () => {
  const { direction, toggleDirection } = useCustomDirection();
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
        {direction === Direction.LTR ? (
          <svg width="24" height="24" viewBox="0 0 512 512" aria-hidden="true">
            <path
              fill-rule="evenodd"
              fill={
                themeStyles.theme === Theme_Name.LIGHT_MODE
                  ? "#000000"
                  : "#FFFFFF"
              }
              d="M 108 40 L 108 88 L 428 88 L 428 40 L 108 40 z M 28 136 L 28 184 L 428 184 L 428 136 L 28 136 z M 204 232 L 204 280 L 428 280 L 428 232 L 204 232 z M 268 328 L 268 376 L 428 376 L 428 328 L 268 328 z M 156 424 L 156 472 L 428 472 L 428 424 L 156 424 z"
            ></path>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 512 512" aria-hidden="true">
            <path
              fill-rule="evenodd"
              fill={
                themeStyles.theme === Theme_Name.LIGHT_MODE
                  ? "#000000"
                  : "#FFFFFF"
              }
              d="M 84 40 L 84 88 L 404 88 L 404 40 L 84 40 z M 84 136 L 84 184 L 484 184 L 484 136 L 84 136 z M 84 232 L 84 280 L 308 280 L 308 232 L 84 232 z M 84 328 L 84 376 L 244 376 L 244 328 L 84 328 z M 84 424 L 84 472 L 356 472 L 356 424 L 84 424 z"
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default DirectionChangeButton;
