import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.css";

function ProductList({ products }) {
  const productItems = products.map(product => (
    <ProductItem key={product.productId} product={product} />
  ));

  return (
    <div className={classes.ProductList}>
      {productItems}
    </div>
  );
}

export default ProductList;