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
      feature: "Fixed height editor",
      content: "Can render an editor with a fixed height and width",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Text input editor",
      content: "Renders a text input like editor",
      codemirror: "YES",
      ace: "NO",
      monaco: "YES",
    },
    {
      feature: "Keyword highlighting and Bracket Matching",
      content: "Highlights keywords accroding to grammar and matches brackets",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Comments",
      content: "Supports comments in the code",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Error highlighting and syntax error visualization",
      content:
        "Highlights errors and visualizes syntax errors according to grammar",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Dynamic height editors",
      content: "Allows editors with that can take height dynamically",
      codemirror: "YES",
      ace: "NO",
      monaco: "NO",
    },
    {
      feature: "Copy, paste callback support",
      content: "Provides copy and paste callback support",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Text selection support with callback",
      content: "Supports text selection with callback",
      codemirror: "YES",
      ace: "NO",
      monaco: "YES",
    },
    {
      feature: "Read only editor",
      content: "Provides a read-only editor",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Multiple theme support",
      content: "Supports multiple themes on different editors on the same page",
      codemirror: "YES",
      ace: "YES",
      monaco: "NO",
    },
    {
      feature: "RTL support",
      content:
        "Provides right-to-left language support with editors for languages like Arabic, Hebrew",
      codemirror: "YES",
      ace: "NO",
      monaco: "NO",
    },
    {
      feature: "Custom grammer and autocompletion support",
      content:
        "Allows custom grammer integration and custom autocomplete keyword filter.",
      codemirror: "YES",
      ace: "YES",
      monaco: "YES",
    },
    {
      feature: "Drag and drop support",
      content: "Allows dragging and dropping files within editor to add text",
      codemirror: "YES",
      ace: "NO",
      monaco: "NO",
    },
  ],

  THEME_NAMES: [
    "Github Light Theme",
    "Github Dark Theme",
    "Gruvbox Light Hard",
    "Gruvbox Dark Hard",
  ],
  MULTILINE_RIGHT_CONTENT: [
    {
      heading: "Fixed height and width",
      body: "The editor has a fixed height and width, providing a consistent and visually appealing layout.",
    },
    {
      heading: "Vertical scroll",
      body: "When the code in the editor exceeds its height limit, a vertical scroll bar automatically appears. This allows users to scroll through the code vertically, ensuring all content remains accessible.",
    },
    {
      heading: "Horizontal wrap",
      body: "The editor intelligently wraps code to the next line when it reaches the end of the current line horizontally. This prevents the need for horizontal scrolling and improves code readability.",
    },
    {
      heading: "Completion box",
      body: "A helpful completion box appears near the cursor, presenting valid and relevant recommendations as the user types. This feature assists in speeding up coding by suggesting possible code completions and reducing errors.",
    },
    {
      heading: "AI powered selection box",
      body: "When some text is selected, a popup box appears near the selection. It shows AI generated reccomended phrases and words related to the selected text. User can selected desired phrased and add it to their query to imporve search results. Even if the entire text is not selected, the feature automatically selects the text enclosed in quotations. The selection box specifically focuses on keywords and phrases enclosed in quotations.",
    },
    {
      heading: "User friendly error handling",
      body: "Errors are bound to occour while coding. Unlike the original Sprinklr editor, instead of complex error messages, errors are clearly classified into different categories and displayed in a way that is easily understandable even for non-coding individuals.",
    },
    {
      heading: "Drag and drop support",
      body: "A new feature addition to the editor is the support for drag and drop functionality. User can drag a file containing some code, drop it onto the editor, it will be appended into the editor. This grealty enhances user experience and speeds up the coding process",
    },
    {
      heading: "Comments",
      body: "User can comment out some piece of code by putting '//' before the text. All the text in that line after that will be ignored by the editor. Comments help improve code readablilty and make the code more maintainable.",
    },
  ],
  SINGLELINE_RIGHT_CONTENT: [
    {
      heading: "Fixed height of single line",
      body: "Height of the editor is fixed at a single line. Even if user tries to move to next line, it is prohibited",
    },
    {
      heading: "Acts as a input box",
      body: "The editor provides a familiar input box experience but at the same time contains all the features of like autocomplete support, syntax highlighting, error handling, AI powered selection support etc.",
    },
    {
      heading: "Recommendations like a dropdown",
      body: "This solve the problem that is quite difficult to overcome with the existing Sprinklr Monaco edtitor of having customized suggestion box. We have customized the suggestion box such that it appears, not besides the cursor but at the bottom of the editor as a dropdown. With each suggestion, the suggestion box remains in place, providing a seamless and aesthetically pleasing user experience.",
    },
    {
      heading: "Pasting multiple lines",
      body: "This features allows the user to copy and paste multiples lines of query into the editor. The editor still retains its single line functinality and muliple lines are parsed and converted to a single line query, seamlessly incorporating them into the editor.",
    },
    {
      heading: "Other features",
      body: "In addition to the aforementioned functionalities, the editor incorporates generic features such as syntax highlighting, error handling, and AI-powered selection assistance, alongside its single-line specific capabilities.",
    },
  ],
  MULTITHEME_RIGHT_CONTENT: [
    {
      heading: "Support for multiple themes",
      body: "The exising Sprinklr Monaco based editor does not allow maintaining more than one editor on the same screen with different themes. This problem has been resolved in this new editor which allows the user to toggle between diffrent themes on both the editors with each inidividual editor maintaining its own theme.  Each editor maintains its own theme, providing users with a diverse experience and more options while interacting with our application.",
    },
    {
      heading: "Options currently provided",
      body: "In this current version, we have provided the user the option of two popular themes to choose from i.e. Github theme and Gruvbox theme. On toggling between the global themes using the theme change button present in the navbar, user gets access to the Light and Dark themes of Github and Gruvbox themes.",
    },
    {
      heading: "Interacting with global theme",
      body: "When the global theme is changed from Light theme to Dark theme, the individual multitheme editors also update their respective themes. For example, if an editor initially had the Github Light Theme and we switch to Dark mode, that editor will now have the Github Dark theme. The same behavior applies to the Gruvbox theme.",
    },
    {
      heading: "Maintaining seperate states",
      body: "We maintain seperates states for all inidviudal editors. So even if we have multiple editors on screen simultaneously, no ambigous behaviour is observed with any functionality.",
    },
    {
      heading: "Other features",
      body: "In addition to the aforementioned functionalities, the editor incorporates generic features such as syntax highlighting, error handling, and AI-powered selection assistance, alongside its multi-theme specific capabilities.",
    },
  ],
  RESIZEABLE_RIGHT_CONTENT: [
    {
      heading: "Editor resizing",
      body: "The existing Sprinklr Monaco editor lacks the functionality of providing dynamic sizing options to the user. However, this limitation has been resolved in the new Codemirror based editor. The new editor offers users various options for maximum editor heights, giving them more control over the visual layout and optimizing their coding experience.",
    },
    {
      heading: "Dynamic editor height",
      body: "In the new editor, the initial height is set to that of a single line. However, as the user enters more code into the editor, the height dynamically adjusts to accommodate the additional lines. This dynamic resizing ensures that users have sufficient space to view and edit their code comfortably, regardless of the amount of code being entered.",
    },
    {
      heading: "Horizontal wrap and vertical scroll",
      body: "The editor intelligently wraps code to the next line when it reaches the end of the current line horizontally. Once the selected maximum lines are reached, a vertical scroll bar appears which allows users to scroll through the code vertically, ensuring all content remains accessible.",
    },
    {
      heading: "Other features",
      body: "In addition to the dynamic sizing capabilities mentioned above, the editor incorporates various generic features to enhance the coding experience. This includes syntax highlighting,  error handling for better code debugging, and AI-powered selection assistance that provides recommended phrases and words related to the selected text.",
    },
  ],
  ISSUES_FACED: [
    {
      heading: "Maintaining multiple themes",
      body: "One of the major challenges we encountered with the Sprinklr Monaco editor was maintaining multiple editors with different themes on the same page. To overcome this, we implemented a solution by maintaining separate states for each individual editor. Whenever the theme was changed, we re-rendered the editor, ensuring that the states of multiple editors didn't conflict and cause ambiguous behavior.",
    },
    {
      heading: "Inserting text in editor",
      body: "We needed to insert text into the editor in scenarios involving pasting text or inserting phrases using the selection popup. The challenge we faced here was managing the anchor and head positions from where the desired text should be dispatched to the editor",
    },
    {
      heading: "Grammer integration and error handling",
      body: "One of the major challenges we encountered was the lack of comprehensive resources for integrating custom grammar with the CodeMirror module. To overcome this, we built extensions specifically designed to handle grammar integration, which were further utilized for error handling and syntax highlighting.",
    },
    {
      heading: "Triggering suggestions",
      body: "We implemented the algorithm to determine which suggestions to render based on previous words to identify valid phrases. However, we faced challenges in determining the conditions to trigger the suggestion box. The method used in the Sprinklr Monaco editor, which relied on spaces or specific triggering characters, was not supported in CodeMirror. As an alternative, we leveraged other methods such as monitoring changes in the editor's view state to trigger our custom suggestions. This approach also ensured that suggestions were displayed even when no characters were typed into the editor",
    },
  ],
};

export default COMPONENT_CONSTANTS;
