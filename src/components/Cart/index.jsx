import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import Flex from "../Flex/Flex";

const StyleImg = {
  padding: "5px",
  borderRadius: "50%",
  width: "100px",
  height: "100px",
  margin:"30px"
};

const containerItem = {
  display: 'flex',
  fontSize: '8px',
  color:"grey",
  alignItems:"center"
}

const title = {
 fontSize:"2rem",
 display:"flex",
justifyContent:"center"
}

const estiloBoton ={
  display: "flex",
  margin: "10px",
  border: "none",
  backgroundColor: "#d9dad6",
  borderRadius: "20px",
  padding: "10px",
  justifyContent: "center",
  maxWidth: "auto",

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
    <Flex>
      <div >
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
        <Link style={estiloBoton} to={`/`}>Volver</Link>
        <button style={estiloBoton}
          onClick={() => {
            finishBuy();
          }}
        >
          Comprar
        </button>
      </div>
    </Flex>
  );
};

export default Cart;
