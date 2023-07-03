"use client";
import React from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import { useCustomTheme } from "../context/useThemeHook";
import { BsArrowLeftRight } from "react-icons/bs";

const DirectionChangeButton = () => {
  const { direction, toggleDirection } = useCustomDirection();
  const { themeStyles } = useCustomTheme();

  let name = "";
  if (direction == "ltr") {
    name = "RTL";
  } else {
    name = "LTR";
  }
  return (
    <button
      onClick={toggleDirection}
      className={themeStyles.classButton}
      style={{
        cursor: "pointer",
        color: themeStyles.col02.color,
        fontFamily: themeStyles.font,
        marginInlineStart: "20px",
        borderRadius: "50%",
        marginTop: "8px",
        marginInlineEnd: "  12px",
      }}
    >
      <BsArrowLeftRight size={15} />
    </button>
  );
};

export default DirectionChangeButton;
