import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import SignOut from "./pages/SignOut";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;