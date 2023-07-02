"use client";
import { useContext } from "react";
import { IntroContext } from "./introSubheading";

export function useIntroMode() {
  const introContext = useContext(IntroContext);

  const { intro, toggleIntro } = introContext;

  return {
    intro,
    toggleIntro,
  };
}
