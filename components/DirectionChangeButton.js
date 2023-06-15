"use client";
import React, { useState, useContext } from "react";
import DirectionModeContext from "@/context/DirectionModeContext";
import { useCustomTheme } from "./useThemeHook";

const DirectionChangeButton = () => {
  const Direction = useContext(DirectionModeContext);
  const { themeStyles } = useCustomTheme();
  const [currentDirection, setCurrentDiretion] = useState(
    Direction.directionMode.LeftToRight ? "RightToLeft" : "LeftToRight"
  );
  const handleChangeDirecion = (e) => {
    setCurrentDiretion(
      currentDirection === "LeftToRight" ? "RightToLeft" : "LeftToRight"
    );
    Direction.updateDirectionrMode();
  };

  return (
    <>
      <button
        onClick={handleChangeDirecion}
        className={themeStyles.classButton}
        style={{
          cursor: "pointer",
          color: themeStyles.col02.color,
          fontFamily: themeStyles.font,
        }}
      >
        {currentDirection}
      </button>
    </>
  );
};

export default DirectionChangeButton;
