"use client";
import React from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import AnchorBar from "../Layout/AnchorBar";
import Image from "next/image";
import performanceAnalysis from "../images/performanceAnalysis.png";
import bundleAnalyzer1 from "../images/bundleAnalyzer1.png";
import bundleAnalyzer2 from "../images/bundleAnalyzer2.png";
import bundleAnalyzer3 from "../images/bundleAnalyzer3.png";
import bundleAnalyzer4 from "../images/bundleAnalyzer4.png";
import bundleAnalyzer5 from "../images/bundleAnalyzer5.png";

const MainPerformance = () => {
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
          Performance Analysis{" "}
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
              Performance Analysis for website
            </h1>
            <Image
              src={performanceAnalysis}
              style={{ marginTop: "1rem" }}
              alt="Performance analysis"
            />
            <div>
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
                Webpack bundle analysis
              </h1>
              <span style={{ display: "flex", marginTop: "1rem" }}>
                <Image
                  src={bundleAnalyzer1}
                  alt="Bundle analyzer 1"
                  style={{ marginInlineEnd: "2%", width: "49%" }}
                />
                <Image
                  src={bundleAnalyzer2}
                  alt="Bundle analyzer 2"
                  style={{ width: "49%" }}
                />
              </span>
            </div>
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
              Codemirror bundle analysis
            </h1>
            <Image
              src={bundleAnalyzer3}
              alt="Codemirror bundle analysis"
              style={{ marginTop: "1rem", width: "100%" }}
            />
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
              Production build size comparision
            </h1>
            <span style={{ display: "flex", marginTop: "1rem" }}>
              <div style={{ width: "49%" }}>
                <span
                  style={{
                    marginBottom: "1rem",
                    fontWeight: 400,
                    fontSize: "1.2rem",
                  }}
                >
                  Basic Monaco Editor
                </span>
                <Image
                  src={bundleAnalyzer4}
                  style={{ height: "32rem" }}
                  alt="Moanco bundle size"
                />
              </div>
              <div style={{ width: "49%" }}>
                <span
                  style={{
                    marginInlineStart: "1rem",
                    marginBottom: "1rem",
                    fontWeight: 400,
                    fontSize: "1.2rem",
                  }}
                >
                  Codemirror Editor
                </span>
                <Image
                  src={bundleAnalyzer5}
                  style={{ height: "32rem", marginInlineStart: "1rem" }}
                  alt="Codemirror bundle size"
                />
              </div>
            </span>
            <br />
            It can be seen from the above images that the bundle size of a basic
            Monaco Editor is ~900kB whereas the bundle size of Codemirror Editor
            is ~200kB. Monacco-Editor Production build size is more than
            Codemirror-Editor and the reduced size helps improve performance.
          </div>
        </p>
      </div>
      <AnchorBar
        margin={"10px"}
        features={[
          { anchor: "#section1", heading: "Website performance analysis" },
          {
            anchor: "#section2",
            heading: "Webpack bundle analysis",
          },
          {
            anchor: "#section3",
            heading: "Codemirror bundle analysis",
          },
          { anchor: "#section4", heading: "Production size build comparision" },
        ]}
      />
    </>
  );
};

export default MainPerformance;
