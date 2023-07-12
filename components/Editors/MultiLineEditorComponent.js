import React from "react";
import Popup from "../Autocomplete/Popup";

const MultiLineEditorComponent = ({
  editorRef,
  popupState,
  pushSelectionChangesToEditor,
  handleDiscardPopup,
}) => {
  return (
    <div ref={editorRef} className="EditorContainer " style={{ width: "100%" }}>
      {popupState.showPopup && (
        <Popup
          position={popupState.popupPosition}
          selection={popupState.selection}
          handleOnClick={pushSelectionChangesToEditor}
          handleDiscardPopup={handleDiscardPopup}
        />
      )}
    </div>
  );
};

export default MultiLineEditorComponent;
