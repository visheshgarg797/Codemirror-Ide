"use client";
import React from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import BasicLayout from "../../components/basicLayout";
import MainEditor from "../../components/mainEditor";
export default function Home() {
  const { direction } = useCustomDirection();
  if (direction === "LeftToRight") {
    return (
      <div dir="ltr">
        <BasicLayout>
          <MainEditor />
        </BasicLayout>
      </div>
    );
  } else {
    return (
      <div dir="rtl">
        <BasicLayout>
          <MainEditor />
        </BasicLayout>
      </div>
    );
  }
}
