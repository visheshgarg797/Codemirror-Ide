"use client";
import { useContext } from "react";
import { EditorModeContext } from "./editorModeProvider";

export function useCustomEditorMode() {
  const editorModeContext = useContext(EditorModeContext);

  const { editorMode, updateEditorMode } = editorModeContext;

  return {
    editorMode,
    updateEditorMode,
  };
}
