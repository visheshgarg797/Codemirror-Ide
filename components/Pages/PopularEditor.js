"use client";
import React from "react";
import { useCustomTheme } from "@/context/useThemeHook";
import Image from "next/image";
import popularEditors from "../images/popularEditors.png";
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
          Popular Editors{" "}
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
              marginTop: "0rem",
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
              Companies Using Codemirror
            </h1>
            Codemirror is being used by Github , WordPress , Dropbox Paper ,
            Mozilla , Replit and many companies are shifting to codemirror from
            Monaco and Ace . CodeMirror is a widely adopted and highly regarded
            code editor component that has gained popularity among various
            companies and platforms.
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
              Companies using Monacco-Editor
            </h1>
            Monacco is popular because it is used by Microsoft . Salesforce and
            Azure are the others using it . It was very popular in recent past
            but it has some issues like no stable version and lack of features
            and bulky size .
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
              Companies using Ace
            </h1>
            Ace is stable editor but getting unpopular as it is lacking in
            latest features . It is being used by Cloud9 IDE , Brackets ,
            NetBeans . There has been a shift from Ace to Monaco and now to
            Codemirror in case of popularity and usage among companies .
            <br />
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
              npm Download trends
            </h1>
            Below image shows downloads trend of 2020 , it is clearly visible
            Monacco has most downloads in less years .
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
            <br />
            These are the downloads of past 1 year , we can clearly see
            Codemirror has surpress other two editors .
            <Image
              src={popularEditors}
              style={{ marginTop: "1rem" }}
              alt="Popular editors trend"
            />
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
              What to see in Editor ?
            </h1>
            While considering a code editor for selection, we give priority to
            the needed features, stability, and the availability of
            documentation for adding new features or resolving existing issues.
            In our rigorous evaluation process, we considered CodeMirror,
            Monaco, Orion, Theia, and Ace as the most popular choices used in
            the industry. Each editor brought its unique strengths and
            weaknesses to the table, leading us to narrow down our options as
            Theia being a lot bulky compared to all other editors and Orion not
            having good documentation. Ultimately, we opted to compare
            CodeMirror, Monaco, and Ace, focusing on crucial features such as
            multi-line and single-line editing, syntax highlighting, error
            visualization, auto-completion, and resizing capabilities. We
            identified the following weaknesses in our current editor, Sprinklr
            Monaco editor, which drove our evaluation:
            <ol style={{ fontStyle: "oblique" }}>
              <li>1) Missing Bidirectional support</li>
              <li>2) No option for multiple theme editors on a single page</li>
              <li>3) Dynamic length editor</li>
              <li>4) Drag and Drop file support </li>
            </ol>
            <br />
          </div>
        </p>
      </div>
      <AnchorBar
        margin={"10px"}
        features={[
          { anchor: "#section1", heading: "Companies using Codemirror" },
          {
            anchor: "#section2",
            heading: "Companies using Monacco",
          },
          { anchor: "#section3", heading: "Companies using Ace" },
          { anchor: "#section4", heading: "npm trends" },
          { anchor: "#section5", heading: "Wht else to see ?" },
        ]}
      />
    </>
  );
};

export default PopularEditor;
