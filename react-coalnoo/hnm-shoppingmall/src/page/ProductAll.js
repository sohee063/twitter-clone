import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";

const ProductAll = ({ setProductItem }) => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    let url = `http://localhost:3004/products`;
    let reponse = await fetch(url);
    let data = await reponse.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard
                item={menu}
                setProductItem={setProductItem}
                productList={productList}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
