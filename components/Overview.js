"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";

const Overview = () => {
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
            marginBottom: "1.2rem",
            marginTop: "1.2rem",
          }}
        >
          The objective of our project is to explore alternative options to the
          Monaco Editor. The motivation behind this endeavor stems from the need
          to address certain critical features that have emerged as essential
          requirements for our web editing environment. Specifically, we are
          seeking alternatives that can provide us with multiple themes in
          editors within the same page, resizable editor components, and robust
          support for right-to-left (RTL) languages like Arabic, Hebrew, Urdu
          etc. By venturing into this project, we aim to identify a suitable
          solution that not only fulfills these specific demands but also aligns
          with our overarching goal of delivering a highly flexible and
          user-centric web editing experience.
        </div>
        <div
          style={{
            fontSize: "1rem",
            marginBottom: "1.2rem",
            marginTop: "1.2rem",
          }}
        >
          In the beginning, we undertook a comprehensive exploration of several
          prominent editor frameworks, including ACE, Monaco, Orion, and Theia.
          After meticulous evaluation, we have concluded that CodeMirror emerges
          as the optimal choice for our requirements. CodeMirror possesses a
          multitude of advantages that set it apart from its counterparts.
          Firstly, its compact package size ensures efficient resource
          utilization, resulting in enhanced performance and reduced loading
          times. Additionally, CodeMirror benefits from a vibrant and active
          community, providing extensive support, regular updates, and a wealth
          of user-contributed plugins and extensions. Moreover, CodeMirror
          offers an array of built-in features, such as multi-theme editors
          within the same page, resizable editor components, and robust
          right-to-left (RTL) language support, allows heavily customizing the
          editor in terms of both looks and functioning, each aligning
          seamlessly with our project objectives. With its comprehensive feature
          set, widespread adoption, and continuous development, CodeMirror
          emerges as the superior choice to empower our web editing environment.
        </div>
        <div
          style={{
            fontSize: "1rem",
            marginBottom: "1.2rem",
            marginTop: "1.2rem",
          }}
        >
          Several notable companies have successfully migrated from Monaco to
          CodeMirror. For instance, Sourcegraph migrated their website away from
          Monaco to CodeMirror, replacing 90% of Monaco functionality within
          just two days. Replit initially switched from Ace to Monaco but later
          made the transition to CodeMirror, appreciating its lighter weight and
          modularity. Checkly replaced their CodeMirror-based editor with
          Monaco, leveraging its customization capabilities to define custom
          tokens and enable context-aware autocomplete and hover features. These
          examples highlight the flexibility and advantages offered by
          CodeMirror.
        </div>
      </p>
    </div>
  );
};
export default Overview;
