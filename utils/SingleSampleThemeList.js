import { EditorView } from "@codemirror/view";
const SampleThemeListForSingleLineEditor = [
  EditorView.theme(
    {
      "&": {
        color: "black",
        backgroundColor: "white",
        borderRadius: "0.7rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        overflow: "hidden",
        height: "60px",
      },
      ".cm-content": {
        caretColor: "#0e9",
        paddingTop: "10px",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-lineNumbers": {
        width: "0px",
      },
      ".cm-gutters": {
        backgroundColor: "white",
        width: "0",
        zIndex: "-1 !important",
      },
      ".cm-foldGutter": {
        width: "0",
      },
      ".cm-line": {
        marginTop: "4px",
        height: "35px",
        fontSize: "18px",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "white",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "black",
        paddingLeft: "100px",
        wordWrap: "break-word",
        backgroundColor: "white",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
    },
    { dark: false }
  ),

  EditorView.theme(
    {
      "&": {
        color: "white",
        backgroundColor: "#16181d",
        borderRadius: "0.7rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        overflow: "hidden",
        height: "60px",
      },
      ".cm-content": {
        caretColor: "#0e9",
        paddingTop: "10px",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-lineNumbers": {
        width: "0px",
      },
      ".cm-gutters": {
        backgroundColor: "#16181d",
        width: 0,
        zIndex: "-1 !important",
      },
      ".cm-foldGutter": {
        width: "0",
      },
      ".cm-line": {
        marginTop: "4px",
        height: "35px",
        fontSize: "18px",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#16181d",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "white",
        paddingLeft: "100px",
        wordWrap: "break-word",
        backgroundColor: "black",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
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
        borderRadius: "0.7rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        overflow: "hidden",
        height: "60px",
      },
      ".cm-content": {
        caretColor: "#0e9",
        paddingTop: "10px",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-lineNumbers": {
        width: "0px",
      },
      ".cm-gutters": {
        backgroundColor: "white",
        width: 0,
        zIndex: "-1 !important",
      },
      ".cm-foldGutter": {
        width: "0",
      },
      ".cm-line": {
        marginTop: "4px",
        height: "35px",
        fontSize: "18px",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "black",
        paddingLeft: "100px",
        wordWrap: "break-word",
        backgroundColor: "white",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "white",
      },
      ".cm-tooltip-autocomplete > ul > li [aria-selected]": {
        width: "55rem !important ",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
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
        borderRadius: "0.7rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        overflow: "hidden",
        height: "60px",
      },
      ".cm-content": {
        caretColor: "#0e9",
        paddingTop: "10px",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-lineNumbers": {
        width: "0px",
      },
      ".cm-gutters": {
        backgroundColor: "#16181d",
        width: 0,
        zIndex: "-1 !important",
      },
      ".cm-foldGutter": {
        width: "0",
      },
      ".cm-line": {
        marginTop: "4px",
        height: "35px",
        fontSize: "18px",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#16181d",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "white",
        paddingLeft: "100px",
        wordWrap: "break-word",
        backgroundColor: "black",
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

export { SampleThemeListForSingleLineEditor };
