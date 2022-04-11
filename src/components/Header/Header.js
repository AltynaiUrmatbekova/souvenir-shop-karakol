import "./Header.css";
import headerImage from "../../assets/photo.png";

function Header() {
    const style = {
        backgroundImage: 'url(${headerImage})'
    };
    return (
        <header className="Header" style={style}>
            
            <h1>Souvenir shop karakol</h1>
            <h2>The best places to visit for shopping—and how to get all your new stuff home.</h2>
            <p>
            Souvenir shopping is one of the true joys of travelling. It’s part of the fun of exploring a new place, and you get to bring a little piece of it home with you!
            </p>
        </header>
    )
}

export default Header;