import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import MensPage from './Component/MensPage';
import WomensPage from './Component/Womenspage';
import BabysPage from './Component/Babyspage';
import TrendingPage from './Component/TrendingPage';
import BlogsPage from './Component/BlogsPage';
import ProductDetails from './Component/ProductDetails';
import RegisterVendor from './Vendors/Register';
import VendorDetails from './Vendors/VendorDetails';
// import store from './Redux/store';
// import { Provider } from 'react-redux';
import BlogDetails from './Component/BlogDetails';
import AdminPage from './Admin/AdminPage';
import UserVendorPage from './Vendors/UserVendorPage';
import Cart from './Component/Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Provider store={store}> */}
  <Router>
    <Routes>
       <Route exact path='/' element={<App/>}/>
       <Route  path='/login' element={<Login/>}/>
       <Route  path='/register' element={<Register/>}/>
       <Route  path='/men' element={<MensPage/>}/>
       <Route  path='/women' element={<WomensPage/>}/>
       <Route  path='/baby' element={<BabysPage/>}/>
       <Route  path='/trending' element={<TrendingPage/>}/>
       <Route  path='/blogs' element={<BlogsPage/>}/>
       <Route  path='/productDetails/:id' element={<ProductDetails/>}/>
       <Route  path='/vendor' element={<RegisterVendor/>}/>
       <Route  path='/vendorDetails' element={<VendorDetails/>}/>
       <Route  path='/blogDetails' element={<BlogDetails/>}/>
       <Route  path='/admin' element={<AdminPage/>}/>
       <Route  path='/user_vendor' element={<UserVendorPage/>}/>
       <Route  path='/cart' element={<Cart/>}/>
    </Routes>
  </Router>
  {/* </Provider> */}
  </React.StrictMode>
);


