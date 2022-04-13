import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Home from "./pages/Home";
import Contants from "./pages/Contants";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
     <Nav />
     <Header />
     <Home />
     <Contants />
     <Products />
     <Footer />
     
    </div>
  );
}

export default App;
