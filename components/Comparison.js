"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";
import { TiTick, TiTimes } from "react-icons/ti";
import "./IconsColor.css";
const Comparison = () => {
  const { themeStyles } = useCustomTheme();
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
          paddingTop: "40px",
          fontSize: "40px",
          fontFamily: themeStyles.font,
          fontWeight: "700",
        }}
      >
        Comparison
      </h1>
      <p
        style={{
          color: themeStyles.col02.color,
          fontSize: "20px",
          fontFamily: themeStyles.font,
          fontWeight: "300",
          lineHeight: "1.5",
          marginTop: "2rem",
        }}
      >
        <div style={{ color: themeStyles.col02.color }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${themeStyles.col02.color}`,
              fontSize: "1rem",
              marginBottom: "2rem",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "start",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: themeStyles.col02.color,
                  }}
                >
                  FEATURES
                </th>
                <th
                  style={{
                    textAlign: "start",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: themeStyles.col02.color,
                  }}
                >
                  CODEMIRROR
                </th>
                <th
                  style={{
                    textAlign: "start",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginLeft: "50px",
                    color: themeStyles.col02.color,
                    paddingInlineStart: "10px",
                  }}
                >
                  MONACO
                </th>
                <th
                  style={{
                    textAlign: "start",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: themeStyles.col02.color,
                  }}
                >
                  ACE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",
                    fontWeight: "bold",
                  }}
                >
                  Multi line editor
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",
                    fontWeight: "bold",
                  }}
                >
                  Single line editor
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTimes size={30} className="red-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Keyword highlighting
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Bracket Matching
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Comments
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Error highlighting
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Auto completion support
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Callback support
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    textAlign: "right",

                    fontWeight: "bold",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Editor resizing
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTimes size={30} className="red-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Cut, copy, paste support
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Substring selection support
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTimes size={30} className="red-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Read only editor
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  onKeyDown listener
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Themes
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTick size={30} className="green-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  &gt;1 editor with different theme
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTimes size={30} className="red-icon" />
                </td>
                <td>
                  <TiTimes size={30} className="red-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  RTL support
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTimes size={30} className="red-icon" />
                </td>
                <td>
                  <TiTimes size={30} className="red-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  Custom language support
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td>
                  <TiTimes size={30} className="red-icon" />
                </td>
              </tr>
              <tr style={{ border: `1px solid ${themeStyles.col02.color}` }}>
                <td
                  style={{
                    textAlign: "start",

                    fontWeight: "bold",
                  }}
                >
                  File drag and drop support
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTick size={30} className="green-icon" />
                </td>
                <td
                  style={{
                    paddingInlineStart: "60px",
                  }}
                >
                  <TiTimes size={30} className="red-icon" />
                </td>
                <td>
                  <TiTimes size={30} className="red-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </p>
    </div>
  );
};

export default Comparison;
