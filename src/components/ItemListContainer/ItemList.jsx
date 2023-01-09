import React from "react";
import Flex from "../Flex/Flex";
import Item from "./Item";
import { Link } from "react-router-dom";

export default function ItemList(props) {

    const boton={
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      padding:"15px",
      borderRadius:"100%",

  }
  return (
    <div className="itemlist">
      <Flex>
        {props.listaProductos.map((product) => (
          <>
            <Item props={product} />
            <Link to={`/item/${product.id}`} style={boton}>VER</Link>
          </>
        ))}
      </Flex>
    </div>
  );
}
