import { useDispatch } from "react-redux";

export default function CartButton({ productId }) {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch({ type: 'cart/add', payload: productId });
  }

  return (
    <button className="CartButton" onClick={onAddToCart}>Add to card</button>
  );
}