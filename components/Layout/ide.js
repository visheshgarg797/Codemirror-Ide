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
        marginLeft: "-2rem",
      }}
    >
      {editorMode === EDITOR_MODES.MULTILINE_EDITOR_MODE ? (
        <>
          <div style={{ width: "90%", margin: "auto" }}>
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
          </div>
          <RightBar list={COMPONENT_CONSTANTS.MULTILINE_RIGHT_CONTENT} />
        </>
      ) : editorMode === EDITOR_MODES.SINGLELINE_EDITOR_MODE ? (
        <>
          <div style={{ width: "90%", margin: "auto" }}>
            <div
              style={{
                color: themeStyles.col02.color,
                marginTop: "-3rem",
                marginBottom: "2rem",
                fontFamily: themeStyles.font,
                fontSize: "2rem",
                fontStyle: "normal",
                fontWeight: "500",
                width: "100%",
                marginInlineStart: "2rem",
              }}
            >
              Text input editor
            </div>
            <div>
              <SingleLineEditor />
            </div>
          </div>
          <RightBar list={COMPONENT_CONSTANTS.SINGLELINE_RIGHT_CONTENT} />
        </>
      ) : editorMode === EDITOR_MODES.RESIZABLE_EDITOR_MODE ? (
        <>
          <div style={{ width: "90%", margin: "auto" }}>
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
          </div>
        </>
      ) : (
        <>
          <div style={{ width: "90%", margin: "auto" }}>
            <div
              style={{
                color: themeStyles.col02.color,
                marginTop: "-3rem",
                marginBottom: "0.5rem",
                fontFamily: themeStyles.font,
                fontSize: "2rem",
                fontStyle: "normal",
                fontWeight: "500",
                marginLeft: "-2rem",
              }}
            >
              Multitheme editor
            </div>
            <div className="flex flex-wrap">
              <div className="basis-1/2">
                <MultiThemeEditor />
              </div>
              <div className="basis-1/2">
                <MultiThemeEditor />
              </div>
            </div>
            <RightBar list={COMPONENT_CONSTANTS.MULTITHEME_RIGHT_CONTENT} />
          </div>
        </>
      )}
    </div>
  );
};
export default IDE;
