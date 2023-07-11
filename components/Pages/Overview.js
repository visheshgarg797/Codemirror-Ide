"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import AnchorBar from "../Layout/AnchorBar";
import RightBar from "../Layout/RightFeatures";

const Overview = () => {
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
          Overview{" "}
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
              Objective
            </h1>
            The objective of our project is to explore alternative options to
            the Monaco Editor. The motivation behind this endeavor stems from
            the need to address certain critical features that have emerged as
            essential requirements for our web editing environment.
            Specifically, we are seeking alternatives that can provide us with
            multiple themes in editors within the same page, resizable editor
            components, and robust support for right-to-left (RTL) languages
            like Arabic, Hebrew, Urdu etc. By venturing into this project, we
            aim to identify a suitable solution that not only fulfills these
            specific demands but also aligns with our overarching goal of
            delivering a highly flexible and user-centric web editing
            experience.
            <br />
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
              Exploring different editors
            </h1>
            In the beginning, we undertook a comprehensive exploration of
            several prominent editor frameworks, including ACE, Monaco, Orion,
            and Theia. After meticulous evaluation, we have concluded that
            CodeMirror emerges as the optimal choice for our requirements.
            CodeMirror possesses a multitude of advantages that set it apart
            from its counterparts. Firstly, its compact package size ensures
            efficient resource utilization, resulting in enhanced performance
            and reduced loading times. Additionally, CodeMirror benefits from a
            vibrant and active community, providing extensive support, regular
            updates, and a wealth of user-contributed plugins and extensions.
            Moreover, CodeMirror offers an array of built-in features, such as
            multi-theme editors within the same page, resizable editor
            components, and robust right-to-left (RTL) language support, allows
            heavily customizing the editor in terms of both looks and
            functioning, each aligning seamlessly with our project objectives.
            With its comprehensive feature set, widespread adoption, and
            continuous development, CodeMirror emerges as the superior choice to
            empower our web editing environment.
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
              Codemirror Advantages
            </h1>
            Several notable companies have successfully migrated from Monaco to
            CodeMirror. For instance, Sourcegraph migrated their website away
            from Monaco to CodeMirror, replacing 90% of Monaco functionality
            within just two days. Replit initially switched from Ace to Monaco
            but later made the transition to CodeMirror, appreciating its
            lighter weight and modularity. Checkly replaced their
            CodeMirror-based editor with Monaco, leveraging its stable features
            like custom grammer integration to generate tokens, autcompletion
            and hover tooltip. These examples highlight the flexibility and
            advantages offered by CodeMirror.
            <br />
          </div>
        </p>
      </div>

      <AnchorBar
        margin={"10px"}
        features={[
          { anchor: "#section1", heading: "Objective" },
          { anchor: "#section2", heading: "Exploring different editors" },
          { anchor: "#section3", heading: "Codemirror Advantages" },
        ]}
      />
    </>
  );
};
export default Overview;
