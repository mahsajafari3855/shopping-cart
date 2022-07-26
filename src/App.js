import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Store from "./components/Store";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import ProductDetails from "./components/ProductDetails";

function App(props) {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path="/products/:id" element={<ProductDetails {...props}/>} />

          <Route path="/products" element={<Store />} />
          <Route path="*" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;
