import Header from "../components/Header/Header";
import headerImage from "../assets/gift.jpg";
import { getCategories } from "../data/categories";
import CategoryList from "../components/CategoryList/CategoryList";

function Categories() {
    
    return (
        
        <>
        <Header 
        title="We provide natural, felt and wool products!"
        image={headerImage} >
            Souvenir shopping is one of the true joys of travelling. It’s part of the fun of exploring a new place, and you get to bring a little piece of it home with you!
        </Header>
      

        <CategoryList categories={getCategories()} />

        
        </>
    );
}
export default Categories;