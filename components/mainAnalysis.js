"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";
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
        marginTop: "10px",
        backgroundColor: themeStyles.col02.backgroundColor,
      }}
    >
      {analysis === ANALYSIS_SUBHEADINGS.ANALYSIS_OPTION_1 ? (
        <>
          <div
            style={{
              color: themeStyles.col02.color,
              marginTop: "-3rem",
              marginBottom: "2rem",
              fontFamily: "Optimistic Text",
              fontSize: "2rem",
              fontStyle: "normal",
            }}
          >
            Poular Editors
          </div>
          <PopularEditor />
        </>
      ) : (
        <>
          <div
            style={{
              color: themeStyles.col02.color,
              marginTop: "-3rem",
              marginBottom: "2rem",
              fontFamily: "Optimistic Text",
              fontSize: "2rem",
              fontStyle: "normal",
            }}
          >
            Comparison
          </div>
          <Comparison />
        </>
      )}
    </div>
  );
};

export default MainAnalysis;
