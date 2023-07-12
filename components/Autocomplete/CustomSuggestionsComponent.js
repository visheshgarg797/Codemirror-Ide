import React, { useState, useEffect } from "react";

const CustomSuggestionsComponent = ({ options, pressedKey }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    pressedKey = pressedKey?.match(/[a-zA-Z]+/);
    if (pressedKey) {
      pressedKey = pressedKey[0];
      if (pressedKey === "ArrowUp") {
        // Up arrow
        const newSelectedIndex =
          selectedIndex === 0 ? options?.length - 1 : selectedIndex - 1;
        setSelectedIndex(newSelectedIndex);
      } else if (pressedKey === "ArrowDown") {
        // Down arrow
        const newSelectedIndex =
          selectedIndex === options?.length - 1 ? 0 : selectedIndex + 1;
        setSelectedIndex(newSelectedIndex);
      } else if (pressedKey === "Enter") {
        setSelectedIndex(0);
      }
    }
  }, [pressedKey]);

  return (
    <div className="relative">
      <ul
        className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded shadow-lg"
        style={{ width: "43.8rem" }}
      >
        {options?.map((option, index) => (
          <li
            key={index}
            className={`px-4 py-2 ${
              index === selectedIndex
                ? "bg-blue-500 text-white"
                : "text-gray-900"
            }`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSuggestionsComponent;
