import React from "react";

const Popup = ({
  position,
  selection,
  selectionText,
  handleOnClick,
  startPos,
}) => {
  const divStyle = {
    marginTop: "20px",
    position: "absolute",
    width: "150px",
    height: "150px",
    backgroundColor: "white",
    padding: "10px",
    position: "absolute",
    top: position.y,
    left: position.x - 70,
    zIndex: "10",
    textAlign: "center",
    color: "black",
    overflow: "none",
    borderRadius: "0.75rem",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };

  const arrowStyle = {
    // marginTop: "9px",
    height: "0",
    width: "0",
    position: "absolute",
    top: "-10px",
    left: "40%",
    transform: "translateX(0%) translateY(-50%) rotate(180deg)",
    borderWidth: "10px",
    borderStyle: "solid",
    borderColor: "black transparent transparent transparent",
  };
  return (
    <div style={divStyle}>
      {selection}
      <button onClick={handleOnClick} className="btn">
        Add text
      </button>
      <div style={arrowStyle}></div>
    </div>
  );
};

export default Popup;
