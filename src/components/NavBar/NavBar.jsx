import React from "react";
import { Link } from "react-router-dom";
import CardWidget from "./CardWidget/CardWidget";

function NavBar() {
  const styleNavBar = {
    backgroundColor: "rgba(000, 000, 000, 0.3)",
    padding: "10px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
  };

  const styleUl = {
    listStyle: "none",
  };

  const styleLi = {
    display: "inline",
    fontSize: "1.5rem",
    padding: "10px",
  };

  const StyleImg = {
    padding: "5px",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
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
          <Link to="/">HOME</Link>
        </li>
        <li style={styleLi}>
          <Link to="/category/glue">Press-On Glue</Link>
        </li>
        <li style={styleLi}>
          <Link to="/category/press">Press-On Stick</Link>
        </li>
        <li style={styleLi}>
          <Link to="/">Modo de uso</Link>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;
