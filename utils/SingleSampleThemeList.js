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
        height: "60px",
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
      ".cm-lineNumbers": {
        width: "0px",
      },
      ".cm-gutters": {
        backgroundColor: "white",
      },
      ".cm-line": {
        height: "30px",
        fontSize: "20px",
      },
      // ".cm-tooltip": {
      //   position: "absolute",
      //   marginTop: "1.2rem",
      //   border: "1px solid #181a1f",
      //   width: "61.2%",
      //   marginLeft: "-1.1rem",
      // backgroundColor: "#1d1e22",
    },
    // ".cm-tooltip-autocomplete": {
    //   width: "700px",
    // },

    // ".cm-completionLabel": {
    //   color: "blue",
    //   padding: "50px",
    //   height: "100px",
    // },
    // ".cm-completionInfo": {
    //   marginTop: "60px",
    // },
    // ".cm-tooltip-autocomplete": {
    //   minWidth: "400px",
    //   maxHeight: "40vh !important",
    //   padding: "6px 0 !important",
    //   fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
    //   borderRadius: "1.5rem",
    // },
    // ".cm-tooltip-autocomplete > ul": {
    //   color: "purple",
    //   paddingLeft: "100px",
    //   borderRadius: "2rem",
    //   wordWrap: "break-word",
    // },
    // ".cm-completionInfo": {
    //   width: "1000px",
    // },

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
      ".cm-lineNumbers": {
        width: "0px",
      },
      ".cm-gutters": {
        backgroundColor: "#16181d",
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
      ".cm-lineNumbers": {
        width: "0px",
      },
      ".cm-gutters": {
        backgroundColor: "white",
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
      ".cm-lineNumbers": {
        width: "0px",
      },
      ".cm-gutters": {
        backgroundColor: "#16181d",
      },
    },
    { dark: true }
  ),
];

export { SampleThemeListForSingleLineEditor };
