import Header from "../components/Header/Header";
import headerImage from "../assets/lentas.png";
import ProductList from "../components/ProductList/ProductList"
import { getProducts } from "../data/products";
import Main from "../components/Main/Main";

function Products() {
    return (
        <>
        <Header 
        title="Choose the best quality!"
        image={headerImage}>
            Souvenir shopping is one of the true joys of travelling. It’s part of the fun of exploring a new place, and you get to bring a little piece of it home with you!
        </Header>
        {/* {<main>
            <h2>We provide natural, felt and wool products!</h2>
        </main> */}
        <Main>
        <ProductList products={getProducts()} />
        </Main>
        </>
    );
}
export default Products;