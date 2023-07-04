import React, { useState, useEffect } from "react";
import { useCustomTheme } from "@/context/useThemeHook";
import { GridLoader } from "react-spinners";

const Popup = ({ position, selection, handleOnClick }) => {
  const [additionalKeywords, setAddionalKeywords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Get 10 keywords related to ${selection}`,
        temperature: 0.1,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.5,
        stop: ['"""'],
      }),
    };
    fetch("https://api.openai.com/v1/completions", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const relatedKeywords = data.choices[0].text.trim().split("\n");
        const finalKeywords = relatedKeywords.map((item) => {
          return item.substring(3, item.length);
        });
        setAddionalKeywords(finalKeywords);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const { themeStyles } = useCustomTheme();
  const divStyle = {
    fontSize: "10px",
    marginTop: "20px",
    position: "absolute",
    width: "260px",
    backgroundColor: themeStyles.col04.backgroundColor,
    padding: "10px",
    position: "absolute",
    top: position.y - 5,
    left: position.x - 130,
    zIndex: "10",
    textAlign: "center",
    color: themeStyles.col04.color,
    overflow: "none",
    borderRadius: "0.75rem",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };

  const arrowStyle = {
    height: "0",
    width: "0",
    position: "absolute",
    top: "-10px",
    left: "47.5%",
    transform: "translateX(0%) translateY(-50%) rotate(180deg)",
    borderWidth: "10px",
    borderStyle: "solid",
    borderColor: "black transparent transparent transparent",
  };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (selected) => {
    if (selectedOptions.includes(selected)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== selected));
    } else {
      setSelectedOptions([...selectedOptions, selected]);
    }
  };

  const handleSelectAll = () => {
    setSelectedOptions(additionalKeywords);
  };

  return (
    <div style={divStyle}>
      {loading ? (
        <GridLoader color="white" loading={loading} size={7} />
      ) : (
        <>
          <div
            style={{
              width: "260px",
              paddingRight: "1rem",
              marginTop: "0.5rem",
              textAlign: "left",
            }}
          >
            {additionalKeywords.map((item) => {
              return (
                <button
                  onClick={() => handleSelect(item)}
                  style={{
                    margin: "2px",
                    backgroundColor: selectedOptions.includes(item)
                      ? "#2b8217"
                      : "rgba(255, 255, 255, 0.12)",
                    padding: "4px 10px",
                    borderRadius: "5px",
                    fontSize: "10px",
                    fontFamily: "system ui",
                    alignContent: "normal",
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <br />
          <div className="flex justify-between">
            <button
              onClick={() => handleOnClick(selectedOptions)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-2 py-1"
              style={{ fontSize: "0.7rem", fontFamily: "system ui" }}
            >
              Add selected
            </button>
            <button
              onClick={handleSelectAll}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
              style={{ fontSize: "0.7rem", fontFamily: "system ui" }}
            >
              Select all
            </button>
          </div>
        </>
      )}
      <div style={arrowStyle}></div>
    </div>
  );
};

export default Popup;
