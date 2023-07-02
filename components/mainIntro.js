"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";
import Overview from "./Overview";
import { INTRO_SUBHEADINGS } from "@/constants/IntroSubheadings";
import { useIntroMode } from "@/context/useIntroHook";
import Requirements from "./Requirements";

const MainIntro = () => {
  const { themeStyles } = useCustomTheme();
  const { intro } = useIntroMode();
  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: themeStyles.col02.backgroundColor,
      }}
    >
      {intro === INTRO_SUBHEADINGS.INTRO_OPTION_1 ? (
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
            Overview
          </div>
          <Overview />
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
            Requirements
          </div>
          <Requirements />
        </>
      )}
    </div>
  );
};
export default MainIntro;
