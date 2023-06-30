import { EDITOR_MODES } from "@/constants/EditorModes";

const COMPONENT_CONSTANTS = {
  POPUP_OPTION_LIST: [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ],
  EDITOR_MODE_OPTIONS: [
    {
      label: "Multiline Editor",
      value: EDITOR_MODES.MULTILINE_EDITOR_MODE,
    },
    {
      label: "Singleline Editor",
      value: EDITOR_MODES.SINGLELINE_EDITOR_MODE,
    },
    {
      label: "Resizable Editor",
      value: EDITOR_MODES.RESIZABLE_EDITOR_MODE,
    },
    {
      label: "Multitheme Editor",
      value: EDITOR_MODES.MULTITHEME_EDITOR_MODE,
    },
  ],
};

export default COMPONENT_CONSTANTS;
