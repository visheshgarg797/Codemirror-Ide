"use client";
import React, { useState, useContext } from "react";
import DirectionModeContext from "../../../context/DirectionModeContext";
import ThemeModeContext from "../../../context/ThemeModeContext";

const DirectionChangeButton = () => {
  const Direction = useContext(DirectionModeContext);
  const Theme = useContext(ThemeModeContext);
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
        id="theme-toggle"
        type="button"
        className={`mb-2 flex items-center justify-center px-4 py-2 rounded-md shadow ${
          Theme.ThemeMode.DarkMode
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-white text-gray-900 border-gray-300"
        }`}
        onClick={handleChangeDirecion}
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {currentDirection}
      </button>
    </>
  );
};

export default DirectionChangeButton;
