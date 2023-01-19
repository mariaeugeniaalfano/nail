import React from "react";
import Flex from "../Flex/Flex";

const styleCentro = {
  margin :"50px"
};

export default function Item({ props }) {
  return (
    <Flex>
    <div style={styleCentro}>
      <div>
        <figure>
          <img src={props.img} alt={`Imagen`} />
        </figure>
      </div>
      <div>
        <div>
          <p>{props.title}</p>
          <p>${props.price}</p>
        </div>

        <div>{props.description}</div>
      </div>
    </div>
    </Flex>
  );
}
