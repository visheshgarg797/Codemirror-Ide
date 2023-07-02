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
        <Overview />
      ) : (
        <Requirements />
      )}
    </div>
  );
};
export default MainIntro;
