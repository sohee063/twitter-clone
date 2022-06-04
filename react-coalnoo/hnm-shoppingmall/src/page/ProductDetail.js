import React from "react";
import { Container, Button } from "react-bootstrap";

const ProductDetail = ({ productItem }) => {
  console.log("나다 디테일", productItem);
  return (
    <Container className="detail-page">
      <div>
        <img src={productItem?.img} />
      </div>
      <div>
        <div>{productItem?.title}</div>
        <div>₩ {productItem?.price}</div>
        <div>{productItem?.choice === true ? "Conscious choice" : ""}</div>
        <div>사이즈선택</div>
        <Button variant="dark">추가</Button>
      </div>
    </Container>
  );
};

export default ProductDetail;
