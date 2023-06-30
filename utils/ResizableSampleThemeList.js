import { EditorView } from "@codemirror/view";
const ResizableSampleThemeList = [
  EditorView.theme(
    {
      "&": {
        minHeight: "24px",
        maxHeight: "355px",
        color: "black",
        backgroundColor: "white",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "24px",
        minWidth: "90px",
      },
      ".cm-content": {
        minHeight: "24px",
        minWidth: "90px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "24px",
        border: "none",
      },
      ".cm-line": {
        padding: "2px 2px 2px 4px",
        minHeight: "24px",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "white",
      },
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        backgroundColor: "white",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "black",
        paddingLeft: "100px",
        wordWrap: "break-word",
      },
    },
    { dark: false }
  ),
  EditorView.theme(
    {
      "&": {
        minHeight: "24px",
        maxHeight: "355px",
        minWidth: "20px",
        color: "white",
        backgroundColor: "#16181d",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "24px",
      },
      ".cm-content": {
        minHeight: "24px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "24px",
        border: "none",
      },
      ".cm-line": {
        padding: "2px 2px 2px 4px",
        minHeight: "24px",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#16181d",
      },
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        backgroundColor: "#0a0a0a",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "white",
        paddingLeft: "100px",
        wordWrap: "break-word",
      },
    },
    { dark: true }
  ),
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        minHeight: "24px",
        maxHeight: "355px",
        color: "black",
        backgroundColor: "white",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "24px",
      },
      ".cm-content": {
        minHeight: "24px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "24px",
        border: "none",
      },
      ".cm-line": {
        padding: "2px 2px 2px 4px",
        minHeight: "24px",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "white",
      },
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        backgroundColor: "white",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "black",
        paddingLeft: "100px",
        wordWrap: "break-word",
      },
    },
    { dark: false }
  ),
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        minHeight: "24px",
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#16181d",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "24px",
      },
      ".cm-content": {
        minHeight: "24px",
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        minHeight: "24px",
        border: "none",
      },
      ".cm-line": {
        padding: "2px 2px 2px 4px",
        minHeight: "24px",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#16181d",
      },
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        backgroundColor: "#0a0a0a",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "white",
        paddingLeft: "100px",
        wordWrap: "break-word",
      },
    },
    { dark: true }
  ),
];
export { ResizableSampleThemeList };
