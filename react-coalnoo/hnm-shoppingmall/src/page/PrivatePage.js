import React from "react";
import ProductDetail from "./ProductDetail";
import { Navigate } from "react-router-dom";

const PrivatePage = ({ auth, productItem }) => {
  return auth === true ? (
    <ProductDetail productItem={productItem} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivatePage;
