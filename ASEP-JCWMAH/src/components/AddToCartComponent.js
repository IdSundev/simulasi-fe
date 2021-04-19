import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../store/actions/cartAction";
import { useHistory } from "react-router-dom";

export default function AddToCartComponent(props) {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartReducer);
  const history = useHistory();
  console.log(`cart = ${JSON.stringify(carts)}`)

  // function addCart() {
  //   let stock = parseInt(prompt("Masukan jumlah stock: "));
  //   if (stock <= 0 || stock > props.product.stock) {
  //     alert(
  //       "Jumlah stock tidak boleh kurang dari sama dengan 0 dan tidak boleh lebih dari " +
  //         props.product.stock
  //     );
  //     return;
  //   }
  //   dispatch(addCartItem(carts, props.product, stock));
  //   history.push("/cart");
  // }
  return (
    <React.Fragment>
      <Button variant="primary">
        Add to Cart
      </Button>
    </React.Fragment>
  );
}
