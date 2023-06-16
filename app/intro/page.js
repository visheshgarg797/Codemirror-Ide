"use client";
import React, { useState, useContext } from "react";
import DirectionModeContext from "@/context/DirectionModeContext";
import BasicLayout from "../../components/basicLayout";
import MainIntro from "@/components/mainIntro";

export default function Home() {
  const Direction = useContext(DirectionModeContext);
  console.log(Direction);
  if (Direction.directionMode.LeftToRight) {
    return (
      <>
        <div dir="ltr">
          <BasicLayout>
            <MainIntro />
          </BasicLayout>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div dir="rtl">
          <BasicLayout>
            <MainIntro />
          </BasicLayout>
        </div>
      </>
    );
  }
}
