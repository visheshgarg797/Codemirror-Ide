import { EDITOR_MODES } from "@/constants/EditorModes";

const COMPONENT_CONSTANTS = {
  EDITOR_MODE_OPTIONS: [
    {
      label: "Fixed height editor",
      value: EDITOR_MODES.MULTILINE_EDITOR_MODE,
    },
    {
      label: "Text input editor",
      value: EDITOR_MODES.SINGLELINE_EDITOR_MODE,
    },
    {
      label: "Dynamic height editor",
      value: EDITOR_MODES.RESIZABLE_EDITOR_MODE,
    },
    {
      label: "Multitheme editor",
      value: EDITOR_MODES.MULTITHEME_EDITOR_MODE,
    },
  ],
  INTRODUCTION_SUBHEADINGS_OPTIONS: [
    {
      label: "Overview",
      value: "Overview",
    },
    {
      label: "Requirements",
      value: "Requirements",
    },
  ],
  ANALYSIS_SUBHEADINGS_OPTIONS: [
    {
      label: "Popular Editors",
      value: "Popular Editors",
    },
    {
      label: "Comparison",
      value: "Comparison",
    },
  ],
  COMPARISION_TABLE_CONTENT: [
    {
      feature: "Multi line editor",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Single line editor",
      codemirror: "YES",
      ace: "NO",
      monaco: "YES",
    },
    {
      feature: "Keyword highlighting",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Bracket Matching",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Comments",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Error highlighting and syntax error visualization",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Auto completion support",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Callback support",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Editor resizing",
      codemirror: "YES",
      ace: "NO",
      monaco: "NO",
    },
    {
      feature: "Copy, paste support",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Substring selection support",
      codemirror: "YES",
      ace: "NO",
      monaco: "YES",
    },
    {
      feature: "Read only editor",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Multiple theme support",
      codemirror: "YES",
      ace: "YES",
      monaco: "NO",
    },
    {
      feature: "RTL support",
      codemirror: "YES",
      ace: "NO",
      monaco: "NO",
    },
    {
      feature: "Custom language support",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Drag and drop support",
      codemirror: "YES",
      ace: "NO",
      monaco: "NO",
    },
  ],
};

export default COMPONENT_CONSTANTS;
