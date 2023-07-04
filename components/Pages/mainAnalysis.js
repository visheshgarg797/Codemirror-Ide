"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import { useAnalysisMode } from "@/context/useAnalysisHook";
import { ANALYSIS_SUBHEADINGS } from "@/constants/AnalysisSubheadings";
import PopularEditor from "./PopularEditor";
import Comparison from "./Comparison";
const MainAnalysis = () => {
  const { themeStyles } = useCustomTheme();
  const { analysis } = useAnalysisMode();
  return (
    <div
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
      }}
    >
      {analysis === ANALYSIS_SUBHEADINGS.ANALYSIS_OPTION_1 ? (
        <PopularEditor />
      ) : (
        <Comparison />
      )}
    </div>
  );
};

export default MainAnalysis;
