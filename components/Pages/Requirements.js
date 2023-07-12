"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import AnchorBar from "../Layout/AnchorBar";
import Image from "next/image";
import dynamicHeightEditor from "../images/dynamicHeightEditor.png";
import multiThemeEditor from "../images/multiThemeEditor.png";
import supportForRTL from "../images/supportForRTL.png";
import dragAndDrop from "../images/dragAndDrop.png";
import errorHandling from "../images/errorHandling.png";
import textInputEditor from "../images/textInputEditor.png";

const Requirements = () => {
  const { themeStyles } = useCustomTheme();

  return (
    <>
      <div
        className="main-division p-5 pb-70 mt-2 mb-5"
        style={{
          backgroundColor: themeStyles.col02.backgroundColor,
          marginInlineStart: "300px",
          marginInlineEnd: "240px",
          paddingRight: "20px",
          paddingBottom: "60px",
        }}
      >
        <h1
          style={{
            color: themeStyles.col02.color,
            paddingTop: "40px",
            fontSize: "40px",
            fontFamily: themeStyles.font,
            fontWeight: "500",
          }}
        >
          Requirements{" "}
        </h1>
        <p
          style={{
            color: themeStyles.col02.color,
            fontSize: "20px",
            fontFamily: themeStyles.font,
            fontWeight: "300",
            lineHeight: "1.5",
          }}
        >
          <div
            style={{
              fontSize: "1rem",
              marginBottom: "2rem",
            }}
          >
            <br />
            <span style={{ textAlign: "justify" }}>
              Editor requires to have all the features present in our existing
              monaco-editor like Keyword highlighting , Bracket Matching ,
              Comments , Error highlighting and syntax error visualization ,
              Text selection support with callback, Custom grammer and
              autocompletion support and other than that it requires some
              additional features or enhancements in existing features which are
              stated below :-
            </span>
            <h1
              id="section1"
              style={{
                color: themeStyles.col02.color,
                paddingTop: "40px",
                fontSize: "20px",
                fontFamily: themeStyles.font,
                fontWeight: "500",
              }}
            >
              Dynamic height editor Support
            </h1>
            <span style={{ textAlign: "justify" }}>
              Firstly, the new editor needs to incorporate dynamic height change
              support which changes height on runtime as in the Monaco-Editor
              (sprinklr editor) , height is fixed once and cant change on
              runtime . The dynamic height feature allows the editor component
              to adjust its height based on its content or user interaction.
              This means that as the user types or interacts with the editor,
              the height of the component automatically expands or shrinks to
              fit the content.The max height option sets a maximum height limit
              for the editor component. If the content exceeds this maximum
              height, the editor will display a scroll bar to allow the user to
              scroll through the content vertically.
            </span>
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
              Multitheme editor on a Single page
            </h1>
            <span style={{ textAlign: "justify" }}>
              Another feature that the new editor should add is the option for
              multiple theme editors on a single page. This allows developers to
              have different code editors with distinct themes within the same
              application or webpage. This allows users to customize and preview
              different themes simultaneously. Changes made in one theme editor
              would not affect the other editors.
            </span>
            <h1
              id="section3"
              style={{
                color: themeStyles.col02.color,
                paddingTop: "40px",
                fontSize: "20px",
                fontFamily: themeStyles.font,
                fontWeight: "500",
              }}
            >
              RTL Language support
            </h1>
            <span style={{ textAlign: "justify" }}>
              Firstly, the new editor needs to incorporate missing bidirectional
              support, enabling developers to work with right-to-left languages.
              This is crucial for ensuring compatibility with languages that
              require RTL rendering. As the existing editor is not able to write
              in rtl languages it is difficult to do search in arabic and other
              rtl languages . So , editor should have RTL support to resolve
              this issue
            </span>
            <br /> <br />
            <Image
              src={supportForRTL}
              alt="RTL support"
              style={{ height: "100%" }}
            />
            <br /> <br />
            <h1
              id="section4"
              style={{
                color: themeStyles.col02.color,
                paddingTop: "40px",
                fontSize: "20px",
                fontFamily: themeStyles.font,
                fontWeight: "500",
              }}
            >
              Drag and Drop Support
            </h1>
            <span style={{ textAlign: "justify" }}>
              The new editor should incorporate drag and drop file support,
              enabling developers to easily import files into the editor by
              dragging and dropping them from their local file system. This
              streamlines the workflow and enhances user experience, eliminating
              the need for manual file selection through traditional file
              browsers.
            </span>
            <h1
              id="section5"
              style={{
                color: themeStyles.col02.color,
                paddingTop: "40px",
                fontSize: "20px",
                fontFamily: themeStyles.font,
                fontWeight: "500",
              }}
            >
              User Friendly Error Support
            </h1>
            <span style={{ textAlign: "justify" }}>
              The existing Monaco editors show complex errors which leads to
              echnical jargon or complex terminology , User-friendly error
              messages present information in a clear and concise manner, using
              plain language that is easy for users to understand.users can
              quickly grasp the nature of the error and take appropriate actions
              to resolve it.
            </span>
            <h1
              id="section6"
              style={{
                color: themeStyles.col02.color,
                paddingTop: "40px",
                fontSize: "20px",
                fontFamily: themeStyles.font,
                fontWeight: "500",
              }}
            >
              Fixed Suggestion Box
            </h1>
            <span style={{ textAlign: "justify" }}>
              Existing editor cannot have fixed suggestion box below text input
              box which need to be implemented to resolve designing problems .
            </span>
          </div>
        </p>
      </div>
      <AnchorBar
        margin={"10px"}
        features={[
          { anchor: "#section1", heading: "Dynamic height editor Support" },
          {
            anchor: "#section2",
            heading: "Multitheme editor on a Single page",
          },
          { anchor: "#section3", heading: "RTL Language support" },
          { anchor: "#section4", heading: "Drag and Drop Support" },
          { anchor: "#section5", heading: "User Friendly Error Support" },
          { anchor: "#section6", heading: "Fixed Suggestion Box" },
        ]}
      />
    </>
  );
};
export default Requirements;
