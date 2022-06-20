import Header from "../components/Header/Header";
import headerImage from "../assets/slipper.jpeg";
import { getHomemades } from "../data/homemade";
import HomemadeList from "../components/HomemadeList/HomemadeList";
import Main from "../components/Main/Main";


function Homemades() {
  return (
    <>
      <Header
        title="We provide natural, felt and wool products!"
        image={headerImage}
      >
        Souvenir shopping is one of the true joys of travelling. It’s part of
        the fun of exploring a new place, and you get to bring a little piece of
        it home with you!
      </Header>

      <Main>
        <HomemadeList homemades={getHomemades()} />
      </Main>
    </>
  );
}
export default Homemades;