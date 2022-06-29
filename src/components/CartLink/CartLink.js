import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cart from "../../assets/shopping-cart-icon.jpg";

export default function CartLink() {
  const number = useSelector((store) => {
    return Object.values(store.cart.items).reduce(
      (sum, number) => sum + number,
      0
    );
  });

  const styles = {
    width: "40px",
    height: "40px",
  };
  return (
    <NavLink to="/cart">
      <img src={cart} alt="cart" style={styles} />
      {number}
    </NavLink>
  );
}
