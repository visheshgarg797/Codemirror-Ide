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
            Firstly, the new editor needs to incorporate dynamic height change
            support which changes height on runtime as in the Monaco-Editor
            (sprinklr editor) , height is fixed once and cant change on runtime
            . The dynamic height feature allows the editor component to adjust
            its height based on its content or user interaction. This means that
            as the user types or interacts with the editor, the height of the
            component automatically expands or shrinks to fit the content.The
            max height option sets a maximum height limit for the editor
            component. If the content exceeds this maximum height, the editor
            will display a scroll bar to allow the user to scroll through the
            content vertically.
            <Image src={dynamicHeightEditor} alt="Dynamic height editor" />
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
            Another feature that the new editor should add is the option for
            multiple theme editors on a single page. This allows developers to
            have different code editors with distinct themes within the same
            application or webpage. This allows users to customize and preview
            different themes simultaneously. Changes made in one theme editor
            would not affect the other editors.
            <Image src={multiThemeEditor} alt="Multi theme editor" />
            <br />
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
            Firstly, the new editor needs to incorporate missing bidirectional
            support, enabling developers to work with right-to-left languages.
            This is crucial for ensuring compatibility with languages that
            require RTL rendering. As the existing editor is not able to write
            in rtl languages it is difficult to do search in arabic and other
            rtl languages . So , editor should have RTL support to resolve this
            issue
            <Image src={supportForRTL} alt="RTL support" />
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
            The new editor should incorporate drag and drop file support,
            enabling developers to easily import files into the editor by
            dragging and dropping them from their local file system. This
            streamlines the workflow and enhances user experience, eliminating
            the need for manual file selection through traditional file
            browsers.
            <Image src={dragAndDrop} alt="Drag and drop feature" />
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
            The existing monacco editors show complex errors which leads to
            echnical jargon or complex terminology , User-friendly error
            messages present information in a clear and concise manner, using
            plain language that is easy for users to understand.users can
            quickly grasp the nature of the error and take appropriate actions
            to resolve it.
            <Image src={errorHandling} alt="Error handling" />
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
            Existing editor cannot have fixed suggestion box below text input
            box which need to be implemented to resolve designing problems .
            <Image src={textInputEditor} alt="Text input editor" />
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
