"use client";
import React, { useState, useContext } from "react";
import DirectionModeContext from "@/context/DirectionModeContext";
import BasicLayout from "../../components/basicLayout";
import MainEditor from "@/components/mainEditor";

export default function Home() {
  const Direction = useContext(DirectionModeContext);
  console.log(Direction);
  if (Direction.directionMode.LeftToRight) {
    return (
      <>
        <div dir="ltr">
          <BasicLayout>
            <MainEditor />
          </BasicLayout>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div dir="rtl">
          <BasicLayout>
            <MainEditor />
          </BasicLayout>
        </div>
      </>
    );
  }
}
