import React from "react";
import { useParams, Link } from "react-router-dom";
import productos from "../../data/data";

export default function Item(props) {
  const styleCentro = {
    alignItems: "center",
    textAlign: "center",
    color: "white",
  };

  let { itemID } = useParams();

  let producto;
  if (itemID !== undefined) {
    producto = productos.find((x) => x.id == itemID);
  }
  let imagen = props?.img ? props.img : producto.img;
  let title = props?.title ? props.title : producto.title;
  let price = props?.price ? props.price : producto.price;
  let description = props?.description
    ? props.description
    : producto.description;

  return (
    <div style={styleCentro}>
      <div>
        <figure>
          <img src={imagen} alt="Placeholder image" />
        </figure>
      </div>
      <div>
        <div>
          <p>{title}</p>
          <p>${price}</p>
        </div>

        <div>{description}</div>
      </div>
      {!itemID ? (
        <Link to={`/item/${props.id}`}>Ver Producto</Link>
      ) : (
        <Link to={`/`}>Volver</Link>
      )}
    </div>
  );
}
