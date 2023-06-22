"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { usePathname } from "next/navigation";
import constants from "@/utils/constants";

export default function LeftNavButton(props) {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <button
      onClick={() => push(props.href)}
      className={themeStyles.classLnb}
      style={{
        color:
          props.path == pathname
            ? themeStyles.col03.color
            : themeStyles.col01.color,
        width: "20rem",
        fontFamily: themeStyles.font,
        fontWeight: "700",
        marginTop: "5px",
        borderTopRightRadius:
          direction === constants.LEFT_TO_RIGHT ? "50px" : "0px",
        borderBottomRightRadius:
          direction === constants.LEFT_TO_RIGHT ? "50px" : "0px",
        borderTopLeftRadius:
          direction === constants.LEFT_TO_RIGHT ? "0px" : "50px",
        borderBottomLeftRadius:
          direction === constants.LEFT_TO_RIGHT ? "0px" : "50px",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      }}
    >
      {props.index}
    </button>
  );
}
