import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import Flex from "../Flex/Flex";
import { Context } from "../../context/Context";

const StyleImg = {
  padding: "5px",
  borderRadius: "50%",
  width: "100px",
  height: "100px",
  margin: "30px",
};

const containerItem = {
  display: "flex",
  fontSize: "8px",
  color: "grey",
  alignItems: "center",
};

const title = {
  fontSize: "2rem",
  display: "flex",
  justifyContent: "center",
};

const estiloBoton = {
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
export const Cart = () => {
  const { productsCart, setProductsCart } = useContext(Context);

  const finishBuy = async () => {
    try {
      const db = getFirestore();
      await setDoc(doc(db, "compras", new Date().valueOf().toString()), {
        productsCart,
      });
      setProductsCart([]);
      alert("Compra realizada con exito");
    } catch (error) {
      alert("Error al realizar la compra");
      console.log("error al realizar la compra: " + error);
    }
  };
  return (
    <Flex>
      <div>
        <span style={title}>Mi carrito de compras:</span>

        {productsCart.length > 0 ? (
          productsCart.map((item) => (
            <div key={item.id}>
              <div style={containerItem}>
                <img style={StyleImg} src={item.img} alt="imagen"></img>
                <h1>{item.title}</h1>
                <h1>{item.category}</h1>
                <h2>{item.price}</h2>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <h1>No hay productos en el carrito</h1>
        )}
        <div>
          {productsCart.length > 0 && (
            <span
              style={estiloBoton}
              onClick={() => {
                finishBuy();
              }}
            >
              Comprar
            </span>
          )}

          <Link to={`/`} style={estiloBoton}>
            Volver
          </Link>
        </div>
      </div>
    </Flex>
  );
};

export default Cart;
