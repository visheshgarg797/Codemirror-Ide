import React, { useState, useEffect } from "react";
import { useCustomTheme } from "@/context/useThemeHook";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Popup = ({ position, selection, handleOnClick, handleDiscardPopup }) => {
  const [additionalKeywords, setAddionalKeywords] = useState([]);
  const [loading, setLoading] = useState(true);
  const { themeStyle } = useCustomTheme();

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Get 12 keywords related to ${selection}`,
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
    width: "280px",
    paddingLeft: "0.5rem",
    paddingBottom: "0.5rem",
    paddingRight: "0.5rem",
    backgroundColor: themeStyles.col04.backgroundColor,
    position: "absolute",
    top: position.y - 5,
    left: position.x - 137,
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
    left: "47%",
    transform: "translateX(0%) translateY(-50%) rotate(180deg)",
    borderWidth: "10px",
    borderStyle: "solid",
    borderColor: `${themeStyles.col04.backgroundColor} transparent transparent transparent`,
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
      <div
        style={{
          width: "280px",
          paddingInlineEnd: "1rem",
          marginTop: "0.5rem",
          textAlign: "left",
        }}
      >
        {loading ? (
          // <SkeletonTheme baseColor="white" highlightColor="white" height="1rem">
          <SkeletonTheme
            baseColor="rgb(248,248,248)"
            highlightColor="rgb(220,220,220)"
          >
            <div className="flex justify-around" style={{ opacity: "0.4" }}>
              <Skeleton width="4rem" height="1.1rem" />
              <Skeleton width="4rem" height="1.1rem" />
              <Skeleton width="4rem" height="1.1rem" />
              <Skeleton width="4rem" height="1.1rem" />
            </div>
            <div className="flex justify-around" style={{ opacity: "0.4" }}>
              <Skeleton width="5.3rem" height="1.1rem" />
              <Skeleton width="5.3rem" height="1.1rem" />
              <Skeleton width="5.3rem" height="1.1rem" />
            </div>
            <div className="flex justify-around" style={{ opacity: "0.4" }}>
              <Skeleton width="4rem" height="1.1rem" />
              <Skeleton width="4rem" height="1.1rem" />
              <Skeleton width="4rem" height="1.1rem" />
              <Skeleton width="4rem" height="1.1rem" />
            </div>
            <div className="flex justify-around" style={{ opacity: "0.4" }}>
              <Skeleton width="5.3rem" height="1.1rem" />
              <Skeleton width="5.3rem" height="1.1rem" />
              <Skeleton width="5.3rem" height="1.1rem" />
            </div>
          </SkeletonTheme>
        ) : (
          <>
            {additionalKeywords.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(item)}
                  style={{
                    margin: "2px",
                    backgroundColor: selectedOptions.includes(item)
                      ? "#3c81f6"
                      : "rgba(255, 255, 255, 0.12)",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    paddingInline: "6px 6px",
                    borderRadius: "5px",
                    fontSize: "0.6rem",
                    fontFamily: "system ui",
                    alignContent: "normal",
                  }}
                >
                  {item}
                </button>
              );
            })}
          </>
        )}
      </div>
      <br />
      <div className="flex justify-between">
        <button
          onClick={handleSelectAll}
          className="text-white font-bold px-1 rounded"
          style={{
            fontSize: "0.7rem",
            fontFamily: "system ui",
            backgroundColor: themeStyles.col04.buttonColor,
          }}
        >
          Select all
        </button>
        <button
          onClick={handleDiscardPopup}
          className="font-bold px-1 rounded"
          style={{
            fontSize: "0.7rem",
            fontFamily: "system ui",
            backgroundColor: themeStyles.col04.buttonColor,
          }}
        >
          Discard Popup
        </button>
        <button
          onClick={() => handleOnClick(selectedOptions)}
          className="text-white font-bold px-1 rounded"
          style={{
            fontSize: "0.7rem",
            fontFamily: "system ui",
            backgroundColor: themeStyles.col04.buttonColor,
          }}
        >
          Add selected
        </button>
      </div>

      <div style={arrowStyle}></div>
    </div>
  );
};

export default Popup;
