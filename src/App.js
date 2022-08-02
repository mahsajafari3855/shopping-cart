import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Store from "./components/Store";
import Navbar from "./components/Navbar";
import ShopCart from "./components/ShopCart";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import ProductDetails from "./components/ProductDetails";

function App(props) {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Store />} />
            <Route
              path="/products/:id"
              element={<ProductDetails />}
            />

            <Route path="/products" element={<Store />} />
            <Route path="/*" element={<Navigate to="/products" />} />
            <Route path="/cart" element={<ShopCart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
