"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../../context/useThemeHook";

const Requirements = () => {
  const { themeStyles } = useCustomTheme();

  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        marginInlineStart: "350px",
        marginInlineEnd: "170px",
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
          style={{ fontSize: "1rem", marginBottom: "2rem", marginTop: "1rem" }}
        >
          CodeMirror and Monaco are both powerful code editors that provide a
          range of essential features for developers. However, there are certain
          features missing in the Monaco editor that need to be included in the
          new editor to meet the requirements and ensure a comprehensive editing
          experience.
          <br /> <br />
          Firstly, the new editor needs to incorporate missing bidirectional
          support, enabling developers to work with right-to-left (RTL)
          languages. This is crucial for ensuring compatibility with languages
          that require RTL rendering.
          <br /> <br />
          Another feature that the new editor should add is the option for
          multiple theme editors on a single page. This allows developers to
          have different code editors with distinct themes within the same
          application or webpage.
          <br /> <br />
          Additionally, the new editor should introduce dynamic height editor
          functionality, allowing the editor give users the control to give
          variable size editor heights
          <br /> <br />
          Lastly, the new editor should incorporate drag and drop file support,
          enabling developers to easily import files into the editor by dragging
          and dropping them from their local file system. This streamlines the
          workflow and enhances user experience, eliminating the need for manual
          file selection through traditional file browsers.
          <br /> <br />
          By including these missing features in new editor, it can provide a
          complete and robust code editing solution along with the exising
          features of the Monaco editor like autocomplete, grammer integration,
          error handling, AI powered popup to enhance queries, singleline editor
          etc.
        </div>
      </p>
    </div>
  );
};
export default Requirements;
