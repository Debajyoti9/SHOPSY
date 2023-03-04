import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./Frontend/Component/Login/Login";
import Register from "./Frontend/Component/Register/Register";
import MensPage from "./Frontend/Component/MensPage/MensPage";
import WomensPage from "./Frontend/Component/WomensPage/Womenspage";
import BabysPage from "./Frontend/Component/BabysPage/Babyspage";
import TrendingPage from "./Frontend/Component/TrendingPage/TrendingPage";
import BlogsPage from "./Frontend/Component/BlogsPage/BlogsPage";
import ProductDetails from "./Frontend/Component/ProductDetails/ProductDetails";
import RegisterVendor from "./Frontend/Component/Vendors/Register/Register";
import VendorDetails from "./Frontend/Component/Vendors/VendorDetails/VendorDetails";
// import store from './Redux/store';
// import { Provider } from 'react-redux';
import BlogDetails from "./Frontend/Component/BlogDetails/BlogDetails";
import AdminPage from "./Frontend/Admin/AdminPage/AdminPage";
import UserVendorPage from "./Frontend/Component/Vendors/UserVendorPage/UserVendorPage";
import Cart from "./Frontend/Component/Cart/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/men" element={<MensPage />} />
        <Route path="/women" element={<WomensPage />} />
        <Route path="/baby" element={<BabysPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/vendor" element={<RegisterVendor />} />
        <Route path="/vendorDetails" element={<VendorDetails />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user_vendor" element={<UserVendorPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    {/* </Provider> */}
  </React.StrictMode>
);
