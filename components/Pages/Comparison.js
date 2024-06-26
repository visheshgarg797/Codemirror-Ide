"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import { TiTick, TiTimes } from "react-icons/ti";
import COMPONENT_CONSTANTS from "../ComponentConstants";
import "./IconsColor.css";
import { useCustomDirection } from "@/context/useDirectionHook";
import { Direction } from "@/constants/Direction";
import AnchorBar from "../Layout/AnchorBar";
const Comparison = () => {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();

  return (
    <>
      <div
        className="main-division p-5 pb-70 mt-2 mb-5"
        style={{
          backgroundColor: themeStyles.col02.backgroundColor,
          marginInlineStart: "300px",
          marginInlineEnd: "240px",
          paddingEnd: "20px",
          paddingBottom: "60px",
        }}
      >
        <h1
          style={{
            color: themeStyles.col02.color,
            paddingTop: "20px",
            fontSize: "2.5rem",
            fontFamily: themeStyles.font,
            fontWeight: "500",
          }}
        >
          Comparison
        </h1>
        <table id="section1" className="min-w-full mt-5">
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
              >
                Features
              </th>
              <th
                scope="col"
                style={{
                  color: themeStyles.col02.color,
                }}
                className="text-m font-large px-6 py-3 text-left"
              >
                Codemirror Editor
              </th>
              <th
                scope="col"
                style={{
                  color: themeStyles.col02.color,
                }}
                className="text-m font-large px-6 py-3 text-left"
              >
                Monaco Editor
              </th>
              <th
                scope="col"
                style={{
                  color: themeStyles.col02.color,
                }}
                className="text-m font-large px-6 py-3 text-left"
              >
                Ace Editor
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPONENT_CONSTANTS.COMPARISION_TABLE_CONTENT.map(
              (item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b transition duration-300 ease-in-out hover:bg-gray-400"
                    style={{
                      backgroundColor: themeStyles.col02.backgroundColor,
                    }}
                  >
                    <td
                      className=" py-2 whitespace-nowrap text-sm font-medium"
                      style={{
                        color: themeStyles.col02.color,
                        paddingLeft: "0.25rem",
                      }}
                    >
                      {item.feature}
                      <br />
                      <span
                        className="py-2 whitespace-nowrap text-xs font-small"
                        style={{ fontWeight: "400" }}
                      >
                        {item.content || "NO CONTENT FOUND"}
                      </span>
                    </td>
                    <td
                      className="py-2 whitespace-nowrap text-sm font-medium"
                      style={{
                        paddingLeft: direction === Direction.LTR ? "7%" : "0%",
                        paddingRight:
                          direction === Direction.RTL ? "13%" : "0%",
                        color: themeStyles.col02.color,
                      }}
                    >
                      {item.codemirror === "YES" ? (
                        <TiTick size={30} className="green-icon" />
                      ) : (
                        <TiTimes size={30} className="red-icon" />
                      )}
                    </td>
                    <td
                      className="py-2 whitespace-nowrap text-sm font-medium"
                      style={{
                        paddingLeft: direction === Direction.LTR ? "5%" : "0%",
                        paddingRight:
                          direction === Direction.RTL ? "12%" : "0%",
                        color: themeStyles.col02.color,
                      }}
                    >
                      {item.monaco === "YES" ? (
                        <TiTick size={30} className="green-icon" />
                      ) : (
                        <TiTimes size={30} className="red-icon" />
                      )}
                    </td>
                    <td
                      className="py-2 whitespace-nowrap text-sm font-medium"
                      style={{
                        paddingLeft: direction === Direction.LTR ? "4%" : "0%",
                        paddingRight: direction === Direction.RTL ? "9%" : "0%",
                        color: themeStyles.col02.color,
                      }}
                    >
                      {item.ace === "YES" ? (
                        <TiTick size={30} className="green-icon" />
                      ) : (
                        <TiTimes size={30} className="red-icon" />
                      )}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        <h1
          id="section2"
          style={{
            color: themeStyles.col02.color,
            paddingTop: "40px",
            fontSize: "20px",
            fontFamily: themeStyles.font,
            fontWeight: "500",
          }}
        >
          Comparison
        </h1>
        <p
          style={{
            color: themeStyles.col02.color,
            paddingTop: "10px",
            fontSize: "1rem",
            fontFamily: themeStyles.font,
            fontWeight: "300",
          }}
        >
          <span style={{ textAlign: "justify" }}>
            Based on the provided feature comparison data, it is evident that
            CodeMirror offers a better set of features compared to ACE and
            Monaco. CodeMirror excels in multiple areas, including multi-line
            and single-line editing, keyword highlighting, bracket matching,
            comments, error highlighting, auto-completion support, callback
            support, copy-paste support, substring selection support, multiple
            theme support, custom language support, and more. It provides a
            comprehensive and powerful editing experience for developers.
          </span>
          <br />
        </p>
      </div>

      <AnchorBar
        margin={"50px"}
        features={[
          {
            anchor: "#section1",
            heading: `Table of Features ${" "}  ${" "} ${" "} ${" "} ${" "} ${" "} ${" "} ${" "} `,
          },
          { anchor: "#section2", heading: "Comparison" },
          { anchor: "#section3", heading: "Conclusion" },
        ]}
      />
    </>
  );
};

export default Comparison;
