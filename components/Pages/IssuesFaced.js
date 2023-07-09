"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../../context/useThemeHook";
import AnchorBar from "../Layout/AnchorBar";
import COMPONENT_CONSTANTS from "../ComponentConstants";

const MainIssuesFaced = () => {
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
          Issues faced and how we resolved them{" "}
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
            {COMPONENT_CONSTANTS.ISSUES_FACED.map((item, index) => {
              return (
                <>
                  <h1
                    id={`section${index + 1}`}
                    style={{
                      color: themeStyles.col02.color,
                      paddingTop: "40px",
                      fontSize: "20px",
                      fontFamily: themeStyles.font,
                      fontWeight: "500",
                    }}
                    key={index}
                  >
                    {item.heading}
                  </h1>
                  <span>{item.body}</span>
                </>
              );
            })}
          </div>
        </p>
      </div>
      <AnchorBar
        margin={"10px"}
        features={[
          { anchor: "#section1", heading: "Maintaining multiple themes" },
          {
            anchor: "#section2",
            heading: "Inserting text in editor",
          },
          {
            anchor: "#section3",
            heading: "Grammer integration and error handling",
          },
          { anchor: "#section4", heading: "Triggering suggestions" },
        ]}
      />
    </>
  );
};

export default MainIssuesFaced;
