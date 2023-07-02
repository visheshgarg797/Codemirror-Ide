import { EDITOR_MODES } from "@/constants/EditorModes";

const COMPONENT_CONSTANTS = {
  POPUP_OPTION_LIST: [
    "1. Amsterdam canal",
    "2. Anne Frank House",
    "3. Van Gogh Museum",
    "4. Red Light District",
    "5. Heineken Experience",
    "6. Rijksmuseum",
    "7. Vondelpark",
    "8. Jordaan",
    "9. Bloemenmarkt",
    "10. Albert Cuyp Market",
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
