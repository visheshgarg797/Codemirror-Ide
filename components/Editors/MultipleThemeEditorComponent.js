import React from "react";
import Popup from "../Autocomplete/Popup";
import { useCustomTheme } from "@/context/useThemeHook";
import { Theme_Name } from "@/constants/ThemeName";

const MultipleThemeEditorComponent = ({
  editorRef,
  popupState,
  pushSelectionChangesToEditor,
  handleDiscardPopup,
  currentThemeSelected,
  handleThemeChange,
  themeNamesRender,
}) => {
  const { themeStyles } = useCustomTheme();
  return (
    <div style={{ marginInlineEnd: "2rem" }}>
      <div
        className="ThemeSelectionContainer w-1/10"
        style={{
          marginRight: "1rem",
          color: "black",
          marginBottom: "1.5rem",
          marginTop: "2rem",
        }}
      >
        <select
          value={currentThemeSelected}
          onChange={(themeChangeEvent) => handleThemeChange(themeChangeEvent)}
          style={{
            backgroundColor: themeStyles.col02.backgroundColor,
            color: themeStyles.col02.color,
            border: `1px solid ${
              themeStyles.theme === Theme_Name.DARK_MODE ? "white" : "black"
            }`,
            borderRadius: "3px",
            padding: "2px",
          }}
        >
          {themeNamesRender.map((themeName, index) => {
            return (
              <option value={themeName} key={index}>
                {themeName}
              </option>
            );
          })}
        </select>
      </div>
      <div ref={editorRef} style={{ width: "100%" }}>
        {popupState.showPopup && (
          <Popup
            position={popupState.popupPosition}
            selection={popupState.selection}
            handleOnClick={pushSelectionChangesToEditor}
            handleDiscardPopup={handleDiscardPopup}
          />
        )}
      </div>
    </div>
  );
};

export default MultipleThemeEditorComponent;
