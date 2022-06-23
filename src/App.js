import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/contacts/Contacts";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Homemade from "./pages/Homemade";
import Homemades from "./pages/Homemades";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Checkout from "./pages/Checkout";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'cart/restore' });
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/homemades" element={<Homemades />} />
          <Route path="/homemades/:homemadeId" element={<Homemade />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
