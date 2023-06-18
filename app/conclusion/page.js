"use client";
import React from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import BasicLayout from "../../components/basicLayout";
import MainConclusion from "../../components/mainConclusion.js";

export default function Home() {
  const { direction } = useCustomDirection();
  if (direction === "LeftToRight") {
    return (
      <div dir="ltr">
        <BasicLayout>
          <MainConclusion />
        </BasicLayout>
      </div>
    );
  } else {
    return (
      <div dir="rtl">
        <BasicLayout>
          <MainConclusion />
        </BasicLayout>
      </div>
    );
  }
}
