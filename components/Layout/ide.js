"use client";
import { useCustomTheme } from "../../context/useThemeHook";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import { EDITOR_MODES } from "@/constants/EditorModes";
import RightBar from "./RightFeatures";
import COMPONENT_CONSTANTS from "../ComponentConstants";
import { useCustomDirection } from "@/context/useDirectionHook";
import { Direction } from "@/constants/Direction";
import BaseEditor from "../Editors/BaseEditor";

const IDE = () => {
  const { direction } = useCustomDirection();
  const { editorMode } = useCustomEditorMode();
  const { themeStyles } = useCustomTheme();

  return (
    <div
      style={{
        width: "95%",
        marginTop: "10px",
        backgroundColor: "themeStyles.col02.backgroundColor",
        marginLeft: "-2rem",
      }}
    >
      {editorMode === EDITOR_MODES.MULTILINE_EDITOR_MODE ? (
        <>
          <div style={{ width: "90%", margin: "auto" }}>
            <div
              style={{
                color: themeStyles.col02.color,
                marginTop: "-3rem",
                marginBottom: "2rem",
                fontFamily: themeStyles.font,
                fontSize: "2rem",
                fontStyle: "normal",
                fontWeight: "500",
              }}
            >
              Fixed height editor
            </div>
            <BaseEditor
              editorType={
                COMPONENT_CONSTANTS.EDITOR_CONFIG.MULTILINE_EDITOR_MODE
              }
            />
            <br /> <br />
            <table
              id="section1"
              className="min-w-full mt-5"
              style={{ width: "90%" }}
            >
              <thead
                className="border-b"
                style={{ backgroundColor: themeStyles.col01.backgroundColor }}
              >
                <tr>
                  <th
                    scope="col"
                    style={{
                      color: themeStyles.col02.color,
                    }}
                    className="text-m font-large text-gray-900 px-6 py-3"
                  ></th>
                  <th
                    scope="col"
                    style={{
                      color: themeStyles.col02.color,
                    }}
                    className="text-m font-large px-6 py-3 text-left"
                  >
                    SAMPLE QUERY EXAMPLES
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPONENT_CONSTANTS.QUERY_TABLE_CONTENT.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b transition duration-300 ease-in-out hover:bg-gray-400"
                      style={{
                        backgroundColor: themeStyles.col02.backgroundColor,
                      }}
                    >
                      <td
                        className=" py-4 whitespace-nowrap text-sm font-medium"
                        style={{
                          color: themeStyles.col02.color,
                          paddingLeft: "0.25rem",
                        }}
                      >
                        {item.heading}
                        <br />
                      </td>
                      <td
                        className="py-2 whitespace-nowrap text-sm font-medium"
                        style={{
                          paddingLeft:
                            direction === Direction.LTR ? "7%" : "0%",
                          paddingRight:
                            direction === Direction.RTL ? "13%" : "0%",
                          color: themeStyles.col02.color,
                        }}
                      >
                        {item.query}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <RightBar list={COMPONENT_CONSTANTS.MULTILINE_RIGHT_CONTENT} />
        </>
      ) : editorMode === EDITOR_MODES.SINGLELINE_EDITOR_MODE ? (
        <>
          <div style={{ width: "90%", margin: "auto" }}>
            <div
              style={{
                color: themeStyles.col02.color,
                marginTop: "-3rem",
                marginBottom: "2rem",
                fontFamily: themeStyles.font,
                fontSize: "2rem",
                fontStyle: "normal",
                fontWeight: "500",
                width: "100%",
                marginInlineStart: "2rem",
              }}
            >
              Text input editor
            </div>
            <div>
              <BaseEditor
                editorType={
                  COMPONENT_CONSTANTS.EDITOR_CONFIG.SINGLELINE_EDITOR_MODE
                }
              />
            </div>
          </div>
          <RightBar list={COMPONENT_CONSTANTS.SINGLELINE_RIGHT_CONTENT} />
        </>
      ) : editorMode === EDITOR_MODES.RESIZABLE_EDITOR_MODE ? (
        <>
          <div style={{ width: "90%", margin: "auto" }}>
            <div
              style={{
                color: themeStyles.col02.color,
                marginTop: "-3rem",
                marginBottom: "2rem",
                fontFamily: themeStyles.font,
                fontSize: "2rem",
                fontStyle: "normal",
                fontWeight: "500",
              }}
            >
              Dynamic height editor
            </div>

            <BaseEditor
              editorType={
                COMPONENT_CONSTANTS.EDITOR_CONFIG.RESIZABLE_EDITOR_MODE
              }
            />
            <RightBar list={COMPONENT_CONSTANTS.RESIZEABLE_RIGHT_CONTENT} />
          </div>
        </>
      ) : (
        <>
          <div style={{ width: "90%", margin: "auto" }}>
            <div
              style={{
                color: themeStyles.col02.color,
                marginTop: "-3rem",
                marginBottom: "0.5rem",
                fontFamily: themeStyles.font,
                fontSize: "2rem",
                fontStyle: "normal",
                fontWeight: "500",
                marginLeft: "-2rem",
              }}
            >
              Multitheme editor
            </div>
            <div className="flex flex-wrap">
              <div className="basis-1/2">
                <BaseEditor
                  editorType={
                    COMPONENT_CONSTANTS.EDITOR_CONFIG.MULTITHEME_EDITOR_MODE
                  }
                />
              </div>
              <div className="basis-1/2">
                <BaseEditor
                  editorType={
                    COMPONENT_CONSTANTS.EDITOR_CONFIG.MULTITHEME_EDITOR_MODE
                  }
                />
              </div>
            </div>
            <RightBar list={COMPONENT_CONSTANTS.MULTITHEME_RIGHT_CONTENT} />
          </div>
        </>
      )}
    </div>
  );
};
export default IDE;
