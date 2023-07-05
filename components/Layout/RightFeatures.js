"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
const RightBar = (props) => {
  const { themeStyles } = useCustomTheme();

  return (
    <div className="right-div">
      <div
        className="bg-gray-800 w-128 fixed top-0 mt-16 end-0 flex flex-col"
        style={{
          display: window.innerWidth <= 600 ? "none" : "block",
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
                fontFamily: "Optimistic Text, serif",
                fontWeight: "500",
              }}
            >
              {props.features.map((prop, index) => {
                return (
                  <div
                    key={index}
                    class="flex justify-between py-2"
                    style={{ width: "250px" }}
                  >
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
