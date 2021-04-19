import React, { useEffect } from "react";

import { fetchCart } from "../store/actions/cartAction";
import "./CartPage.css";
import HeaderCart from "../components/HeaderCart";
import ListCart from "../components/ListCart";
import { useSelector, useDispatch } from "react-redux";

export default function CartPage() {
  const dispatch = useDispatch();
  const { carts, isLoadingCart } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  return (
    <div className="cart-page">
      <HeaderCart />
      <ListCart carts={carts} isLoadingCart={isLoadingCart} />
    </div>
  );
}
