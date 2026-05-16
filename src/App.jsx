import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import UserContextProvider from "./Context/UserContextProvider";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "./pages/Home";

// User Pages
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Profile from "./pages/User/Profile";

// Product Pages
import ProductDetails from "./pages/Products/ProductDetails";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Collection from "./pages/Collection";
import Brand from "./pages/Brand";

function App() {

  // WAKE BACKEND
  useEffect(() => {                                             // As soon as website open frontend wakes backend first

    axios.get(
      "https://elitewrist-api.onrender.com"
    );

  }, []);

  return (

    <UserContextProvider>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* Orders */}
        <Route
          path="/orders"
          element={<Orders />}
        />

        {/* User */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* collection */}
        <Route path="/collection"
          element={<Collection />} />

        {/* BRAND */}
        <Route
          path="/brand"
          element={<Brand />}
        />


      </Routes>

      <Footer />

    </UserContextProvider>

  );

}

export default App;