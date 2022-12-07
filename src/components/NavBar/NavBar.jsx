import React from "react";
import { Link } from "react-router-dom";
import CardWidget from "./CardWidget/CardWidget";

function NavBar() {
  const styleNavBar = {
    backgroundColor: "rgba(000, 000, 000, 0.3)",
    borderBottom: "1px dotted #d3d3d3",
    padding: "10px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
  };
  const styleUl = {
    listStyle: "none",
    display: "inline",
  };
  const styleLi = {
    display: "inline",
    color: "black",
    padding: "10px",
  };
  const StyleImg = {
    borderRadius: "50%",
    width: "55x",
    height: "55px",
  };
  return (
    <div style={styleNavBar}>
      <img
        style={StyleImg}
        src="https://i.ibb.co/nMH5S9P/logo.png"
        alt="Logo Empresa"
      />
      <ul style={styleUl}>
        <li style={styleLi}>
          <Link to="/category/glue">Press-On Glue</Link>
        </li>
        <li style={styleLi}>
          <Link to="/category/press">Press-On Stick</Link>
        </li>
        <li style={styleLi}>
          <Link to="#">Modo de uso</Link>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;
