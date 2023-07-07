"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../../context/useThemeHook";

const RightFeaturesItem = ({ listItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { themeStyles } = useCustomTheme();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="space-y-4">
      <div className="">
        <div
          className={themeStyles.classLnb2}
          style={{
            width: "16rem",
            fontFamily: themeStyles.font,
            fontWeight: "600",
            borderStartEndRadius: "50px",
            borderEndEndRadius: "50px",
          }}
        >
          <span onClick={handleClick}>{listItem.heading}</span>
          <svg
            className={`w-4 h-4 transition-transform transform ${
              isOpen ? "rotate-90" : ""
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
        <div className={`${isOpen ? "block" : "hidden"} `}>
          <div
            className={themeStyles.classLnb}
            style={{
              width: "16rem",
              fontWeight: "400",
              fontSize: "0.85rem",
              paddingLeft: "2rem",
              borderStartEndRadius: "50px",
              borderEndEndRadius: "50px",
            }}
          >
            {listItem.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightFeaturesItem;
