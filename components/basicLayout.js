"use client";
import React, { useState } from "react";
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
import RightBar from "./RightFeatures";

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

const BasicLayout = ({ children }) => {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();
  const { module } = useParams();
  if (!ALL_MODULES.has(module)) {
    // render Error page
    return null;
  }
  const BodyComponent = MODULE_VS_BODY_COMPONENT[module];
  return (
    <div
      dir={direction}
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
};
export default BasicLayout;
