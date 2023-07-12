import React from "react";
import Popup from "../Autocomplete/Popup";
import { useCustomTheme } from "@/context/useThemeHook";
import { Theme_Name } from "@/constants/ThemeName";

const ResizeableEditorComponent = ({
  editorRef,
  popupState,
  pushSelectionChangesToEditor,
  handleDiscardPopup,
  setMaxLines,
}) => {
  const { themeStyles } = useCustomTheme();
  const Heightoptions = [
    { maxLine: "4", index: "0" },
    { maxLine: "6", index: "1" },
    { maxLine: "8", index: "2" },
  ];
  const handleHeightChange = (heightChangeEvent) => {
    let idx = (1 + parseInt(heightChangeEvent.target.value[0])) / 3;
    idx = parseInt(idx) - 1;
    setMaxLines(idx);
  };
  return (
    <div ref={editorRef} className="EditorContainer" style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            color: themeStyles.col02.color,
            fontSize: "14px",
          }}
        >
          {" "}
          MAXIMUM LINES
        </div>
        <div>
          <select
            onChange={(heightChangeEvent) =>
              handleHeightChange(heightChangeEvent)
            }
            style={{
              backgroundColor: themeStyles.col02.backgroundColor,
              color: themeStyles.col02.color,
              border: `1px solid ${
                themeStyles.theme === Theme_Name.DARK_MODE ? "white" : "black"
              }`,
              marginInlineStart: "9px",
              borderRadius: "3px",
            }}
          >
            {Heightoptions.map((index) => {
              return (
                <option value={index.maxLine} key={index.index}>
                  {index.maxLine}
                </option>
              );
            })}
          </select>
        </div>
      </div>

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

export default ResizeableEditorComponent;
