"use client";
import ButtonLeft from "./leftNavButton";
import React, { useState } from "react";
import { useCustomTheme } from "./useThemeHook";
import LeftNavButton from "./leftNavButton";

export default function Sidebar() {
  const { themeStyles } = useCustomTheme();

  return (
    <div
      className="bg-gray-800 w-128 fixed top-32"
      style={{
        width: "23rem",
        backgroundColor: themeStyles.col02.backgroundColor,
        height: "calc(100vh - 270px)",
      }}
    >
      <nav className="flex flex-col items-stretch" style={{ width: "20rem" }}>
        <div className="p-4 py-10 " />
        <LeftNavButton
          index="Introduction"
          href="http://localhost:3000/intro"
          path="/intro"
        />
        <LeftNavButton
          index="Analysis"
          href="http://localhost:3000/analysis"
          path="/analysis"
        />
        <LeftNavButton
          index="Editor"
          href="http://localhost:3000/editor"
          path="/editor"
        />
        <LeftNavButton
          index="Conclusion"
          href="http://localhost:3000/conclusion"
          path="/conclusion"
        />
      </nav>
    </div>
  );
}
