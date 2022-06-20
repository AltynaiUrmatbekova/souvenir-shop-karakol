import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ProductList from "../components/ProductList/ProductList";
import { getHomemade } from "../data/homemade";
import { getProducts } from "../data/products";


function Homemade() {
  const params = useParams();
  const homemade = getHomemade(params.homemadeId);

  if (!homemade) {
    return null;
  }

  return (
    <div className="Homemade">
      <Header title={homemade.title} image={homemade.image}>
        {homemade.description}
      </Header>
      <Main>
        <Homemade homemades={getHomemade(homemade.homemadeId)} />
      </Main>
    </div>
  );
}

export default Homemade;
