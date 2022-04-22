import Header from "../components/Header/Header";
import headerImage from "../assets/slippers.jpeg"
function Home() {
    return (
        <>
        <Header
            title="Welcome to our souvenir shop!"
            image={headerImage}>
        Souvenir shopping is one of the true joys of travelling. It’s part of the fun of exploring a new place, and you get to bring a little piece of it home with you!  
        </Header>
        </>
        // <article>
        //     <h1>This is home page</h1>
        //     <p>
        //     Souvenir shopping is one of the true joys of travelling. It’s part of the fun of exploring a new place, and you get to bring a little piece of it home with you!
        //     </p>
        // </article>
    );
}
export default Home;