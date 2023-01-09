import NavBar from "./../components/NavBar/NavBar";
import ItemListContainer from "./../components/ItemListContainer/ItemListContainer";
import ItemDetail from "../components/ItemListContainer/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryID" element={<ItemListContainer />} />
        <Route path="/item/:itemID" element={<ItemDetail />} />

        <Route path="*" element={<h1>404: Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
