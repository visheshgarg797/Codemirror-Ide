"use client";
import React, { useState } from "react";
// import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { useCustomTheme } from "../context/useThemeHook";
import Sidebar from "./Sidebar";
import Navbar from "./navbar";
import Footer from "./footer";
import MainAnalysis from "./mainAnalysis";
import MainConclusion from "./mainConclusion";
import MainEditor from "./mainEditor";
import MainIntro from "./mainIntro";

import { useCustomDirection } from "@/context/useDirectionHook";

const MODULES = {
  INTRO: "intro",
  ANALYSIS: "analysis",
  EDITOR: "editor",
  CONCLUSION: "conclusion",
};

const ALL_MODULES = new Set(Object.values(MODULES));

const MODULE_VS_BODY_COMPONENT = {
  [MODULES.INTRO]: MainIntro,
  [MODULES.ANALYSIS]: MainAnalysis,
  [MODULES.EDITOR]: MainEditor,
  [MODULES.CONCLUSION]: MainConclusion,
};

export default function BasicLayout({ children }) {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();
  console.log("router", useParams());
  const { module } = useParams();
  if (!ALL_MODULES.has(module)) {
    // render Error page
    return null;
  }
  const BodyComponent = MODULE_VS_BODY_COMPONENT[module];
  if (direction === "LeftToRight") {
    return (
      <div
        dir="ltr"
        className="min-h-screen relative"
        style={{
          backgroundColor: themeStyles.col02.backgroundColor,
        }}
      >
        <Navbar />
        <Sidebar />
        <BodyComponent />
        <Footer />
      </div>
    );
  } else {
    return (
      <div
        dir="rtl"
        className="min-h-screen relative"
        style={{
          backgroundColor: themeStyles.col02.backgroundColor,
        }}
      >
        <Navbar />
        <Sidebar />
        <BodyComponent />
        <Footer />
      </div>
    );
  }
}
