import Header from "../components/Header/Header";
import image from "../assets/cart.jpg";
import CartDisplay from "../components/CartDisplay/CartDisplay";

function Cart() {
  return (
    <>
      <Header
        title="Your Shopping Cart"
        image={image}>
        Please review items in your cart.
      </Header>

      <CartDisplay actions />

      {/* <Link to="/checkout">Checkout</Link> */}
    </>
  );
}

export default Cart;
