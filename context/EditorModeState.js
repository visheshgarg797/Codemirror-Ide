"use client";
import React, { useState } from "react";
import EditorModeContext from "./EditorModeContext";

const EditorModeState = (props) => {
  const State = {
    MultiLineEditorMode: true,
    SingleLineEditorMode: false,
  };

  const [editorMode, setEditorMode] = useState(State);

  const updateEditorMode = () => {
    setEditorMode({
      MultiLineEditorMode: !editorMode.MultiLineEditorMode,
      SingleLineEditorMode: !editorMode.SingleLineEditorMode,
    });
  };

  return (
    <EditorModeContext.Provider value={{ editorMode, updateEditorMode }}>
      {props.children}
    </EditorModeContext.Provider>
  );
};

export default EditorModeState;
