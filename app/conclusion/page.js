"use client";
import React from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import BasicLayout from "../../components/basicLayout";
import MainConclusion from "../../components/mainConclusion.js";
import constants from "@/utils/constants";
export default function Home() {
  const { direction } = useCustomDirection();
  if (direction === constants.LEFT_TO_RIGHT) {
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
