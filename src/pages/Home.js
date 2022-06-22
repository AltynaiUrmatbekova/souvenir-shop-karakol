import Header from "../components/Header/Header";
import headerImage from "../assets/cups.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";
import Main from "../components/Main/Main"
function Home() {
  return (
    <>
      <Header title="Welcome to our souvenir shop!" image={headerImage}>
        Souvenir shopping is one of the true joys of travelling. It’s part of
        the fun of exploring a new place, and you get to bring a little piece of
        it home with you!
      </Header>
      <Main>
        <CategoryList categories={getCategories()} />
       
      </Main>
    </>
  );
}
export default Home;
