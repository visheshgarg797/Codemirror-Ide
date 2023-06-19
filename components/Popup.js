import React from "react";

const Popup = ({ position, selection }) => {
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
    // <div
    //   style={{
    //     height: "100px",
    //     width: "100px",
    //     position: "absolute",
    //     top: position.y + 5,
    //     left: position.x - 18,
    //     color: "black",
    //     zIndex: "10",
    //     backgroundColor: "white",
    //     padding: "10px",
    //     border: "1px solid black",
    //     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    //   }}
    // >
    //   <div
    //     style={{
    //       position: "absolute",
    //       width: "0",
    //       height: "0",
    //       borderLeft: "10px solid transparent",
    //       borderRight: "10px solid transparent",
    //       borderBottom: "10px solid #fff",
    //       top: "-10px",
    //       left: "50%",
    //       transform: "translateX(-50%)",
    //     }}
    //   >
    //     {selection}
    //     {/* Add more menu options as needed */}
    //   </div>
    // </div>
    <div style={divStyle}>
      {selection}
      <div style={arrowStyle}></div>
    </div>
  );
};

export default Popup;
