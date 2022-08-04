import React, { useContext } from "react";
//component
import Cart from "./shared/Cart";
//context
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";

function ShopCart(props) {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <div>
            <p>
              <span>Total Items:{state.itemsCounter}</span>
            </p>
            <p>
              <span>Total Peyment:{state.total}</span>
            </p>
          </div>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "CLEAR",
                })
              }
            >
              CLEAR
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div>
          <p>Check out Successfuly</p>
          <Link to="/products"> By More</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <h3>Want to Bye?</h3>
          <Link to="/products"> Go to Shop</Link>
        </div>
      )}
    </div>
  );
}

export default ShopCart;
