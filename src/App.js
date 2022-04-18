import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Home from "./pages/Home";
import Contants from "./pages/Contacts";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contants />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
