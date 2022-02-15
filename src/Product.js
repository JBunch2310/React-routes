import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();

  return <h1>Products: {params.id}</h1>;
}

export default Product;
