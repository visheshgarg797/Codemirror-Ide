import React from "react";
import { useCustomTheme } from "@/context/useThemeHook";

const CustomSuggestionsComponent = ({ items }) => {
  const { themeStyles } = useCustomTheme();
  return (
    <ul
      class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      style={{
        backgroundColor: themeStyles.col01.backgroundColor,
        color: themeStyles.col01.color,
      }}
    >
      {items?.map((item, index) => {
        return (
          <li
            className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
            style={{
              backgroundColor: themeStyles.col01.backgroundColor,
              color: themeStyles.col01.color,
            }}
            key={index}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default CustomSuggestionsComponent;
