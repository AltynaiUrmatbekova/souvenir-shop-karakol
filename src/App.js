import Home from "./pages/Home";
import Layout from "./components/Layout/Layout"
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/contacts/Contacts"
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;