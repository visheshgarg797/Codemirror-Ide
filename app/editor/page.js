"use client";
import React, { useState, useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../components/themeProvider";
import Button from "../../components/button";
import Left from "../../components/left";
import Navbar from "../../components/navbar";
import MainEditor from "../../components/mainEditor";
import Footer from "../../components/footer";
export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#23272f",
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
