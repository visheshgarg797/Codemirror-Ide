"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useCustomTheme } from "../../context/useThemeHook";
import Sidebar from "./Sidebar";
import Navbar from "./navbar";
import Footer from "./footer";
import MainAnalysis from "../Pages/mainAnalysis";
import MainConclusion from "../Pages/mainConclusion";
import MainEditor from "../Pages/mainEditor";
import MainIntro from "../Pages/mainIntro";
import MainIssuesFaced from "../Pages/IssuesFaced";
import { useCustomDirection } from "@/context/useDirectionHook";

const MODULES = {
  INTRO: "intro",
  ANALYSIS: "analysis",
  EDITOR: "editor",
  CONCLUSION: "conclusion",
  ISSUES: "issues",
};

const ALL_MODULES = new Set(Object.values(MODULES));

const MODULE_VS_BODY_COMPONENT = {
  [MODULES.INTRO]: MainIntro,
  [MODULES.ANALYSIS]: MainAnalysis,
  [MODULES.EDITOR]: MainEditor,
  [MODULES.ISSUES]: MainIssuesFaced,
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
    </div>
  );
};
export default BasicLayout;
