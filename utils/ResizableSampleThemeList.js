import { EditorView } from "@codemirror/view";
const ResizableSampleThemeList = [
  EditorView.theme(
    {
      "&": {
        minHeight: "24px",
        maxHeight: "355px",
        color: "black",
        backgroundColor: "white",
        borderRadius: "1.5rem",
        boxShadow: "0 1rem 2rem 0px rgba(0, 0, 0, 0.5)",
      },
      ".cm-scroller": {
        overflow: "auto",
        minHeight: "24px",
        minWidth: "72px",
      },
      ".cm-content": {
        minHeight: "24px",
        minWidth: "72px",
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
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        borderRadius: "1.5rem",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "purple",
        paddingLeft: "100px",
        borderRadius: "2rem",
        wordWrap: "break-word",
      },
      ".cm-completionIcon-Fruit": {
        src: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
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
        borderRadius: "1.5rem",
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
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        borderRadius: "1.5rem",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "purple",
        paddingLeft: "100px",
        borderRadius: "2rem",
        wordWrap: "break-word",
      },
      ".cm-completionIcon-Fruit": {
        src: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
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
        borderRadius: "1.5rem",
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
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        borderRadius: "1.5rem",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "purple",
        paddingLeft: "100px",
        borderRadius: "2rem",
        wordWrap: "break-word",
      },
      ".cm-completionIcon-Fruit": {
        src: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
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
        borderRadius: "1.5rem",
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
      ".cm-tooltip-autocomplete": {
        minWidth: "180px",
        maxHeight: "40vh !important",
        padding: "6px 0 !important",
        fontFamily: "DejaVuSansMono, Menlo-Regular, Inconsolata !important",
        borderRadius: "1.5rem",
      },
      ".cm-tooltip-autocomplete > ul": {
        color: "purple",
        paddingLeft: "100px",
        borderRadius: "2rem",
        wordWrap: "break-word",
      },
      ".cm-completionIcon-Fruit": {
        src: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
      },
    },
    { dark: true }
  ),
];
export { ResizableSampleThemeList };