import React from "react";
import { NavLink } from "react-router-dom";
import CardWidget from "./CardWidget/CardWidget";

function NavBar() {
  const styleNavBar = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
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
          <NavLink to="/"> Home </NavLink>
        </li>
        <li style={styleLi}>
          <NavLink to="/category/glue">Press-On Glue</NavLink>
        </li>
        <li style={styleLi}>
          <NavLink to="/category/press">Press-On Stick</NavLink>
        </li>
        <li style={styleLi}>
          <NavLink to="#uso">Modo de uso</NavLink>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;
