"use client";

import { useRouter } from "next/navigation";
import { useCustomTheme } from "@/context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { usePathname } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import { useAnalysisMode } from "@/context/useAnalysisHook";
import { ANALYSIS_SUBHEADINGS } from "@/constants/AnalysisSubheadings";
import COMPONENT_CONSTANTS from "../ComponentConstants";
import { Theme_Name } from "@/constants/ThemeName";
import styles from "../style.css";

const AnalysisLeftNavButton = (props) => {
  const { themeStyles } = useCustomTheme();
  const { push } = useRouter();
  const pathname = usePathname();
  const { analysis, toggleAnalysis } = useAnalysisMode();
  const { direction } = useCustomDirection();

  const path = useMemo(() => props.path, []);
  const [isOpen, setIsOpen] = useState(pathname === "/analysis");

  const handleCallBack = useCallback(() => {
    if (path !== "analysis") {
      push(path);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
    handleCallBack();
  };

  const handleOptionClick = (option) => {
    toggleAnalysis(option.value);
  };

  return (
    <div className="space-y-4 sm:w-12 md:w-32 lg:w-64">
      <div className="">
        <div
          className={themeStyles.classLnb2}
          onClick={() => handleClick()}
          style={{
            fontFamily: themeStyles.font,
            fontWeight: "600",
            color:
              props.path == pathname
                ? themeStyles.col03.color
                : themeStyles.col01.color,
            borderStartEndRadius: "50px",
            borderEndEndRadius: "50px",
          }}
        >
          <span>{props.index}</span>
          <svg
            className={`w-4 h-4 transition-transform transform ${
              isOpen ? "rotate-90" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} `}>
          {COMPONENT_CONSTANTS.ANALYSIS_SUBHEADINGS_OPTIONS.map((item) => (
            <div
              key={item.value}
              className={themeStyles.classLnb}
              style={{
                fontWeight: "400",
                fontSize: "0.85rem",
                paddingLeft: "2rem",
                color:
                  analysis === item.value && props.path == pathname
                    ? themeStyles.col03.color
                    : themeStyles.col01.color,
                borderStartEndRadius: "50px",
                borderEndEndRadius: "50px",
              }}
              onClick={() => handleOptionClick(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisLeftNavButton;
