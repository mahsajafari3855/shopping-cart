import React, { useContext } from "react";
//component
import Cart from "./shared/Cart";
//context
import { CartContext } from "../context/CartContextProvider";

function ShopCart(props) {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ShopCart;
