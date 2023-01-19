import React, { useState, useEffect } from "react";
import { redirect, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Item from "./Item";
import Flex from "../Flex/Flex";
import { hover } from "@testing-library/user-event/dist/hover";


export default function ItemDetail() {
  const [producto, setProducto] = useState([]);
  let { itemID } = useParams();
  const boton = {
    display: "flex",
    margin: "10px",
    border: "none",
    backgroundColor: "#d9dad6",
    borderRadius: "20px",
    padding: "10px",
    justifyContent: "center",
    maxWidth: "auto",
  }

  const centrado ={
   margin:"auto"
  }

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
        alert("Ocurrió un error al obtener el producto")
        console.log("Error getting document:", error);
      });
  };

  const AddCartProduct = (producto) => {
    let productos = [];
    let cartStorage = localStorage.getItem("cart");
    if (cartStorage === null) {
      productos.push(producto);
      localStorage.setItem("cart", JSON.stringify(productos));
    } else {
      productos = JSON.parse(cartStorage);
      productos.push(producto);
      localStorage.setItem("cart", JSON.stringify(productos));
    }
    alert("Producto agregado al carrito")
  };


  return (
    <Flex>
      <div >
        <h1 style={centrado} >Detalle del Producto</h1>
        <Item style={centrado} props={producto} />
        <button style={boton} onClick={() => AddCartProduct(producto)}> Agregar al carrito </button>
        <Link style={boton} to={`/`}>Volver</Link>
      </div>
    </Flex>
  );
}