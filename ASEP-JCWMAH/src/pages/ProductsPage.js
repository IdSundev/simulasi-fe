import React, { useEffect } from "react";
import "./ProductsPage.css";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../store/actions/productAction";
import FilterListProducts from "../components/FilterListProducts";
import ListProducts from "../components/ListProducts";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const {
    products,
    isLoadingProduct,
    isFiltered,
    filteredProduct,
  } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products-page">
      <FilterListProducts />
      <ListProducts products={isFiltered === false ? products : filteredProduct} isLoadingProduct={isLoadingProduct} />
    </div>
  );
}
