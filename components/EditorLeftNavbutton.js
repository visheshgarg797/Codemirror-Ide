"use client";
import { useRouter } from "next/navigation";
import { useCustomTheme } from "../context/useThemeHook";
import { useCustomDirection } from "@/context/useDirectionHook";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useCustomEditorMode } from "@/context/useEditorModeHook";
import { EDITOR_MODES } from "@/constants/EditorModes";

const EditorLeftNavButton = (props) => {
  const { themeStyles } = useCustomTheme();
  const { direction } = useCustomDirection();
  const { push } = useRouter();
  const pathname = usePathname();
  const { editorMode, updateEditorMode } = useCustomEditorMode();

  const path = useMemo(() => props.path, []);

  const options = [
    {
      label: "multiline editor",
      value: EDITOR_MODES.MULTILINE_EDITOR_MODE,
    },
    {
      label: "singleline editor",
      value: EDITOR_MODES.SINGLELINE_EDITOR_MODE,
    },
    {
      label: "resizable editor",
      value: EDITOR_MODES.RESIZABLE_EDITOR_MODE,
    },
  ];

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
          <ul className={themeStyles.classLnb}>
            {options.map((option) => (
              <li
                key={option.value}
                className="text-gray-700 block px-4 py-2 text-sm"
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
