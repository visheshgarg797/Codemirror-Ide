"use client";
import { useContext } from "react";
import { DirectionContext } from "./directionProvider";

export function useCustomDirection() {
  const directionContext = useContext(DirectionContext);

  const { direction, toggleDirection } = directionContext;

  return {
    toggleDirection,
    direction,
  };
}
