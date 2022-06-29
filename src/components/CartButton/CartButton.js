import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../data/products";
import classes from "./CartButton.module.css";
import React from "react";
import { add } from "../../redux/cartSlice";

export default function CartButton({ productId, price }) {
  const dispatch = useDispatch();

  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  function onAddToCart() {
    dispatch(add(productId));
  }

  return (
    <button className={classes.CartButton} onClick={onAddToCart}>
      Add to card - $ {product.price}
    </button>
  );
}
