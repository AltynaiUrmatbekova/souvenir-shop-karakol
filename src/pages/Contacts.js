import Header from "../components/Header/Header";
import headerImage from "../assets/cumki.jpg";

function Contacts() {
  return (
    <>
      <Header title="Order your presents!" image={headerImage}>
        Souvenir shopping is one of the true joys of travelling. It’s part of
        the fun of exploring a new place, and you get to bring a little piece of
        it home with you!
      </Header>
      <div>
        <ul>
          <li>Mobile Phone: 996 705 61 79 68</li>
          <li>Email Address: goldmoon1090@gmail.com</li>
          <li>Home Address: Voskhod 13/36</li>
          <li>Karakol Kyrgyzstan</li>
          <li>Postcode: 722200</li>
        </ul>
        <ul>
          <li>Convenient location</li>
          <li>Special attention to every guest</li>
          <li>Secured parking</li>
          <li>Available prices</li>
          <li>English speaking staff</li>
        </ul>
      </div>
    </>
  );
}
export default Contacts;
