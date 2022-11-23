import React from "react";

function ItemListContainer(Greeting) {
  const styleItem = {
    textAlign: "center",
    padding: "40px",
    margin: "59px",
    borderRadius: "5px",
    backgroundColor: "#E8DAEF",
    color: "#AF7AC5",
    textShadow: "5px 5px 5px #E8F6F3",
  };

  return (
    <div style={styleItem}>
      <h1>{Greeting.text}</h1>
    </div>
  );
}

export default ItemListContainer;
