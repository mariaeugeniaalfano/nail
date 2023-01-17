import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import {
  collection,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

export default function ItemListContainer() {
  let { categoryID } = useParams();

  const getItems = () => {
    const db = getFirestore();
    const itemCollection = categoryID
      ? query(collection(db, "items"), where("category", "==", categoryID))
      : collection(db, "items");

    getDocs(itemCollection)
      .then((querySnapshot) => {
        setListaProductos(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => {
        alert("Ocurrió un error al obtener los productos")
        console.log("Error getting documents: ", error);
      });
  };

  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    getItems();
  }, [listaProductos]);

  return <ItemList listaProductos={listaProductos} />;
}