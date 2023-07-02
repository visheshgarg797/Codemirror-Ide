"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";

const PopularEditor = () => {
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
        Popular Editors
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
        <div style={{ color: "black" }}>
          <div style={{ fontSize: "1rem", marginBottom: "2rem" }}>
            <p>
              While considering a code editor for selection, we give priority to
              the needed features, stability, and the availability of
              documentation for adding new features or resolving existing
              issues. In our rigorous evaluation process, we considered
              CodeMirror, Monaco, Orion, Theia, and Ace as the most popular
              choices used in the industry. Each editor brought its unique
              strengths and weaknesses to the table, leading us to narrow down
              our options. Ultimately, we opted to compare CodeMirror, Monaco,
              and Ace, focusing on crucial features such as multi-line and
              single-line editing, syntax highlighting, error visualization,
              auto-completion, and resizing capabilities. We identified the
              following weaknesses in our current editor, Sprinklr Monaco
              editor, which drove our evaluation:
            </p>
            <ol style={{ fontStyle: "oblique" }}>
              <li>1) Missing Bidirectional support</li>
              <li>2) No option for multiple theme editors on a single page</li>
              <li>3) Dynamic length editor</li>
              <li>4) Pasting files on drag and drop</li>
            </ol>
            <p>
              After careful consideration, we concluded that CodeMirror emerged
              as the standout choice due to its comprehensive feature set and
              unmatched versatility.
            </p>
          </div>

          <div style={{ fontSize: "1rem", marginBottom: "2rem" }}>
            <ol>
              <li>
                <strong>1) Multi-line Editor:</strong>
                <br />
                All three editors—CodeMirror, Monaco, and Ace—provide robust
                support for multi-line editing, allowing developers to work with
                multiple lines of code effortlessly.
              </li>
              <li>
                <strong>2) Single-line Editor:</strong>
                <br />
                CodeMirror and Monaco both offer single-line editing
                capabilities, while Ace does not have built-in support for this
                feature.
              </li>
              <li>
                <strong>3) Keyword Highlighting:</strong>
                <br />
                CodeMirror, Monaco, and Ace excel in keyword highlighting,
                aiding code readability and comprehension.
              </li>
              <li>
                <strong>4) Bracket Matching:</strong>
                <br />
                All three editors showcase seamless bracket matching
                functionality, simplifying code editing and reducing syntax
                errors.
              </li>
              <li>
                <strong>5)Comments:</strong>
                <br />
                CodeMirror, Monaco, and Ace ensure efficient handling of code
                comments, enhancing code organization and collaboration.
              </li>
              <li>
                <strong>
                  6) Error Highlighting and Syntax Error Visualization:
                </strong>
                <br />
                CodeMirror, Monaco, and Ace provide effective error highlighting
                and visual feedback, enabling developers to spot and rectify
                coding mistakes promptly.
              </li>
              <li>
                <strong>7) Auto-completion Support:</strong>
                <br />
                CodeMirror, Monaco, and Ace offer reliable auto-completion
                capabilities, facilitating faster coding and reducing errors.
              </li>
              <li>
                <strong>8) Callback Support:</strong>
                <br />
                All three editors exhibit strong support for callbacks, allowing
                developers to customize and extend editor functionality as
                needed.
              </li>
              <li>
                <strong>9) Editor Resizing:</strong>
                <br />
                CodeMirror and Ace include built-in editor resizing features,
                offering developers the flexibility to adjust the editor's
                dimensions dynamically. Monaco lacks this capability.
              </li>
              <li>
                <strong>10) Cut, Copy, Paste Support:</strong>
                <br />
                CodeMirror, Monaco, and Ace all provide seamless cut, copy, and
                paste functionality, streamlining code editing tasks.
              </li>
              <li>
                <strong>11) Substring Selection Support:</strong>
                <br />
                CodeMirror and Monaco enable substring selection, while Ace does
                not possess this functionality out of the box.
              </li>
              <li>
                <strong>12) Read-only Editor:</strong>
                <br />
                CodeMirror, Monaco, and Ace support read-only mode, which is
                valuable for displaying code snippets or readonly content.
              </li>
              <li>
                <strong>13) onKeyDown Listener:</strong>
                <br />
                All three editors—CodeMirror, Monaco, and Ace—allow developers
                to listen to keydown events, enabling customized key handling.
              </li>
              <li>
                <strong>14) Themes:</strong>
                <br />
                CodeMirror, Monaco, and Ace boast an extensive collection of
                themes, empowering developers to personalize the editor's
                appearance according to their preferences.
              </li>
              <li>
                <strong>15) Multiple Editors with Different Themes:</strong>
                <br />
                CodeMirror is the only editor among the three that supports
                multiple editors with different themes on the same page.
              </li>
              <li>
                <strong>16) RTL Support:</strong>
                <br />
                CodeMirror provides comprehensive right-to-left (RTL) language
                support, while Monaco lacks this feature. Ace has known issues
                with RTL languages.
              </li>
              <li>
                <strong>17)Custom Language Support:</strong>
                <br />
                CodeMirror and Monaco both offer robust support for creating
                custom language modes, while Ace has fewer resources available
                in this regard.
              </li>
              <li>
                <strong>18)File drag and drop support:</strong>
                <br />
                CodeMirror enables users to drag and drop text files or text
                directly into the CodeMirror editor interface. It then renders
                the code inside the files and, additionally, parses, highlights,
                and displays any errors present in the text. However, Monaco and
                Ace editor lack this feature.
              </li>
            </ol>
          </div>
        </div>
      </p>
    </div>
  );
};

export default PopularEditor;
