import "./App.css";
import { AppRoute } from "./router/AppRoute";
import { Context } from "./context/Context";
import { useState } from "react";

function App() {
  const [productsCart, setProductsCart] = useState([]);
  return (
    <Context.Provider value={{ productsCart, setProductsCart }}>
      <AppRoute />
    </Context.Provider>
  );
}

export default App;
