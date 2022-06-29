import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import { Link } from "react-router-dom";
import React from "react";
import classes from "./CartDisplay.module.css";
import { increment, decrement, remove } from "../../redux/cartSlice";

function CartDisplay() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div className={classes.item} key={product.productId}>
          <Link
            to={"/cart/" + product.productId}
            className={classes.productCard}
          >
            <img
              src={product.image}
              alt={product.title}
              className={classes.productImage}
            />
            {product.title}
          </Link>
          <div>
            <button
              className={classes.changeButton}
              onClick={() => dispatch(decrement(product.productId))}
            >
              -
            </button>
            <span className={classes.productQuantity}>
              {items[product.productId]}
            </span>
            <button
              className={classes.changeButton}
              onClick={() => dispatch(increment(product.productId))}
            >
              +
            </button>
          </div>
          <span className={classes.productPrice}>
            ${product.price * items[product.productId]}
          </span>
          <button
            className={classes.deleteButton}
            onClick={() => dispatch(remove(product.productId))}
          >
            Delete
          </button>
        </div>
      );
    });

  let checkoutPath = "/checkout";

  if (!output.length) {
    output = (
      <>
        <div>No items in the cart.</div>
        <Link to="/shop">
          <button className={classes.checkoutButton}>Continue shopping</button>
        </Link>
      </>
    );
    checkoutPath = "/home";
  }

  return (
    <div className={classes.Cart}>
      <div className={classes.container}>
        <div className={classes.cartHeader}>
          <h1>Your Shopping Cart</h1>
          <p>Please review items in your cart.</p>
          {output}
        </div>
        <div className={classes.totalPrice}>
          <h2>Order summary</h2>
          Total: ${total} <br />
          <Link to={checkoutPath}>
            <button className={classes.checkoutButton}>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartDisplay;
