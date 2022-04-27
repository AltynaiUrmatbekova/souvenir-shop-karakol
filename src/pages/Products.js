import Header from "../components/Header/Header";
import headerImage from "../assets/honey.jpeg";
import ProductList from "../components/ProductList/ProductList"
import { getProducts } from "../data/products";
function Products() {
    
    return (
        
        <>
        <Header 
        title="Pick your type of coffee"
        image={headerImage}>
            Souvenir shopping is one of the true joys of travelling. It’s part of the fun of exploring a new place, and you get to bring a little piece of it home with you!
        </Header>

        <ProductList products={getProducts()} />

        
        </>
    );
}
export default Products;