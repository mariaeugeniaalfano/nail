import React from "react";
import Flex from "../Flex/Flex";
import Item from "./Item";
import { Link } from "react-router-dom";

export default function ItemList(props) {
  return (
    <div className="itemlist">
      <Flex>
        {props.listaProductos.map((product) => (
          <>
            <Item props={product} />
            <Link to={`/item/${product.id}`}>Ver Producto</Link>
          </>
        ))}
      </Flex>
    </div>
  );
}
