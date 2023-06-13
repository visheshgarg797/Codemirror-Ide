"use client";
import React, { useState, useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../components/themeProvider";
import Button from "../../components/button";
import Left from "../../components/left";
import Navbar from "../../components/navbar";
import MainEditor from "../../components/mainEditor";
import Footer from "../../components/footer";
export default function Home() {
  const { theme, getThemeStyles } = useContext(ThemeContext);
  const themeStyles = getThemeStyles();
  return (
    <div
      style={{
        backgroundColor: themeStyles.col02.backgroundColor,
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Navbar />
      <Left />
      <MainEditor />
      <Footer />
    </div>
  );
}
