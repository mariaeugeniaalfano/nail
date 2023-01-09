import React from "react";

const styleCentro = {
  alignItems: "center",
  textAlign: "center",
  color: "black",
  width:"300px"
};

export default function Item({ props }) {
  return (
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
  );
}
