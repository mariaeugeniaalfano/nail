import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const StyleImg = {
  padding: "5px",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
};

const containerItem = {
  display: 'flex',
  fontSize: '8px',
}

const title = {
}
export const Cart = () => {
  const [cartStorage, setCartStorage] = useState([]);

  const readStorage = () => {
    let cartStorage = localStorage.getItem("cart");
    if (cartStorage !== null) {
      return setCartStorage(JSON.parse(cartStorage));
    }
  };

  useEffect(() => {
    readStorage();
  }, []);

  const finishBuy = async () => {
    try {
      const db = getFirestore();


      let cartStorage = localStorage.getItem("cart");
      await setDoc(doc(db, "compras", new Date().valueOf().toString()), {
        cartStorage
      });
      localStorage.removeItem("cart");
      setCartStorage([]);
      alert("Compra realizada con exito")
    } catch (error) {
      alert("Error al realizar la compra")
      console.log("error al realizar la compra: " + error);
    }

  };
  return (
    <div>
      <span style={title}>Mis carrito de compras:</span>

      {cartStorage.map((item) => (
        <>
          <div style={containerItem}>
            <img style={StyleImg} src={item.img} alt="imagen"></img>
            <h1>{item.title}</h1>
            <h1>{item.category}</h1>
            <h2>{item.price}</h2>
          </div>
          <hr />
        </>

      ))}
      <Link to={`/`}>Volver</Link>
      <button
        onClick={() => {
          finishBuy();
        }}
      >
        Comprar
      </button>
    </div>
  );
};

export default Cart;
