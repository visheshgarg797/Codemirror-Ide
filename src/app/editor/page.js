"use client";
import { useContext } from "react";
import EditorModeToggleButton from "../components/EditorModeToggleButton"; // Radio button component used to toggle between multiline and singleline mode
import EditorModeContext from "../../../context/EditorModeContext"; // Used to get the current context to conditionally render single and multiline editors
import ThemeModeContext from "../../../context/ThemeModeContext";
import MultiLineEditor from "../components/MultiLineEditor";
import SingleLineEditor from "../components/SingleLineEditor";

export default function Editor() {
  const EditorMode = useContext(EditorModeContext);
  const EditorTheme = useContext(ThemeModeContext);
  console.log(EditorMode);

  return (
    <>
      <div
        className={`flex flex-col md:flex-row md:justify-between ml-20 mr-20 mt-10 p-10`}
        style={{
          height: "480px",
          backgroundColor: EditorTheme.ThemeMode.DarkMode ? "white" : "#23272f",
        }}
      >
        <div className="w-1/4 mt-2">
          <EditorModeToggleButton />
        </div>
        <div className="w-3/4">
          {EditorMode.editorMode.MultiLineEditorMode ? (
            <MultiLineEditor />
          ) : (
            <SingleLineEditor />
          )}
        </div>
      </div>
    </>
  );
}
