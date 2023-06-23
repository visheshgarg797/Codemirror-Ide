"use client";
import { createContext, useState } from "react";
import EDITOR_MODES from "@/utils/constants";

export const EditorModeContext = createContext();

const initEditorMode = () => {
  const storedMode = localStorage.getItem("editorMode");
  if (storedMode) {
    return storedMode;
  } else {
    localStorage.setItem("editorMode", EDITOR_MODES.MULTILINE_EDITOR_MODE);
    return EDITOR_MODES.MULTILINE_EDITOR_MODE;
  }
};

export function EditorModeProvider({ children }) {
  const [editorMode, setEditorMode] = useState(initEditorMode);

  const updateEditorMode = (props) => {
    const updatedMode = props;
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
