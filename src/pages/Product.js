import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }
  console.log(product.description);
  return (
    <>
    <div style={{display: "flex", padding: "1rem 3rem"}}>
        <div style={{padding: "1rem", textAlign: "center", lineHeight: "50px"}}>
          <h2 style={{color: "black"}}>{product.title}</h2>
          <p style={{color: "black"}}>{product.description}</p>
          <button style={{width: "120px", height: "30px", backgroundColor: "white", color: "black", fontSize: "1rem", fontWeight: "300"}}>
           {product.price}$
          </button>
          <CartButton productId={params.productId} />
        </div>
        {<img style={{width: "400px"}} src={product.image} alt={product.title} />}
      </div>
      <CartButton productId={params.productId}/>
    </>
  );
}

export default Product;
