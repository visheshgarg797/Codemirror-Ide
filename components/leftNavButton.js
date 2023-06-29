"use client";
import { useRouter } from "next/navigation";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Direction } from "@/constants/Direction";
import "./style.css";

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
    <div className="space-y-4">
      <div className="">
        <div
          className={`flex items-center justify-between px-4 py-2 cursor-pointer select-none text-black pl-5 hover:bg-gray-100 rounded-2xl rounded-${
            direction === Direction.LTR ? "l" : "r"
          }-none`}
          onClick={() => handleClick()}
          style={{
            fontFamily: "Optimistic Text",
            color:
              props.path == pathname
                ? themeStyles.col03.color
                : themeStyles.col01.color,
          }}
        >
          <span>{props.index}</span>
        </div>
      </div>
    </div>
  );
};

export default LeftNavButton;
