import { EditorView } from "@codemirror/view";
const multiThemeSampleThemeList = [
  // light 1
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "black",
        backgroundColor: "white",
        borderRadius: "1.5rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "350px",
      },
      ".cm-content": {
        minHeight: "200px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "200px",
        border: "none",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
      },
    },
    { dark: false }
  ),
  // dark 1
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#16181d",
        borderRadius: "1.5rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "350px",
      },
      ".cm-content": {
        minHeight: "200px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "200px",
        border: "none",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
    },
    { dark: true }
  ),
  // light 2
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "black",
        backgroundColor: "#A9A9A9",
        borderRadius: "1.5rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "350px",
      },
      ".cm-content": {
        minHeight: "200px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "200px",
        border: "none",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
    },
    { dark: false }
  ),
  // dark 2
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#696969",
        borderRadius: "1.5rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "350px",
      },
      ".cm-content": {
        minHeight: "200px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "200px",
        border: "none",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
    },
    { dark: true }
  ),
  //light 1 rtl
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "black",
        backgroundColor: "white",
        borderRadius: "1.5rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "350px",
      },
      ".cm-content": {
        minHeight: "200px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "200px",

        border: "none",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
    },
    { dark: false }
  ),
  //dark 1 rtl
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#16181d",
        borderRadius: "1.5rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "350px",
      },
      ".cm-content": {
        minHeight: "200px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "200px",

        border: "none",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
    },
    { dark: true }
  ),
  //light 2 rtl
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "black",
        backgroundColor: "#A9A9A9",
        borderRadius: "1.5rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "350px",
      },
      ".cm-content": {
        minHeight: "200px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "200px",
        border: "none",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
    },
    { dark: false }
  ),
  // dark 2 rtl
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#696969",
        borderRadius: "1.5rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "350px",
      },
      ".cm-content": {
        minHeight: "200px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "200px",
        border: "none",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
      },

      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
    },
    { dark: true }
  ),
];
export { multiThemeSampleThemeList };
