"use client";
import React from "react";
import { useCustomDirection } from "@/context/useDirectionHook";
import BasicLayout from "../../components/basicLayout";
import MainEditor from "../../components/mainEditor";
import constants from "@/utils/constants";
export default function Home() {
  const { direction } = useCustomDirection();
  if (direction === constants.LEFT_TO_RIGHT) {
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
