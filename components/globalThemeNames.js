// Theme colors for dark and light mode , there are three type of combination colorset for element namely col01 , col02 , col03

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
    font: "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    classButton: "px-4 py-2 ml-2 rounded-full bg-gray-700 hover:bg-gray-500",
    classLnb:
      "text-xl py-3 px-4 mb-0.5 text-center flex-1 rounded-r-ful bg-gray-700 hover:bg-gray-500 ",
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
    font: "Optimistic Display,-apple-system,ui-sans-serif,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    classButton: "px-4 py-2 ml-2 rounded-full bg-gray-200  hover:bg-gray-300 ",
    classLnb:
      "text-xl py-3 px-4 mb-0.5 text-center flex-1 rounded-r-ful bg-gray-200 hover:bg-gray-300 ",
  },
];

export default GlobalThemeStyles;
