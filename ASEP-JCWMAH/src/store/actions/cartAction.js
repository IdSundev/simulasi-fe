import axios from "axios";
import { SET_LOADING_CART, SET_CART } from "./actionType";
import { url } from "../../urlConfig";

function setLoadingCart(data) {
  return {
    type: SET_LOADING_CART,
    payload: data,
  };
}

function setCart(data) {
  return {
    type: SET_CART,
    payload: data,
  };
}

export function addCartItem(carts, product, stock) {
  let isThere = false;
  carts.forEach((el) => {
    if (el.id === product.id) {
      isThere = true;
    }
  });
  console.log(`is There ${isThere}`);
  console.log(`product = ${product.id}`);
  console.log(`stock = ${stock}`);
  console.log(`cart = ${carts}`);
  return (dispatch) => {
    // jika id product ada di cart
    // if (isThere) {
    //   let qty = parseInt(product.quantity) + parseInt(stock);
    //   let data = {
    //     id: product.id,
    //     product: product.product,
    //     price: product.price,
    //     images: product.images,
    //     quantity: qty,
    //   };
    //   axios
    //     .put(`${url}/cart/` + product.id, data)
    //     .then(() => {
    //       dispatch(fetchCart);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //     alert("success")
    // } else {
    //   let data = {
    //     id: product.id,
    //     product: product.product,
    //     price: product.price,
    //     images: product.images,
    //     quantity: stock,
    //   };
    //   axios
    //     .post(`${url}/cart`, data)
    //     .then(() => {
    //       dispatch(fetchCart);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  };
}

export function fetchCart() {
  return (dispatch) => {
    dispatch(setLoadingCart(true));
    axios
      .get(`${url}/cart`)
      .then((carts) => {
        dispatch(setCart(carts.data));
        dispatch(setLoadingCart(false));
      })
      .catch((error) => {
        dispatch(setLoadingCart(false));
      });
  };
}
