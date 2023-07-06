"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
const RightBar = (props) => {
  const { themeStyles } = useCustomTheme();

  return (
    <div className="right-div">
      <div
        className="bg-gray-800 fixed top-0 mt-16 end-0 flex flex-col sm:w-16 md:w- lg:w-64"
        style={{
          backgroundColor: themeStyles.col02.backgroundColor,
          color: themeStyles.col02.color,
        }}
      >
        <div className="flex items-center justify-end p-2">
          <div
            className="mb-4 text-opacity-100 text-gray-500  font-optimistic-text font-sans -apple-system ui-sans-serif system-ui BlinkMacSystemFont Segoe UI Roboto Helvetica Neue Arial Noto Sans sans-serif Apple Color Emoji Segoe UI Emoji Segoe UI Symbol Noto Color Emoji"
            style={{
              fontSize: "12px",
              marginTop: "10px",
              fontFamily: "Optimistic Text, serif",
            }}
          >
            FEATURES
            <div
              className="flex flex-col"
              style={{
                fontSize: "14px",
                marginTop: "4px",
                color: themeStyles.col02.color,
                fontFamily: themeStyles.font,
                fontWeight: "500",
              }}
            >
              {props.features.map((prop, index) => {
                return (
                  <div key={index} class="flex justify-between py-2">
                    {prop}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
