import React from "react";

function Flex(props) {
  const styleFlex = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    backgroundColor: "rgba(000, 000, 000, 0.3)",
    color: "white",
  };

  return <div style={styleFlex}>{props.children}</div>;
}

export default Flex;
