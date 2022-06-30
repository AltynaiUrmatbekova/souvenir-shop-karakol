import Header from "../components/Header/Header";
import image from "../assets/cart.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import CartDisplay from "../components/CartDisplay/CartDisplay";
import { useEffect } from "react";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, localId } = useSelector(store => ({
    items: store.cart.items,
    localId: store.auth.localId
  }));

  useEffect(() => {
    if (!localId) {
      navigate('/auth');
    }
  }, [localId, navigate]);

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(checkout({
      localId: localId,
      items: items,
      ...Object.fromEntries(formData.entries()),
    }));
    navigate('/');
  }

  return (
    <>
      <Header
        title="Checkout"
        image={image}>
        Please enter your information.
      </Header>

      <CartDisplay />

      <form onSubmit={onCheckout}>
        <label>
          First name:
          <input type="text" name="firstName" required />
        </label>
        <label>
          Last name:
          <input type="text" name="lastName" required />
        </label>
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" required />
        </label>

        <button>Complete the order</button>
      </form>
    </>
  );
}

export default Checkout;