"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../../context/useThemeHook";

const MainConclusion = () => {
  const { themeStyles } = useCustomTheme();

  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        marginInlineStart: "390px",
        marginInlineEnd: "130px",
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
          fontWeight: "700",
        }}
      >
        Conclusion{" "}
      </h1>
      <p
        style={{
          color: themeStyles.col02.color,
          fontSize: "1rem",
          fontFamily: themeStyles.font,
          fontWeight: "300",
          lineHeight: "1.5",
          marginTop: "2rem",
        }}
      >
        After conducting a thorough comparison of Ace, CodeMirror, and Monaco,
        we have determined that CodeMirror is the superior choice for a code
        editor. It offers versatility by being easily embeddable in any web page
        or JavaScript application, supporting multiple languages and themes.
        CodeMirror boasts an extensive feature set, including essential
        functionalities like syntax highlighting, code folding, and
        autocompletion. Its comprehensive documentation enables developers to
        quickly get started and leverage its capabilities effectively. The
        active community support ensures prompt bug fixes, feature enhancements,
        and a wide range of third-party plugins and extensions. Moreover,
        CodeMirror seamlessly integrates with other tools and frameworks, thanks
        to its modular architecture.
        <br /> <br />
        In our development process, we built the entire editor using CodeMirror,
        successfully implementing most of the features found in the existing
        Monaco editor. Additionally, we went beyond by incorporating advanced
        features like right-to-left (RTL) support, multiple theme editors within
        a single page, a dynamic length editor, and the ability to paste files
        via drag and drop. These added features enhance the editor's
        functionality and provide an even more customizable and efficient code
        editing experience for developers.
        <br /> <br />
        With CodeMirror as our chosen platform, we provide an efficient and
        customizable code editing experience that empowers developers to work
        with ease and efficiency, while enjoying the benefits of RTL support,
        multiple theme editors, dynamic length editing, and file pasting through
        drag and drop. Overall, CodeMirror proves to be the ideal choice,
        combining a robust feature set, comprehensive documentation, active
        community support, and the flexibility to incorporate additional
        functionalities to meet the specific needs of developers.
      </p>
    </div>
  );
};

export default MainConclusion;
