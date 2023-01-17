import React from "react";

import ItemListContainer from "../ItemListContainer/ItemListContainer";


export const Home = () => {
  const texto ={
    color:"#dad7da",
    textAlign:"center",
    fontSize:"1rem"
  }
  return (
    <div style={texto}>
      <h1>| NAIL |</h1>
      <ItemListContainer />
    </div>
  );
};

export default Home;