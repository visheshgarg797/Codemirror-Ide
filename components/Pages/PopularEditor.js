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
            <span style={{ textAlign: "justify" }}>
              Codemirror is being used by Github , WordPress , Dropbox Paper ,
              Mozilla , Replit and many companies are shifting to codemirror
              from Monaco and Ace . CodeMirror is a widely adopted and highly
              regarded code editor component that has gained popularity among
              various companies and platforms.
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
              Companies using Monaco-Editor
            </h1>
            <span style={{ textAlign: "justify" }}>
              Monaco is maintained by microsoft and hence was a popular choice.
              However, it losts its popularity because of several major issues.
              e.g. absence of a stable version, fewer features compared to other
              options and bulky size .
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
              }}
            >
              Companies using Ace
            </h1>
            <span style={{ textAlign: "justify" }}>
              Ace is stable editor but getting unpopular as it is lacking in
              latest features . It is being used by Cloud9 IDE , Brackets ,
              NetBeans . There has been a shift from Ace to Monaco and now to
              Codemirror in case of popularity and usage among companies .
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
              }}
            >
              npm Download trends
            </h1>
            <span style={{ textAlign: "justify" }}>
              Below image shows downloads trend of 2020 , it is clearly visible
              Monacco has most downloads in less years .
            </span>
            <br /> <br />
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
            <span style={{ textAlign: "justify" }}>
              These are the downloads of past 1 year , we can clearly see
              Codemirror has surpress other two editors .
            </span>
            <br /> <br />
            <Image
              src={popularEditors}
              style={{ marginTop: "1rem" }}
              alt="Popular editors trend"
            />
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
            heading: "Companies using Monaco",
          },
          { anchor: "#section3", heading: "Companies using Ace" },
          { anchor: "#section4", heading: "npm trends" },
        ]}
      />
    </>
  );
};

export default PopularEditor;
