import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, setProductItem }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
    setProductItem(item);
  };
  return (
    <div className="productcard-area" onClick={showDetail}>
      <img className="img" src={item?.img} />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
