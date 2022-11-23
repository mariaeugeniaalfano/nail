import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />,
      <ItemListContainer text="¡Bienvenido a UÑAS!" />
      <p style={{ textAlign: "center" }}>¿Listo para arrelarte las manitos?</p>
    </div>
  );
}

export default App;
