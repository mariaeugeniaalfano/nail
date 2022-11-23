import React from "react";
import CardWidget from "./CardWidget/CardWidget";

function NavBar() {
  const styleNavBar = {
    backgroundColor: "#E9F7EF ",
    borderBottom: "2px solid #D4EFDF",
    padding: "10px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
  };
  const styleUl = {
    listStyle: "none",
  };

  return (
    <div style={styleNavBar}>
      <img
        src="https://i.ibb.co/Z2QMxp6/logo.png"
        alt="Logo Empresa"
        width="70px"
      />
      <ul style={styleUl}>
        <li>
          <a href="#">Press-On</a>
        </li>
        <li>
          <a href="#">Modo de uso</a>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;
