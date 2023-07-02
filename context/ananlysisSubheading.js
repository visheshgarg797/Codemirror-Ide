"use client";
import { createContext, useState } from "react";
import { ANALYSIS_SUBHEADINGS } from "@/constants/AnalysisSubheadings";

export const AnalysisContext = createContext();

const initAnalysis = () => {
  const storedAnalysis = localStorage.getItem("analysis");

  if (storedAnalysis) {
    return storedAnalysis;
  } else {
    localStorage.setItem("analysis", ANALYSIS_SUBHEADINGS.ANALYSIS_OPTION_1);
    return ANALYSIS_SUBHEADINGS.ANALYSIS_OPTION_1;
  }
};

export function AnalysisProvider({ children }) {
  const [analysis, setanalysis] = useState(initAnalysis);

  const toggleAnalysis = (props) => {
    const updatedAnalysis = props;
    setanalysis(updatedAnalysis);

    localStorage.setItem("analysis", updatedAnalysis);
  };

  const analysisContextValue = {
    toggleAnalysis,
    analysis,
  };

  return (
    <AnalysisContext.Provider value={analysisContextValue}>
      {children}
    </AnalysisContext.Provider>
  );
}
