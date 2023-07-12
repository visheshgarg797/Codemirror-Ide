import React from "react";
import Popup from "../Autocomplete/Popup";

const SingleLineEditorComponent = ({
  editorRef,
  popupState,
  pushSelectionChangesToEditor,
  handleDiscardPopup,
  suggestionBoxCorrds,
}) => {
  return (
    <div
      ref={editorRef}
      className="EditorContainer"
      style={{ width: "43.7rem", margin: "auto" }}
    >
      <style>
        {`.cm-tooltip {
            top:${suggestionBoxCorrds.top + 2}px !important;
            left:${suggestionBoxCorrds.left + 1}px !important;
            position: fixed !important;
            border: 1px solid #181a1f;
            width: 43.83rem;
            border-radius: 0px 0px 10px 10px;
          }

          .cm-tooltip > ul > li{
            width:100%;
          }

          .cm-tooltip > ul{
            border-radius: 0px 0px 10px 10px;
          }
          `}
      </style>
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

export default SingleLineEditorComponent;
