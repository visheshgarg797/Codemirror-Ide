// Theme colors for dark and light mode , there are three type of combination colorset for element namely col01 , col02 , col03
import "../app/globals.css";

const GlobalThemeStyles = [
  {
    theme: "dark",
    col01: {
      backgroundColor: "#333a45",
      color: "#f6f7f9",
    },
    col02: {
      backgroundColor: "#23272f",
      color: "#f6f7f9",
    },
    col03: {
      backgroundColor: "#2a3541",
      color: "#129eca",
    },
    col04: {
      backgroundColor: "#3a84c9",
      color: "white",
      hoverButtonColor: "#2270f5",
      buttonColor: "#2485ed",
    },
    font: "Montserrat",
    classLnb: "px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-500",
    classLnb2:
      "flex items-center justify-between px-4 py-2 cursor-pointer select-none text-black pl-5 hover:bg-gray-500 ",
    classRnb:
      "flex items-center justify-between px-4 py-2 cursor-pointer select-none text-black pl-5  ",
    syntaxANDColor: "#DCDCAA",
    syntaxORColor: "#4EC9B0",
    syntaxNOTColor: "#e36d83",
    syntaxPhraseColor: "#CE9178",
    syntaxColonColor: "#19B5FE",
    syntaxNumberColor: "#BF40BF",
    syntaxParenColor: "#19B5FE",
    syntaxCommentColor: "#b9b1ba",
  },
  {
    theme: "light",

    col01: {
      backgroundColor: "#ebecef",
      color: "#23272f",
    },
    col02: {
      backgroundColor: "#ffffff",
      color: "#23272f",
    },
    col03: {
      backgroundColor: "#e6f6ff",
      color: "#0c7ea3",
    },
    col04: {
      backgroundColor: "rgb(33, 42, 100)",
      color: "white",
      hoverButtonColor: "#2270f5",
      buttonColor: "#4755a8",
    },
    font: "Montserrat",
    classLnb: "px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-300",
    classLnb2:
      "flex items-center justify-between px-4 py-2 cursor-pointer select-none text-black pl-5 hover:bg-gray-300 ",
    classRnb:
      "flex items-center justify-between px-7 py-2 cursor-pointer select-none text-black pl-5  ",
    syntaxANDColor: "#FFC40C",
    syntaxORColor: "green",
    syntaxNOTColor: "red",
    syntaxPhraseColor: "#A71709",
    syntaxColonColor: "#19B5FE",
    syntaxNumberColor: "#BF40BF",
    syntaxParenColor: "#b436c2",
    syntaxCommentColor: "#6b686b",
  },
];

export default GlobalThemeStyles;
