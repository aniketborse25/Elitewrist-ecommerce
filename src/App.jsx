import { Routes, Route } from "react-router-dom";
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
import Shop from "./pages/Shop";
import Orders from "./pages/Orders";


function App() {
  return (
    <UserContextProvider>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />



        {/* Dynamic Product Details */}
        <Route path="/product/:id"
          element={<ProductDetails />} />
        {/* <Route path="/add-product" element={<AddProduct />} /> */}
        {/* <Route
          path="/edit-product/:id"
          element={<EditProduct />}
        /> */}
        <Route path="/orders" element={<Orders />} />

        {/* User */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />



      </Routes>

      <Footer />

    </UserContextProvider>
  );
}

export default App;