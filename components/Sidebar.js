"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";
import LeftNavButton from "./leftNavButton";
import EditorLeftNavButton from "./EditorLeftNavbutton";
import styles from "./style.css";

const Sidebar = () => {
  const { themeStyles } = useCustomTheme();

  return (
    <div
      className="bg-gray-800 w-128 fixed mt-8"
      style={{
        width: "23rem",
        backgroundColor: themeStyles.col02.backgroundColor,
      }}
    >
      <nav className="flex flex-col items-stretch" style={{ width: "20rem" }}>
        {/* <div className="p-4 py-1" /> */}
        <div
          className="mb-2 text-opacity-100 text-gray-500  font-optimistic-text font-sans -apple-system ui-sans-serif system-ui BlinkMacSystemFont Segoe UI Roboto Helvetica Neue Arial Noto Sans sans-serif Apple Color Emoji Segoe UI Emoji Segoe UI Symbol Noto Color Emoji"
          style={{
            fontSize: "12px",
            marginInlineStart: "19px",
            fontFamily: "Optimistic Text, serif",
          }}
        >
          GET STARTED
        </div>
        <LeftNavButton index="Introduction" path="/intro" />
        <LeftNavButton index="Analysis" path="/analysis" />
        <EditorLeftNavButton index="Editor" path="/editor" />
        <LeftNavButton index="Conclusion" path="/conclusion" />
      </nav>
    </div>
  );
};

export default Sidebar;
