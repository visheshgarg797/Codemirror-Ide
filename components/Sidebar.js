"use client";
import ButtonLeft from "./leftNavButton";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";
import LeftNavButton from "./leftNavButton";

const Sidebar = () => {
  const { themeStyles } = useCustomTheme();

  return (
    <div
      className="bg-gray-800 w-128 fixed top-32"
      style={{
        width: "23rem",
        backgroundColor: themeStyles.col02.backgroundColor,
      }}
    >
      <nav className="flex flex-col items-stretch" style={{ width: "20rem" }}>
        <div className="p-4 py-10 " />
        <LeftNavButton index="Introduction" path="/intro" />
        <LeftNavButton index="Analysis" path="/analysis" />
        <LeftNavButton index="Editor" path="/editor" />
        <LeftNavButton index="Conclusion" path="/conclusion" />
      </nav>
    </div>
  );
};

export default Sidebar;
