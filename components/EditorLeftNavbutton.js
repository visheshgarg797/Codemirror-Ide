"use client";
import { useRouter } from "next/navigation";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import { Direction } from "@/constants/Direction";
import COMPONENT_CONSTANTS from "./ComponentConstants";

const EditorLeftNavButton = (props) => {
  const { themeStyles } = useCustomTheme();
  const { push } = useRouter();
  const pathname = usePathname();
  const { updateEditorMode } = useCustomEditorMode();
  const { direction } = useCustomDirection();

  const path = useMemo(() => props.path, []);

  const handleCallBack = useCallback(() => {
    if (path !== "editor") {
      push(path);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
    handleCallBack();
  };

  const handleOptionClick = (option) => {
    updateEditorMode(option.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="">
        <div
          className={`flex items-center justify-between px-4 py-2 cursor-pointer select-none text-black pl-5 hover:bg-gray-100 rounded-2xl rounded-${
            direction === Direction.LTR ? "l" : "r"
          }-none`}
          onClick={() => handleClick()}
          style={{
            color:
              props.path == pathname
                ? themeStyles.col03.color
                : themeStyles.col01.color,
          }}
        >
          <span>{props.index}</span>
          <svg
            className={`w-4 h-4 transition-transform transform ${
              isOpen ? "rotate-90" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} `}>
          {COMPONENT_CONSTANTS.EDITOR_MODE_OPTIONS.map((item) => (
            <div
              key={item.value}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700 pl-5 rounded-2xl rounded-${
                direction === Direction.LTR ? "l" : "r"
              }-none`}
              // style={{
              //   color:
              //     props.path == pathname
              //       ? themeStyles.col03.color
              //       : themeStyles.col01.color,
              // }}
              onClick={() => handleOptionClick(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorLeftNavButton;
