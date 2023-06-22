"use client";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import MultiLineEditor from "./MultilineEditor";
import SingleLineEditor from "./SinglelineEditor";
import ResizaleEditor from "./ResizableEditor";
import constants from "@/utils/constants";

const IDE = () => {
  const { editorMode } = useCustomEditorMode();
  const { themeStyles } = useCustomTheme();

  return (
    <div
      style={{
        height: "480px",
        marginTop: "10px",
        backgroundColor: themeStyles.col02.backgroundColor,
      }}
    >
      {editorMode === constants.MULTILINE_EDITOR_MODE ? (
        <MultiLineEditor />
      ) : editorMode === constants.SINGLELINE_EDITOR_MODE ? (
        <SingleLineEditor />
      ) : (
        <ResizaleEditor />
      )}
    </div>
  );
};
export default IDE;
