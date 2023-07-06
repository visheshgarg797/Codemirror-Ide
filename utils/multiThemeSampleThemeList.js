import { EditorView } from "@codemirror/view";
const multiThemeSampleThemeList = [
  // light 1
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "black",
        backgroundColor: "white",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
      ".cm-activeLineGutter": {
        backgroundColor: "white",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
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
    { dark: true }
  ),
  // dark 1
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#24292e",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
        backgroundColor: "#24292e",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#24292e",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
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
  // light 2
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "black",
        backgroundColor: "#f8f5d7",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
        backgroundColor: "#f8f5d7",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#f8f5d7",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
      },
      ".cm-diagnostic": {
        fontSize: "12px",
        backgroundColor: "white",
        color: "purple",
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
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        backgroundColor: "#f7f7e6",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "black",
        paddingLeft: "100px",
        wordWrap: "break-word",
      },
    },
    { dark: true }
  ),
  // dark 2
  EditorView.theme(
    {
      "&": {
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#1e2021",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
        backgroundColor: "#1e2021",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#1e2021",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
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
  //light 1 rtl
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "black",
        backgroundColor: "white",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
        backgroundColor: "white",
        border: "none",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "white",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
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
    { dark: true }
  ),
  //dark 1 rtl
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#24292e",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
        backgroundColor: "#24292e",
        border: "none",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#24292e",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
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
  //light 2 rtl
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "black",
        backgroundColor: "#f8f5d7",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
        backgroundColor: "#f8f5d7",
        border: "none",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#f8f5d7",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
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
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        backgroundColor: "#f7f7e6",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "black",
        paddingLeft: "100px",
        wordWrap: "break-word",
      },
    },
    { dark: true }
  ),
  // dark 2 rtl
  EditorView.theme(
    {
      "&": {
        direction: "rtl",
        maxHeight: "355px",
        color: "white",
        backgroundColor: "#1e2021",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
        backgroundColor: "#1e2021",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "#1e2021",
      },
      ".cm-activeLine .cm-line": {
        display: "none",
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
export { multiThemeSampleThemeList };
