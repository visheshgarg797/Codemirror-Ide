"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../../context/useThemeHook";

const RightBar = ({ list }) => {
  const { themeStyles } = useCustomTheme();
  const [isOpenArray, setIsOpenArray] = useState(
    Array.from({ length: list.length }, (_, i) => i === 0)
  );
  const handleClick = (index) => {
    setIsOpenArray((prevOpenArray) => {
      const updatedArray = prevOpenArray.map((value, i) => {
        return i === index ? !value : false;
      });
      return updatedArray;
    });
  };

  return (
    <div className="hidden lg:block">
      <div
        className="bg-gray-800 fixed top-0 mt-16 end-0 flex flex-col sm:w-16 md:w-32 lg:w-64"
        style={{
          backgroundColor: themeStyles.col02.backgroundColor,
          color: themeStyles.col02.color,
        }}
      >
        <div className="flex items-center justify-end">
          <div
            className="mb-4 text-opacity-100 text-gray-500 font-optimistic-text font-sans -apple-system ui-sans-serif system-ui BlinkMacSystemFont Segoe UI Roboto Helvetica Neue Arial Noto Sans sans-serif Apple Color Emoji Segoe UI Emoji Segoe UI Symbol Noto Color Emoji"
            style={{
              fontSize: "12px",
              marginTop: "10px",
              fontFamily: "Optimistic Text, serif",
            }}
          >
            <span style={{ marginBottom: "2rem" }}>FEATURES SUPPORT</span>
            <div
              className="flex flex-col"
              style={{
                fontSize: "14px",
                marginTop: "4px",
                paddingInlineEnd: "1rem",
                color: themeStyles.col02.color,
                fontFamily: themeStyles.font,
                fontWeight: "500",
              }}
            >
              {list.map((listItem, index) => {
                return (
                  <div className="space-y-4" key={index}>
                    <div
                      className={themeStyles.classRnb}
                      style={{
                        fontFamily: themeStyles.font,
                        paddingLeft: "0rem",
                        fontWeight: "500",
                        color: themeStyles.col02.color,
                        backgroundColor: themeStyles.col02.backgroundColor,
                      }}
                      onClick={() => handleClick(index)}
                    >
                      <span>{listItem.heading}</span>
                      <svg
                        className={`w-4 h-4 transition-transform transform ${
                          isOpenArray[index] ? "rotate-90" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                    <div
                      className={`${isOpenArray[index] ? "block" : "hidden"} `}
                    >
                      <div
                        style={{
                          fontWeight: "400",
                          fontSize: "0.85rem",
                          marginBottom: "1rem",
                          backgroundColor: themeStyles.col02.backgroundColor,
                          color: themeStyles.col02.color,
                        }}
                      >
                        {listItem.body}
                      </div>
                    </div>
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
