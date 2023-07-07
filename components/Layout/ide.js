"use client";
import { useCustomTheme } from "../../context/useThemeHook";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import MultiLineEditor from "../Editors/MultilineEditor";
import SingleLineEditor from "../Editors/SinglelineEditor";
import ResizaleEditor from "../Editors/ResizableEditor";
import MultiThemeEditor from "../Editors/MutliThemeEditor";
import { EDITOR_MODES } from "@/constants/EditorModes";
import RightBar from "./RightFeatures";
import COMPONENT_CONSTANTS from "../ComponentConstants";

const IDE = () => {
  const { editorMode } = useCustomEditorMode();
  const { themeStyles } = useCustomTheme();

  return (
    <div
      style={{
        width: "95%",
        marginTop: "10px",
        backgroundColor: "themeStyles.col02.backgroundColor",
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
          <RightBar list={COMPONENT_CONSTANTS.MULTILINE_RIGHT_CONTENT} />
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
          <RightBar list={COMPONENT_CONSTANTS.SINGLELINE_RIGHT_CONTENT} />
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
          <RightBar list={COMPONENT_CONSTANTS.RESIZEABLE_RIGHT_CONTENT} />
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
            <RightBar list={COMPONENT_CONSTANTS.MULTITHEME_RIGHT_CONTENT} />
          </div>
        </>
      )}
    </div>
  );
};
export default IDE;
