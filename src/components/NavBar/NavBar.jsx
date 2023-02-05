import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CardWidget from "./../Icons/CardWidget";

import { Context } from "../../context/Context";

const styleNavBar = {
  backgroundColor: "#d9dad6",
  margin: "20px auto",
  maxWidth: "1300px",
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
  padding: "8px",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
};

function NavBar() {
  const { productsCart } = useContext(Context);

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
        <li style={styleLi}>
          <NavLink to="/cart">
            <CardWidget />
          </NavLink>
          <span>({productsCart.length})</span>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
