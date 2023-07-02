"use client";
import { useContext } from "react";
import { AnalysisContext } from "./ananlysisSubheading";

export function useAnalysisMode() {
  const analysisContext = useContext(AnalysisContext);

  const { analysis, toggleAnalysis } = analysisContext;

  return {
    analysis,
    toggleAnalysis,
  };
}
