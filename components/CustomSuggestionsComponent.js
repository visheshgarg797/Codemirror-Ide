import React from "react";

const CustomSuggestionsComponent = ({ items }) => {
  return (
    <ul
      style={{ color: "black" }}
      className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
    >
      {items?.map((item, index) => (
        <li
          key={index}
          className="mb-1 text-gray-500 md:text-lg dark:text-gray-400"
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default CustomSuggestionsComponent;
