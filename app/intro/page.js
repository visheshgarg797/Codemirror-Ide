"use client";
import React, { useState, useContext } from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import BasicLayout from "../../components/basicLayout";
import MainIntro from "@/components/mainIntro";

export default function Home() {
  const { direction } = useCustomDirection();
  if (direction === "LeftToRight") {
    return (
      <div dir="ltr">
        <BasicLayout>
          <MainIntro />
        </BasicLayout>
      </div>
    );
  } else {
    return (
      <div dir="rtl">
        <BasicLayout>
          <MainIntro />
        </BasicLayout>
      </div>
    );
  }
}
