"use client";
import { createContext, useState } from "react";
import { Direction } from "@/constants/Direction";

// Create the diretion context

export const DirectionContext = createContext();

const initDirection = () => {
  const storedDirection = localStorage.getItem("direction");

  if (storedDirection) {
    return storedDirection;
  } else {
    // If no stored direction, set the initial direction
    localStorage.setItem("direction", Direction.LTR);
    return Direction.LTR;
  }
};

// Create the direction provider component
export function DirectionProvider({ children }) {
  const [direction, setDirection] = useState(initDirection);

  // Toggle between ltr and rtl
  const toggleDirection = () => {
    const updatedDirection =
      direction === Direction.LTR ? Direction.RTL : Direction.LTR;
    setDirection(updatedDirection);

    document.documentElement.dir = updatedDirection;

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
