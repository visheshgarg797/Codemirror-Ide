"use client";
import React, { useState } from "react";
import { useCustomTheme } from "./useThemeHook";
import Sidebar from "./Sidebar";
import Navbar from "./navbar";
import Footer from "./footer";
export default function BasicLayout({ children }) {
  const { themeStyles } = useCustomTheme();
  return (
    <>
      <div
        className="min-h-screen relative"
        style={{
          backgroundColor: themeStyles.col02.backgroundColor,
        }}
      >
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </div>
    </>
  );
}
