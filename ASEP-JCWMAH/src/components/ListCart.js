import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Table, Spinner } from "react-bootstrap";

import "./ListCart.css";

export default function ListCart(props) {
  if (props.isLoadingCart) {
    return (
      <div className="list-cart">
        <Container>
          <Row>
            <Col className="text-center">
              <Spinner animation="grow" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="list-cart">
        <Container>
          <Row>
            <Col>
              <Table className="table-list-cart">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.carts.map((cart, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={cart.images[0]}
                            alt=""
                            className="img-responsive img-fluid"
                          />
                        </td>
                        <td>{cart.product.toUpperCase()}</td>
                        <td>{cart.quantity}</td>
                        <td>{cart.price * cart.quantity}</td>
                        <td>
                          <Button variant="success">Edit</Button>{" "}
                          <Button variant="danger">Delete</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
