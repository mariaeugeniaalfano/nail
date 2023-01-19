import React from "react";

function Flex(props) {
  const styleFlex = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    color: "black",
    maxWidth:"1300px",
  };

  return <div style={styleFlex}>{props.children}</div>;
}

export default Flex;
