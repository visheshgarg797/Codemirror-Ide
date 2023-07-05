"use client";
import { useCustomTheme } from "../../context/useThemeHook";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import MultiLineEditor from "../Editors/MultilineEditor";
import SingleLineEditor from "../Editors/SinglelineEditor";
import ResizaleEditor from "../Editors/ResizableEditor";
import MultiThemeEditor from "../Editors/MutliThemeEditor";
import { EDITOR_MODES } from "@/constants/EditorModes";
import RightBar from "./RightFeatures";
const IDE = () => {
  const { editorMode } = useCustomEditorMode();
  const { themeStyles } = useCustomTheme();

  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: themeStyles.col02.backgroundColor,
      }}
    >
      {editorMode === EDITOR_MODES.MULTILINE_EDITOR_MODE ? (
        <>
          <div
            style={{
              color: themeStyles.col02.color,
              marginTop: "-3rem",
              marginBottom: "2rem",
              fontFamily: themeStyles.font,
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            Fixed height editor
          </div>
          <MultiLineEditor />
          <RightBar
            features={[
              "Fixed height editor both vertically and horizontally",
              "Horizontally text wraps to another line",
              "Vertically, editor scrolls",
              "Completion box appears near the cursor and error gets underlined",
              "We can drag and drop a file into the editor and the text/code inside it will be inserted into the editor",
            ]}
          />
        </>
      ) : editorMode === EDITOR_MODES.SINGLELINE_EDITOR_MODE ? (
        <>
          <div
            style={{
              color: themeStyles.col02.color,
              marginTop: "-3rem",
              marginBottom: "2rem",
              fontFamily: themeStyles.font,
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            Text input editor
          </div>
          <SingleLineEditor />
          <RightBar
            features={[
              "Height of editor fixed at single line",
              "Acts as a simple input box",
              "Recommendations appear at bottom of the editor at a fixed place which acts as a drop-down",
              "We can copy and paste multiple lines in the editor and it will get appended at the cursor point as a single line",
            ]}
          />
        </>
      ) : editorMode === EDITOR_MODES.RESIZABLE_EDITOR_MODE ? (
        <>
          <div
            style={{
              color: themeStyles.col02.color,
              marginTop: "-3rem",
              marginBottom: "2rem",
              fontFamily: themeStyles.font,
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            Dynamic height editor
          </div>
          <ResizaleEditor />
          <RightBar
            features={[
              "Tackles issue of editor resizing",
              "Editor which expands height when a certain amount of text is added or when we want to add a line",
              "Includes all features of multiline editor like fixed height, autocompletions, error display etc",
              "The resizable editor feature offers users the flexibility to customize the height of the editor, enhancing the overall user experience by allowing them to adjust it according to their preferences and needs.",
            ]}
          />
        </>
      ) : (
        <>
          <div
            style={{
              color: themeStyles.col02.color,
              marginTop: "-3rem",
              marginBottom: "0.5rem",
              fontFamily: themeStyles.font,
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            Multitheme editor
          </div>
          <div className="flex flex-wrap">
            <MultiThemeEditor />
            <MultiThemeEditor />
            <RightBar
              features={[
                "Tackles the issue of maintaining more than one editor with different theme on the same page",
                "Gives two options on light and dark modes i.e. GitHub theme and Gruvbox theme",
                "Persists editor theme on changing global theme from light to dark mode and vice versa",
                "Maintains state of code seperately for both editor so program doesnt break or show ambiguous behaviour",
                "Includes all features of multiline editor like fixed height, autocompletions, error display etc",
              ]}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default IDE;
