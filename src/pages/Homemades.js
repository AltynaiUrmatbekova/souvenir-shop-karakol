import Header from "../components/Header/Header";
import headerImage from "../assets/homework.jpg";
import Main from "../components/Main/Main";
import HomemadeList from "../components/HomemadeList/HomemadeList";
import { getHomemades } from "../data/homemades";

function Homemades() {
  return (
    <>
      <Header title=" We provide natural, felt and wool products!" image={headerImage}>
      <p>
      Whatever the season, however intensive the activity, wool insulation layer naturally adjusts to your body's thermal balance, improves perspiration comfort and keeps you drier from the inside, making it perfect for high-performance, outerwear apparel.
        </p>
      </Header>
      <Main>
        <HomemadeList homemades={getHomemades()} />
      </Main>
    </>
  );
}
export default Homemades;
