import React from "react";
import Flex from "../Flex/Flex";
import Item from "./Item";
import { Link } from "react-router-dom";

export default function ItemList(props) {

    const boton={
      borderRadius:"40%",
      backgroundColor:"#d9dad6",
      padding:"30px",

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
