import React from "react";
import Flex from "../Flex/Flex";
import Item from "./Item";
import { Link } from "react-router-dom";

const boton = {
  borderRadius: "40%",
  backgroundColor: "#d9dad6",
  padding: "30px",
};

export default function ItemList(props) {
  return (
    <div className="itemlist">
      <Flex>
        {props.listaProductos.map((product) => (
          <div key={product.id}>
            <Item props={product} />
            <Link to={`/item/${product.id}`} style={boton}>
              VER
            </Link>
          </div>
        ))}
      </Flex>
    </div>
  );
}
