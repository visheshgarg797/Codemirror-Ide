"use client";
import React, { useState } from "react";
import { useCustomTheme } from "../context/useThemeHook";

const MainIntro = () => {
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
        Introduction{" "}
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
        CodeMirror 6 is a versatile text editor implemented in JavaScript for
        the browser. It is specialized for editing code and comes with a number
        of language modes and addons used for more advanced editing
        functionalities. In this article, we will discuss how to build a code
        editor using CodeMirror 6's unique API. The library supports browsers up
        from Internet Explorer 11 (with some polyfills). CodeMirror 6 is
        published as a set of NPM packages under the @codemirror scope, and each
        package exposes ECMAScript and CommonJS modules. To use them in the
        browser, we need to use some kind of bundler or loader. In this
        tutorial, we will use npm to install the CodeMirror6 packages and create
        a new project. We will then create the main editor file, editor.js, and
        add the necessary code to create a functional code editor. CodeMirror 6
        supports CSS, C++, HTML, Java, JavaScript, JSON, Markdown, Python, Rust,
        and XML. If your language is not listed above, you may still find a
        solution there. To add custom language integration and custom
        autocomplete to CodeMirror 6, you can follow these steps: Create a
        language package for your custom language by implementing a parser,
        which is used for highlighting but also provides the metadata for
        autocompletion 1 . Use the @codemirror/autocomplete package to provide
        functionality for displaying input suggestions in the editor 2 . Connect
        your completion source to the editor using the override option 2 . Pass
        your custom fields as an object mapping to serialize them 3 . If you
        want to enrich your code editor experience in your browser application
        by using LSP to try to autocomplete what the user would like to type,
        you can use Typescript LSP 4 . You can also configure a basic mixed HTML
        parser with autocomplete by importing the necessary packages and
        configuring the parser
      </p>
    </div>
  );
};
export default MainIntro;
