"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import AnchorBar from "../Layout/AnchorBar";

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

        <div
          style={{
            color: themeStyles.col02.color,
            fontSize: "1rem",
            fontFamily: themeStyles.font,
            fontWeight: "300",
            lineHeight: "1.5",
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
            Aim
          </h1>
          <span>
            The aim of our project is to explore alternative options to the
            editor used at Sprinklr. The motivation behind this endeavor stems
            from the need to address essential features that have emerged as
            essential requirements for our web editing environment but are at
            the moment not available with the editor used at Sprinklr. The
            current version of editor used at Sprinklr used the{" "}
            <strong>Monaco</strong> library and though its popular and widely
            regarded library for building web editors, it is not able to deliver
            some of the requirements that are essential. Some of these features
            includes rendering multiple editors with different themes within the
            same page, dynamic height editor components, and support for
            right-to-left (RTL) languages like Arabic, Hebrew, Urdu etc. In this
            project, we are specifically looking for possible options that can
            allow us to build the features that exist in the current version of
            the editor used at Sprinklr while also supporting additional
            features. We believe that exploring alternative options will help us
            find a more suitable editor that can meet our requirements and
            improve our web editing environment.
          </span>
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
          <span>
            In the beginning, we undertook a comprehensive exploration of
            several prominent editor frameworks, including <strong>ACE</strong>,{" "}
            <strong>CodeMirror</strong>, <strong>Theia</strong>, and{" "}
            <strong>Orion</strong>. After meticulous evaluation, we have
            concluded that CodeMirror emerges as the optimal choice for our
            requirements. CodeMirror possesses a multitude of advantages that
            set it apart from its counterparts. Firstly, its compact package
            size ensures efficient resource utilization, resulting in enhanced
            performance and reduced loading times. Additionally, CodeMirror
            benefits from a vibrant and active community, providing extensive
            support, regular updates, and a wealth of user-contributed plugins
            and extensions. Moreover, CodeMirror offers an array of built-in
            features, such as multi-theme editors within the same page,
            resizable editor components, and robust right-to-left (RTL) language
            support, allows heavily customizing the editor in terms of both
            looks and functioning, each aligning seamlessly with our project
            objectives. Thus, CodeMirror emerges as viable option with respect
            to our requirements.
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
            Tech Stack
          </h1>
          <span>
            We have used <strong>CodeMirror v6</strong> as the library for the
            new Editor and <strong>Antlr v4</strong> which is a powerful parser
            generator for reading, processing, executing, or translating
            structured text or binary files. We have built custom written
            plugins for themes of editors. The entire website is built using{" "}
            <strong>NextJS</strong> due to its simple Routing support, Static
            site generation and buildin Tailwind support. The styling of the
            website is done using <strong>TailwindCSS</strong>.
          </span>
          <br />
        </div>
      </div>

      <AnchorBar
        margin={"10px"}
        features={[
          { anchor: "#section1", heading: "Aim" },
          { anchor: "#section2", heading: "Exploring Different Editors" },
          { anchor: "#section3", heading: "Tech Stack" },
        ]}
      />
    </>
  );
};
export default Overview;
