import React from "react";
import Flex from "../Flex/Flex";
import Item from "./Item";

export default function ItemList(props) {
  return (
    <div className="itemlist">
      <Flex>
        {props.listaProductos.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            price={product.price}
            description={product.description}
          />
        ))}
      </Flex>
    </div>
  );
}
