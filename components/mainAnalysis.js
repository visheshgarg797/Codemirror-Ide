"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";

export default function MainAnalysis() {
  const { themeStyles } = useCustomTheme();
  return (
    <div
      className="main-division p-5 pb-70 mt-2 mb-5"
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        marginLeft: "390px",
        marginRight: "130px",
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
        Analysis and Comparison
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
        Installation React has been designed from the start for gradual
        adoption. You can use as little or as much React as you need. Whether
        you want to get a taste of React, add some interactivity to an HTML
        page, or start a complex React-powered app, this section will help you
        get started. Installation React has been designed from the start for
        gradual adoption. You can use as little or as much React as you need.
        Whether you want to get a taste of React, add some interactivity to an
        HTML page, or start a complex React-powered app, this section will help
        you get started. In this chapter How to start a new React project How to
        add React to an existing project How to set up your editor How to
        install React Developer Tools Try React You don’t need to install
        anything to play with React. Try editing this sandbox! App.js Download
        Reset Fork 1 2 3 4 5 6 7 8 You can edit it directly or open it in a new
        tab by pressing the “Fork” button in the upper right corner. Most pages
        in the React documentation contain sandboxes like this. Outside of the
        React documentation, there are many online sandboxes that support React:
        for example, CodeSandbox, StackBlitz, or CodePen. Try React locally To
        try React locally on your computer, download this HTML page. Open it in
        your editor and in your browser! Start a new React project If you want
        to build an app or a website fully with React, start a new React
        project. Add React to an existing project If want to try using React in
        your In this chapter How to start a new React project How to add React
        to an existing project How to set up your editor How to install React
        Developer Tools Try React You don’t need to install anything to play
        with React. Try editing this sandbox! App.js Download Reset Fork 1 2 3 4
        5 6 7 8 You can edit it directly or open it in a new tab by pressing the
        “Fork” button in the upper right corner. Most pages in the React
        documentation contain sandboxes like this. Outside of the React
        documentation, there are many online sandboxes that support React: for
        example, CodeSandbox, StackBlitz, or CodePen. Try React locally To try
        React locally on your computer, download this HTML page. Open it in your
        editor and in your browser! Start a new React project If you want to
        build an app or a website fully with React, start a new React project.
        Add React to an existing project If want to try using React in your
        existing app or a website, add React to an existing project. Next steps
        Head to the Quick Start guide for a tour of the most important React
        concepts you will encounter every day.
      </p>
    </div>
  );
}
