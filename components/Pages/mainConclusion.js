"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import AnchorBar from "../Layout/AnchorBar";
import Image from "next/image";
import performanceAnalysis from "../images/performanceAnalysis.png";

const MainConclusion = () => {
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
          Conclusion
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
              Why Codemirror ?
            </h1>
            After conducting a thorough comparison of Ace, CodeMirror, and
            Monaco, we have determined that CodeMirror is the superior choice
            for a code editor. It offers versatility by being easily embeddable
            in any web page or JavaScript application, supporting multiple
            languages and themes. CodeMirror boasts an extensive feature set,
            including essential functionalities like syntax highlighting, code
            folding, and autocompletion. Its comprehensive documentation enables
            developers to quickly get started and leverage its capabilities
            effectively. The active community support ensures prompt bug fixes,
            feature enhancements, and a wide range of third-party plugins and
            extensions. Moreover, CodeMirror seamlessly integrates with other
            tools and frameworks, thanks to its modular architecture.
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
              What we Build ?
            </h1>
            In our development process, we built the entire editor using
            CodeMirror, successfully implementing most of the features found in
            the existing Monaco editor. Additionally, we went beyond by
            incorporating advanced features like right-to-left support, multiple
            theme editors within a single page, a dynamic length editor, and the
            ability to paste files via drag and drop. These added features
            enhance the editor functionality and provide an even more
            customizable and efficient code editing experience for developers
            and also help users with our error handling support as well
            customized suggestion box for text input editor
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
              Performance Analysis for website
            </h1>
            <Image
              src={performanceAnalysis}
              style={{ marginTop: "1rem" }}
              alt="Performance analysis"
            />
          </div>
        </p>
      </div>
    </>
  );
};
export default MainConclusion;
