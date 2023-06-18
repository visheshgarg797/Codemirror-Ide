"use client";
import { createContext, useState } from "react";
import constants from "@/utils/constants";

export const EditorModeContext = createContext();

const initEditorMode = () => {
  const storedMode = localStorage.getItem("editorMode");
  if (storedMode) {
    return storedMode;
  } else {
    localStorage.setItem("editorMode", constants.MULTILINE_EDITOR_MODE);
    return constants.MULTILINE_EDITOR_MODE;
  }
};

export function EditorModeProvider({ children }) {
  const [editorMode, setEditorMode] = useState(initEditorMode);

  const updateEditorMode = () => {
    const updatedMode =
      editorMode === constants.MULTILINE_EDITOR_MODE
        ? constants.SINGLELINE_EDITOR_MODE
        : constants.MULTILINE_EDITOR_MODE;
    setEditorMode(updatedMode);
    localStorage.setItem("editorMode", updatedMode);
  };

  const editorModeContextValue = {
    editorMode,
    updateEditorMode,
  };

  return (
    <EditorModeContext.Provider value={editorModeContextValue}>
      {children}
    </EditorModeContext.Provider>
  );
}
