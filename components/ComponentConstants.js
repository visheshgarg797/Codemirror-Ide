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
};

export default COMPONENT_CONSTANTS;
