import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Item from "./Item";

export default function ItemDetail() {
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
        console.log("Error getting document:", error);
      });
  };

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <Item props={producto} />
      <button> Comprar </button>
      <Link to={`/`}>Volver</Link>
    </div>
  );
}