import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getHomemade } from "../data/homemades";
import CartButton from "../components/CartButton/CartButton";

function Homemade() {
  const params = useParams();
  const homemade = getHomemade(params.homemadeId);

  if (!homemade) {
    return null;
  }

  return (
    <>
      <Header title={homemade.title} image={homemade.image}>
        {homemade.description}
      </Header>
      <CartButton homemadeId={params.homemadeId} />
    </>
  );
}

export default Homemade;
