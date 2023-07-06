"use client";
import { useRouter } from "next/navigation";
import { useCustomTheme } from "../../context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Direction } from "@/constants/Direction";
import { Theme_Name } from "@/constants/ThemeName";
import styles from "../style.css";

const LeftNavButton = (props) => {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();
  const { push } = useRouter();
  const pathname = usePathname();

  const path = useMemo(() => props.path, []);

  const handleClick = useCallback(() => {
    push(path);
  }, []);

  // -${
  //   themeStyles.theme === Theme_Name.LIGHT_MODE ? "200 " : "500 "
  // }
  return (
    <div className="space-y-4">
      <div
        className={themeStyles.classLnb2}
        onClick={() => handleClick()}
        style={{
          width: "16rem",
          fontFamily: themeStyles.font,
          fontWeight: "600",
          color:
            props.path == pathname
              ? themeStyles.col03.color
              : themeStyles.col01.color,
          borderStartEndRadius: "50px",
          borderEndEndRadius: "50px",
        }}
      >
        <span>{props.index}</span>
      </div>
    </div>
  );
};

export default LeftNavButton;
