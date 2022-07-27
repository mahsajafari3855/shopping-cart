import React, { useContext } from "react";
import { useParams } from "react-router-dom";
//context
import { ProductsContext } from "../context/ProductContextProvider";

function ProductDetails({ id }) {
  // const id=props.matches.params.id;
  const params = useParams();
  console.log(params);
  const data = useContext(ProductsContext);
  const product = data[params.id - 1];
  const { title, price, discription, image, category } = product;

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p> {price}</p>

        <p>{discription}</p>
        <p> {category}</p>
      </div>
    </div> 
  );
}

export default ProductDetails;
