"use client";
import { createContext, useState } from "react";
import { INTRO_SUBHEADINGS } from "@/constants/IntroSubheadings";

// Create the diretion context

export const IntroContext = createContext();

const initIntro = () => {
  const storedIntro = localStorage.getItem("intro");

  if (storedIntro) {
    return storedIntro;
  } else {
    localStorage.setItem("intro", INTRO_SUBHEADINGS.INTRO_OPTION_1);
    return INTRO_SUBHEADINGS.INTRO_OPTION_1;
  }
};

export function IntroProvider({ children }) {
  const [intro, setintro] = useState(initIntro);

  const toggleIntro = (props) => {
    const updatedIntro = props;
    setintro(updatedIntro);

    localStorage.setItem("intro", updatedIntro);
  };

  const introContextValue = {
    toggleIntro,
    intro,
  };

  return (
    <IntroContext.Provider value={introContextValue}>
      {children}
    </IntroContext.Provider>
  );
}
