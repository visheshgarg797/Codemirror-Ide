"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import { TiTick, TiTimes } from "react-icons/ti";
import COMPONENT_CONSTANTS from "../ComponentConstants";
import "./IconsColor.css";
import { useCustomDirection } from "@/context/useDirectionHook";
import { Direction } from "@/constants/Direction";

const Comparison = () => {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();

  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        marginInlineStart: "390px",
        marginInlineEnd: "130px",
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
          fontWeight: "700",
        }}
      >
        Comparison
      </h1>
      <table className="min-w-full mt-5">
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
          {COMPONENT_CONSTANTS.COMPARISION_TABLE_CONTENT.map((item, index) => {
            return (
              <tr
                key={index}
                className="border-b transition duration-300 ease-in-out hover:bg-gray-400"
                style={{ backgroundColor: themeStyles.col02.backgroundColor }}
              >
                <td
                  className="px-6 py-2 whitespace-nowrap text-sm font-medium"
                  style={{ color: themeStyles.col02.color }}
                >
                  {item.feature}
                </td>
                <td
                  className="px-6 py-2 whitespace-nowrap text-sm font-medium"
                  style={{
                    paddingLeft: direction === Direction.LTR ? "7%" : "0%",
                    paddingRight: direction === Direction.RTL ? "13%" : "0%",
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
                  className="px-6 py-2 whitespace-nowrap text-sm font-medium"
                  style={{
                    paddingLeft: direction === Direction.LTR ? "5%" : "0%",
                    paddingRight: direction === Direction.RTL ? "12%" : "0%",
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
                  className="px-6 py-2 whitespace-nowrap text-sm font-medium"
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
          })}
        </tbody>
      </table>
      <h1
        style={{
          color: themeStyles.col02.color,
          paddingTop: "40px",
          fontSize: "20px",
          fontFamily: themeStyles.font,
          fontWeight: "700",
        }}
      >
        Conclusion
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
        Based on the provided feature comparison data, it is evident that
        CodeMirror offers a better set of features compared to ACE and Monaco.
        CodeMirror excels in multiple areas, including multi-line and
        single-line editing, keyword highlighting, bracket matching, comments,
        error highlighting, auto-completion support, callback support,
        copy-paste support, substring selection support, read-only editor,
        multiple theme support, custom language support, and more. It provides a
        comprehensive and powerful editing experience for developers.
        <br />
        As a result of its robust feature set and functionality, CodeMirror has
        experienced increasing adoption and usage by companies. Many
        organizations have chosen to migrate to CodeMirror due to its proven
        capabilities, flexibility, and extensive community support. Its active
        development and regular updates ensure compatibility with modern web
        technologies and evolving industry requirements. The availability of
        thorough documentation and a strong community presence also contributes
        to its popularity and ease of integration.
      </p>
    </div>
  );
};

export default Comparison;
