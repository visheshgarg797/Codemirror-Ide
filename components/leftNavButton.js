"use client";
import { useRouter } from "next/navigation";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";

const LeftNavButton = (props) => {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();
  const { push } = useRouter();
  const pathname = usePathname();

  const path = useMemo(() => props.path, []);

  const handleClick = useCallback(() => {
    push(path);
  }, []);

  return (
    <button
      onClick={handleClick}
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
        borderStartEndRadius: "50px",
        borderEndEndRadius: "50px",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      }}
    >
      {props.index}
    </button>
  );
};

export default LeftNavButton;
