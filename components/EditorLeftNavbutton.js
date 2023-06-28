"use client";
import { useRouter } from "next/navigation";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import COMPONENT_CONSTANTS from "./ComponentConstants";

const EditorLeftNavButton = (props) => {
  const { themeStyles } = useCustomTheme();
  const { push } = useRouter();
  const pathname = usePathname();
  const { updateEditorMode } = useCustomEditorMode();

  const path = useMemo(() => props.path, []);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
    if (path !== "editor") {
      push(path);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    updateEditorMode(option.value);
    setIsOpen(!isOpen);
  };

  return (
    <>
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
      <div className="text-left">
        {isOpen && (
          <ul>
            {COMPONENT_CONSTANTS.EDITOR_MODE_OPTIONS.map((option) => (
              <li
                key={option.value}
                className={themeStyles.classLnb}
                style={{
                  cursor: "pointer",
                  color:
                    props.path == pathname
                      ? themeStyles.col03.color
                      : themeStyles.col01.color,
                  width: "20rem",
                  fontFamily: themeStyles.font,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                  height: "3rem",

                  borderStartEndRadius: "20px",
                  borderEndEndRadius: "20px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                }}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default EditorLeftNavButton;
