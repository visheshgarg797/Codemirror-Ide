import React from "react";
import { useCustomTheme } from "@/context/useThemeHook";
import { Theme_Name } from "@/constants/ThemeName";
import GlobalThemeStyles from "./globalThemeNames";
import { FaGithub } from "react-icons/fa";

const GitHubButton = () => {
  const { themeStyles } = useCustomTheme();
  return (
    <a
      href="https://github.com/visheshgarg797/Codemirror-Ide"
      style={{
        marginLeft: "20px",
        color:
          themeStyles.theme === Theme_Name.DARK_MODE
            ? GlobalThemeStyles[0].col01.color
            : GlobalThemeStyles[1].col01.color,
      }}
    >
      <FaGithub size={"43px"} />
    </a>
  );
};

export default GitHubButton;
