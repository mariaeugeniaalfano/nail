import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import Item from "./Item";
import Flex from "../Flex/Flex";

const boton = {
  display: "flex",
  margin: "10px",
  border: "none",
  backgroundColor: "#d9dad6",
  borderRadius: "20px",
  padding: "10px",
  justifyContent: "center",
  maxWidth: "auto",
  cursor: "pointer",
};

const centrado = {
  margin: "auto",
};

export default function ItemDetail() {
  const { productsCart, setProductsCart } = useContext(Context);
  const [producto, setProducto] = useState([]);
  let { itemID } = useParams();

  useEffect(() => {
    getItem(itemID);
  }, [itemID]);

  const getItem = (id) => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setProducto({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => {
        alert("Ocurrió un error al obtener el producto");
        console.log("Error getting document:", error);
      });
  };

  const AddCartProduct = (producto) => {
    if (productsCart.find((item) => item.id === producto.id)) {
      alert("El producto ya se encuentra en el carrito");
      return;
    }
    setProductsCart([...productsCart, producto]);
    alert("Producto agregado al carrito");
  };

  return (
    <Flex>
      <div>
        <h1 style={centrado}>Detalle del Producto</h1>
        <Item style={centrado} props={producto} />
        <span style={boton} onClick={() => AddCartProduct(producto)}>
          Agregar al carrito 🛒
        </span>
        <Link style={boton} to={`/`}>
          Volver
        </Link>
      </div>
    </Flex>
  );
}
