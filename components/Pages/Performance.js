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
import COMPONENT_CONSTANTS from "../ComponentConstants";
import { Direction } from "@/constants/Direction";
import { useCustomDirection } from "@/context/useDirectionHook";

const MainPerformance = () => {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();
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
            <div>
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
                Size Comparison
              </h1>
              <table id="section1" className="min-w-full mt-5">
                <thead
                  className="border-b"
                  style={{ backgroundColor: themeStyles.col01.backgroundColor }}
                >
                  <tr>
                    <th
                      scope="col"
                      style={{
                        color: themeStyles.col02.color,
                      }}
                      className="text-m font-large text-gray-900 px-6 py-3"
                    >
                      TYPE
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: themeStyles.col02.color,
                      }}
                      className="text-m font-large px-6 py-3 text-left"
                    >
                      Basic Monaco Editor
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: themeStyles.col02.color,
                      }}
                      className="text-m font-large px-6 py-3 text-left"
                    >
                      Codemirror Editor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    key={0}
                    className="border-b transition duration-300 ease-in-out hover:bg-gray-400"
                    style={{
                      backgroundColor: themeStyles.col02.backgroundColor,
                    }}
                  >
                    <td
                      className=" py-4 whitespace-nowrap text-sm font-medium"
                      style={{
                        color: themeStyles.col02.color,
                        paddingLeft: "0.25rem",
                      }}
                    >
                      Unpacked Size
                      <br />
                    </td>

                    <td
                      className="py-2 whitespace-nowrap text-sm font-medium"
                      style={{
                        paddingLeft: direction === Direction.LTR ? "7%" : "0%",
                        paddingRight:
                          direction === Direction.RTL ? "13%" : "0%",
                        color: themeStyles.col02.color,
                      }}
                    >
                      {" "}
                      87MB{" "}
                    </td>
                    <td
                      className="py-2 whitespace-nowrap text-sm font-medium"
                      style={{
                        paddingLeft: direction === Direction.LTR ? "5%" : "0%",
                        paddingRight:
                          direction === Direction.RTL ? "12%" : "0%",
                        color: themeStyles.col02.color,
                      }}
                    >
                      735KB
                    </td>
                  </tr>

                  <tr
                    key={1}
                    className="border-b transition duration-300 ease-in-out hover:bg-gray-400"
                    style={{
                      backgroundColor: themeStyles.col02.backgroundColor,
                    }}
                  >
                    <td
                      className=" py-4 whitespace-nowrap text-sm font-medium"
                      style={{
                        color: themeStyles.col02.color,
                        paddingLeft: "0.25rem",
                      }}
                    >
                      Gzip Size
                      <br />
                    </td>
                    <td
                      className="py-2 whitespace-nowrap text-sm font-medium"
                      style={{
                        paddingLeft: direction === Direction.LTR ? "7%" : "0%",
                        paddingRight:
                          direction === Direction.RTL ? "13%" : "0%",
                        color: themeStyles.col02.color,
                      }}
                    >
                      935KB
                    </td>
                    <td
                      className="py-2 whitespace-nowrap text-sm font-medium"
                      style={{
                        paddingLeft: direction === Direction.LTR ? "5%" : "0%",
                        paddingRight:
                          direction === Direction.RTL ? "12%" : "0%",
                        color: themeStyles.col02.color,
                      }}
                    >
                      186KB
                    </td>
                  </tr>
                </tbody>
              </table>

              <br />
              <span style={{ display: "flex", marginTop: "1rem" }}>
                <Image
                  src={bundleAnalyzer2}
                  alt="Bundle analyzer 2"
                  style={{ marginInlineEnd: "2%", width: "49%" }}
                />
                <Image
                  src={bundleAnalyzer3}
                  alt="Bundle analyzer 3"
                  style={{ width: "49%" }}
                />
              </span>
            </div>
            <br /> <br />
            <span style={{ textAlign: "justify" }}>
              The Monaco Editor NPM package has an unpacked size of
              approximately 87MB, which is quite large compared to other text
              editors like CodeMirror. CodeMirror has a much smaller size, with
              a stat size of around 1MB. Additionally, CodeMirror offers a
              plugin option, which means that we can import only the
              dependencies that we need for our editor, making it more
              lightweight and customizable.While the Monaco Editor is a powerful
              and feature-rich text editor, its large size can be a concern for
              some projects. CodeMirror, on the other hand, is a lightweight
              alternative that offers many of the same features as the Monaco
              Editor. Its plugin system allows developers to pick and choose the
              features they need, making it a more customizable option.In
              summary, while the Monaco Editor is a great choice for projects
              that require a powerful and feature-rich text editor, its large
              size may not be suitable for all projects. CodeMirror, with its
              smaller size and plugin system, is a more lightweight and
              customizable alternative that may be a better fit for some
              projects.
            </span>
            <br /> <br />
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
            is ~200kB. Monaco-Editor Production build size is more than
            Codemirror-Editor and the reduced size helps improve performance.
          </div>
        </p>
      </div>
      <AnchorBar
        margin={"10px"}
        features={[
          {
            anchor: "#section1",
            heading: "Size Comparison",
          },

          { anchor: "#section2", heading: "Production size build comparision" },
        ]}
      />
    </>
  );
};

export default MainPerformance;
