"use client";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import MultiLineEditor from "./MultilineEditor";
import SingleLineEditor from "./SinglelineEditor";
import ResizaleEditor from "./ResizableEditor";
import MultiThemeEditor from "./MutliThemeEditor";
import { EDITOR_MODES } from "@/constants/EditorModes";

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
        <MultiLineEditor />
      ) : editorMode === EDITOR_MODES.SINGLELINE_EDITOR_MODE ? (
        <SingleLineEditor />
      ) : editorMode === EDITOR_MODES.RESIZABLE_EDITOR_MODE ? (
        <ResizaleEditor />
      ) : (
        <div className="flex">
          <MultiThemeEditor />
          <MultiThemeEditor />
        </div>
      )}
    </div>
  );
};
export default IDE;
