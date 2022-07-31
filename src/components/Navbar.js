
import { Link } from "react-router-dom";
import React, { useContext } from "react";

//context
import { CartContext } from "../context/CartContextProvider";

function Navbar(props) {
  const { state } = useContext(CartContext);
  return (
    <div>
      <div>
        {/* <Link to="/products">Products</Link> */}
        <div>
          <Link to="/cart">
            <p>Your Basket: {state.itemsCounter}</p>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
