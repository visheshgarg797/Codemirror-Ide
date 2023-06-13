"use client";
import React, { useState, useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../components/themeProvider";
import Button from "../../components/button";
import Left from "../../components/left";
import Navbar from "../../components/navbar";
import MainAnalysis from "../../components/mainAnalysis";
import Footer from "@/components/footer";
export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
      <MainAnalysis />
      <Footer />
    </div>
  );
}
