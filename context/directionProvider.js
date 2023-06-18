"use client";
import { createContext, useState } from "react";
import constants from "@/utils/constants";

// Create the diretion context

export const DirectionContext = createContext();

const initDirection = () => {
  const storedDirection = localStorage.getItem("direction");

  if (storedDirection) {
    return storedDirection;
  } else {
    // If no stored direction, set the initial direction
    localStorage.setItem("direction", constants.LEFT_TO_RIGHT);
    return constants.LEFT_TO_RIGHT;
  }
};

// Create the direction provider component
export function DirectionProvider({ children }) {
  const [direction, setDirection] = useState(initDirection);

  // Toggle between ltr and rtl
  const toggleDirection = () => {
    const updatedDirection =
      direction === constants.LEFT_TO_RIGHT
        ? constants.RIGHT_TO_LEFT
        : constants.LEFT_TO_RIGHT;
    setDirection(updatedDirection);

    // Store the direction in cookies or local storage
    localStorage.setItem("direction", updatedDirection);
  };

  const directionContextValue = {
    toggleDirection,
    direction,
  };

  return (
    <DirectionContext.Provider value={directionContextValue}>
      {children}
    </DirectionContext.Provider>
  );
}
