import { EditorView } from "@codemirror/view";
const SampleThemeListForSingleLineEditor = [
  EditorView.theme(
    {
      "&": {
        color: "black",
        backgroundColor: "white",
        borderRadius: "1rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        height: "50px",
      },
      ".cm-content": {
        caretColor: "#0e9",
        paddingTop: "16px",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        // backgroundColor: "#353535",
        // color: "#ccc",
        border: "none",
        // padding: "5px",
        // paddingTop: "6px",
      },
    },
    { dark: false }
  ),

  EditorView.theme(
    {
      "&": {
        color: "white",
        backgroundColor: "#16181d",
        borderRadius: "1rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        height: "50px",
      },
      ".cm-content": {
        caretColor: "#0e9",
        paddingTop: "16px",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        // backgroundColor: "#353535",
        // color: "#ccc",
        border: "none",
        // padding: "5px",
        // paddingTop: "6px",
      },
    },
    { dark: true }
  ),
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        color: "black",
        backgroundColor: "white",
        borderRadius: "1rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        height: "50px",
      },
      ".cm-content": {
        caretColor: "#0e9",
        paddingTop: "16px",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        // backgroundColor: "#353535",
        // color: "#ccc",
        border: "none",
        // padding: "5px",
        // paddingTop: "6px",
      },
    },
    { dark: false }
  ),

  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        color: "white",
        backgroundColor: "#16181d",
        borderRadius: "1rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        height: "50px",
      },
      ".cm-content": {
        caretColor: "#0e9",
        paddingTop: "16px",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        // backgroundColor: "#353535",
        // color: "#ccc",
        border: "none",
        // padding: "5px",
        // paddingTop: "6px",
      },
    },
    { dark: true }
  ),
];

export { SampleThemeListForSingleLineEditor };
