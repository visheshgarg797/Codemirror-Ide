"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import AnchorBar from "../Layout/AnchorBar";
import Image from "next/image";

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
                marginBottom: "0.5rem",
              }}
            >
              Outcome
            </h1>
            <span>
              In our development process, we built the entire editor using
              CodeMirror, successfully implementing most of the features found
              in the existing Sprinklr Monaco editor. Additionally, we
              incorporated features like right-to-left support, multiple theme
              editors within a single page, a dynamic length editor and user
              friendly error handling. While researching for features, we came
              across the feature of drag and drop directly into the editor which
              would greatly enhance user experience while interacting with our
              editor. Additionally to showcase our work we also built this
              website that has global theme and RTL support.
            </span>

            <h1
              id="section2"
              style={{
                color: themeStyles.col02.color,
                paddingTop: "40px",
                fontSize: "20px",
                fontFamily: themeStyles.font,
                fontWeight: "500",
                marginBottom: "0.5rem",
              }}
            >
              What next
            </h1>
            <span>
              Various companies have migrated from Monaco to CodeMirror. Some of
              the examples includes SourceGraph, WordPress, Dropbox Paper,
              Mozilla, Replit. The case study of SourceGraph and Replit are
              discussed below:
            </span>
            <br />
            <h1
              id="section3"
              style={{
                color: themeStyles.col02.color,
                paddingTop: "40px",
                fontSize: "20px",
                fontFamily: themeStyles.font,
                fontWeight: "500",
                marginBottom: "0.5rem",
              }}
            >
              SourceGraph
            </h1>

            <span>
              Sourcegraph, a search company that lets you search through
              millions of open-source repositories, recently migrated from
              Monaco Editor to CodeMirror.
            </span>

            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                marginTop: "1rem",
              }}
            >
              Reasons for migration:
            </h2>
            <ul
              style={{ listStyleType: "bullet", marginInlineStart: "1.2rem" }}
            >
              <li>
                <strong>Size:</strong> Monaco pushed the amount of JavaScript
                code that is downloaded on the search page to 6MB.
              </li>
              <li>
                <strong>Single-line editor:</strong> Unlike most IDEs, the
                search input is a single-line input which was difficult to
                implement with Monaco Editor.
              </li>
              <li>
                <strong>CSS integration:</strong> To customize the look of
                Monaco, they had to hard-code hex color codes into the
                JavaScript instead of being able to use site-wide CSS classes
                and variables.
              </li>
              <li>
                <strong>Global configuration:</strong> It can be tricky to
                render several Monaco instances per page, each with a slightly
                different configuration, a problem that could be solved with
                CodeMirror Editor.
              </li>
              <li>
                <strong>Placeholder text:</strong> There has been a
                long-standing open issue with Monaco requesting a feature to
                enable a placeholder or default value. Placeholder text feature
                is inbuilt within CodeMirror Editor.
              </li>
              <li>
                <strong>Code cleanliness:</strong> Code written with CodeMirror
                is much more short and consise compared to Monaco Editor.
              </li>
            </ul>
            <br />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "400" }}>
              Challenges faced and key benefits:
            </h2>
            <span>
              During the migration from Monaco Editor to CodeMirror, Sourcegraph
              faced the challenge of CodeMirror 6 being relatively new,
              resulting in a growing community and the need for
              self-development, sponsoring specific features, and relying on
              community support to address challenges. The migration brought
              significant benefits for Sourcegraph as the user experience on
              their website improved with CodeMirror, which better suited their
              needs and was easier to maintain. Additionally, Sourcegraph was
              able to actively contribute to the CodeMirror community,
              leveraging the support and collaboration of the community members.
            </span>
            <br />
            <h1
              id="section4"
              style={{
                color: themeStyles.col02.color,
                paddingTop: "40px",
                fontSize: "20px",
                fontFamily: themeStyles.font,
                fontWeight: "500",
                marginBottom: "0.5rem",
              }}
            >
              Replit
            </h1>

            <span>
              Replit, an online coding platform, recently migrated from Monaco
              Editor to CodeMirror for their code editor component.
            </span>

            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                marginTop: "1rem",
              }}
            >
              Reasons for migration:
            </h2>
            <ul
              style={{ listStyleType: "bullet", marginInlineStart: "1.2rem" }}
            >
              <li>
                <strong>Feature Porting:</strong> The migration from Monaco to
                CodeMirror involved implementing numerous functionalities from
                scratch, including keyboard shortcuts, Vim/Emacs keybindings,
                observation mode, threads, Codex, and more.
              </li>
              <li>
                <strong>Improved Performance and Retention:</strong>{" "}
                CodeMirror&apos;s enhanced performance contributed to improved
                retention rates for Replit, resulting in a better user
                experience on the platform.
              </li>
              <li>
                <strong>Flexibility and Customization:</strong>{" "}
                CodeMirror&apos;s minimalist and modular approach allowed Replit
                to customize and build exactly what they needed by adding and
                configuring various components, providing greater flexibility
                compared to Monaco.
              </li>
            </ul>
            <br />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "400" }}>
              Challenges faced and key benefits:
            </h2>
            <span>
              The migration from Monaco to CodeMirror presented Replit with
              various challenges. CodeMirror was relatively newer and in beta,
              which meant working with a smaller community and dealing with
              potential bugs. Replit had to ensure a seamless transition to
              CodeMirror without disrupting the familiarity of Monaco Editor for
              their users. The migration process itself took several months and
              required significant effort to port over features and maintain a
              consistent user experience. Despite these challenges, the
              migration brought significant benefits. CodeMirror improved
              Replit&apos;s overall performance, leading to better user
              retention rates and a smoother coding experience. The modular
              nature of CodeMirror provided Replit with more flexibility and
              customization options, allowing them to tailor the code editor to
              their specific needs. Additionally, Replit actively contributed to
              the CodeMirror community by collaborating with the community
              support to address bugs and sponsor feature developments.{" "}
            </span>
          </div>
        </p>
      </div>
      <div style={{ marginInlineEnd: "10rem" }}>
        <AnchorBar
          margin={"10px"}
          features={[
            { anchor: "#section1", heading: "Outcome" },
            { anchor: "#section2", heading: "What next" },
            { anchor: "#section3", heading: "SourceGraph" },
            { anchor: "#section4", heading: "Replit" },
          ]}
          giveMarginLeft={true}
        />
      </div>
    </>
  );
};
export default MainConclusion;
