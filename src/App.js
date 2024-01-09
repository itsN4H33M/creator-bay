import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/User/Home";
import Footer from "./Components/Footer";
import Register from "./Pages/User/Register";
import Login from "./Pages/User/Login";
import Cart from "./Pages/User/Cart";
import Checkout from "./Pages/User/Checkout";
import Products from "./Pages/User/Products";
import Videos from "./Pages/User/Videos";
import ViewProduct from "./Pages/User/ViewProduct";
import Header from "./Components/Header";

function App() {
  // to get location of current page
  const location = useLocation();

  return (
    <>
      {location.pathname === "/user/login" || location.pathname === "/user/register" ? null : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
      {location.pathname === "/user/login" || location.pathname === "/user/register" ? null : <Footer />}
    </>
  );
}

export default App;
