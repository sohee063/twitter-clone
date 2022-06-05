import React from "react";
import { Col, Row } from "react-bootstrap";

const Contactitem = ({ item }) => {
  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZK4b4nIT5pnHFVc642qggZeLiRyYlA7YJA&usqp=CAU"
        />
      </Col>
      <Col lg={11}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default Contactitem;
