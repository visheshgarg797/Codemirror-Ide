"use client";
import React, { useState, useContext } from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import BasicLayout from "../../components/basicLayout";
import MainAnalysis from "../../components/mainAnalysis";
export default function Home() {
  const { direction } = useCustomDirection();
  if (direction === "LeftToRight") {
    return (
      <div dir="ltr">
        <BasicLayout>
          <MainAnalysis />
        </BasicLayout>
      </div>
    );
  } else {
    return (
      <div dir="rtl">
        <BasicLayout>
          <MainAnalysis />
        </BasicLayout>
      </div>
    );
  }
}
