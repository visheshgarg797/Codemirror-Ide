"use client";
import React, { useState } from "react";
import DirectionModeContext from "./DirectionModeContext";

const DirectionModeState = (props) => {
  const State = {
    LeftToRight: true,
    RightToLeft: false,
  };

  const [directionMode, setDirectionMode] = useState(State);

  const updateDirectionrMode = () => {
    setDirectionMode({
      LeftToRight: !directionMode.LeftToRight,
      RightToLeft: !directionMode.RightToLeft,
    });
  };

  return (
    <DirectionModeContext.Provider
      value={{ directionMode, updateDirectionrMode }}
    >
      {props.children}
    </DirectionModeContext.Provider>
  );
};

export default DirectionModeState;
