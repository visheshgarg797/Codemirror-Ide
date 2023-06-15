"use client";
import { useContext } from "react";
import EditorModeToggleButton from "./EditorModeToggleButton"; // Radio button component used to toggle between multiline and singleline mode
import EditorModeContext from "@/context/EditorModeContext"; // Used to get the current context to conditionally render single and multiline editors
import { useCustomTheme } from "./useThemeHook";
import MultiLineEditor from "./MultilineEditor";
import SingleLineEditor from "./SinglelineEditor";

export default function IDE() {
  const EditorMode = useContext(EditorModeContext);
  const { themeStyles } = useCustomTheme();
  console.log(EditorMode);

  return (
    <>
      <div
        style={{
          height: "480px",
          marginTop: "10px",
          backgroundColor: themeStyles.col02.backgroundColor,
        }}
      >
        {EditorMode.editorMode.MultiLineEditorMode ? (
          <MultiLineEditor />
        ) : (
          <SingleLineEditor />
        )}
      </div>
    </>
  );
}
