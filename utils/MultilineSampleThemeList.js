import { EditorView } from "@codemirror/view";
const MultilineSampleThemeList = [
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "black",
        backgroundColor: "white",
        borderRadius: "2px",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-editor": {
        padding: "10px",
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
        backgroundColor: "white",
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
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
      ".cm-foldGutter": {
        width: "0 !important",
      },
      ".cm-gutters .cm-gutter-lint": {
        width: "1rem !important",
      },
    },
    { dark: false }
  ),
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#16181d",
        borderRadius: "2px",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-editor": {
        padding: "10px",
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
        backgroundColor: "#16181d",
        color: "white",
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
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
      ".cm-foldGutter": {
        width: "0 !important",
      },
      ".cm-gutters .cm-gutter-lint": {
        width: "1rem !important",
      },
    },
    { dark: true }
  ),
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "black",
        backgroundColor: "white",
        borderRadius: "2px",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-editor": {
        padding: "10px",
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
        backgroundColor: "white",
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
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
      ".cm-foldGutter": {
        width: "0 !important",
      },
      ".cm-gutters .cm-gutter-lint": {
        width: "1rem !important",
      },
    },
    { dark: false }
  ),
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#16181d",
        borderRadius: "2px",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-editor": {
        padding: "10px",
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
        backgroundColor: "#16181d",
        color: "white",
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
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
      },
      ".cm-foldGutter": {
        width: "0 !important",
      },
      ".cm-gutters .cm-gutter-lint": {
        width: "1rem !important",
      },
    },
    { dark: true }
  ),
];
export { MultilineSampleThemeList };
