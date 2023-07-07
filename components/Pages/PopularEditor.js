"use client";
import React from "react";
import { useCustomTheme } from "@/context/useThemeHook";
import Image from "next/image";
import AnchorBar from "../Layout/AnchorBar";
const PopularEditor = () => {
  const { themeStyles } = useCustomTheme();
  return (
    <>
      <div
        className="main-division p-5 pb-70 mt-2 mb-5"
        style={{
          backgroundColor: themeStyles.col02.backgroundColor,
          marginInlineStart: "300px",
          marginInlineEnd: "240px",
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
            fontWeight: "500",
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
          <div style={{ color: themeStyles.col02.color }}>
            <div style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              <p>
                While considering a code editor for selection, we give priority
                to the needed features, stability, and the availability of
                documentation for adding new features or resolving existing
                issues. In our rigorous evaluation process, we considered
                CodeMirror, Monaco, Orion, Theia, and Ace as the most popular
                choices used in the industry. Each editor brought its unique
                strengths and weaknesses to the table, leading us to narrow down
                our options as Theia being a lot bulky compared to all other
                editors and Orion not having good documentation. Ultimately, we
                opted to compare CodeMirror, Monaco, and Ace, focusing on
                crucial features such as multi-line and single-line editing,
                syntax highlighting, error visualization, auto-completion, and
                resizing capabilities. We identified the following weaknesses in
                our current editor, Sprinklr Monaco editor, which drove our
                evaluation:
              </p>
              <ol style={{ fontStyle: "oblique" }}>
                <li>1) Missing Bidirectional support</li>
                <li>
                  2) No option for multiple theme editors on a single page
                </li>
                <li>3) Dynamic length editor</li>
                <li>4) Drag and Drop file support </li>
              </ol>
            </div>

            <div style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              <h1
                style={{
                  color: themeStyles.col02.color,
                  paddingTop: "40px",
                  fontSize: "20px",
                  fontFamily: themeStyles.font,
                  fontWeight: "500",
                }}
              >
                Editors used by different companies
              </h1>
              <p>
                {" "}
                Codeirror is being used by Github , WordPress , Dropbox Paper ,
                Mozilla , Replit and many companies are shifting to codemirror
                from Monaco and Ace . While , Monacco is popular because it is
                used by Microsoft . Salesforce and Azure are the others using it
                . Ace is stable editor but getting unpopular as it is lacking in
                latest features . It is being used by Cloud9 IDE , Brackets ,
                NetBeans . There has been a shift from Ace to Monaco and now to
                Codemirror in case of popularity and usage among companies .
              </p>
              <img
                class="float-center ..."
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--r2gPoKKQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ww48jrzrpc2bmw3d0qal.png"
                style={{
                  width: "90%",
                  marginInlineEnd: "1rem",
                  marginTop: "1rem",
                  marginInlineStart: "1.5rem",
                  marginBottom: "1rem",
                }}
              ></img>
              <p>
                Popularity of editors according to npm package usage till 2020
                is shown in the image , monaco was most popular at that time .
                It is clear that codemirror was less popular than monaco and ace
                but the trend started changing and if we see downloads for last
                1 year , codemirror is the most popular and widely used among
                all . We can see that in last 1 year codemirror has most
                downloads among them .
              </p>

              {/* <a href="https://ibb.co/wQQV9QL"><img src="https://i.ibb.co/myykLyB/populareditors.png" alt="populareditors" border="0" /></a> */}
              <img
                class="float-center ..."
                src="https://i.ibb.co/myykLyB/populareditors.png"
                style={{
                  width: "90%",
                  marginInlineEnd: "1rem",
                  marginTop: "1rem",
                  marginInlineStart: "1.5rem",
                  marginBottom: "1rem",
                }}
              ></img>
              <p>
                This change in trend tends towards codemirror to choose as
                editor because most of companies are shifting towards it and it
                is having stable version as it has Codemirror 6.0 . It seems
                like it will have good community to add new features and resolve
                issues in existing features in coming years then rest of them .
              </p>
            </div>
          </div>
        </p>
      </div>
      <AnchorBar
        features={[
          { anchor: "#section1", heading: "heading of section1" },
          { anchor: "#section2", heading: "heading of section2" },
          { anchor: "#section3", heading: "heading of section3" },
          { anchor: "#section4", heading: "heading of section4" },
        ]}
      />
    </>
  );
};

export default PopularEditor;
