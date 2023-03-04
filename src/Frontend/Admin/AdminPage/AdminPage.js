import React from "react";
import "../Style/Admin.css";
import Dashboard from "../Dashboard/Dashboard";
import Ordered from "../Ordered/Ordered";
import Products from "../Products/Products";
import "../Style/Table.css";
import Nav from "../../../Frontend/Component/Vendors/Nav/Nav";
function AdminPage() {
  return (
    <>
      <Nav />
      <nav className="nav">
        <a href="#first">
          <i class="far fa-user"></i>
        </a>
        <a href="#second">
          <i class="fas fa-briefcase"></i>
        </a>
        <a href="#third">
          <i class="far fa-file"></i>
        </a>
        <a href="#fourth">
          <i class="far fa-address-card"></i>
        </a>
      </nav>

      <div class="admin-nav-container">
        <section id="first" className="section">
          <h1>DashBoard</h1>
          <Dashboard />
        </section>

        <section id="second" className="section">
          <h1>Products</h1>
          <Products />
        </section>

        <section id="third" className="section">
          <h1>Ordered</h1>
          <Ordered />
        </section>

        <section id="fourth" className="section">
          <h1>Total 96 Item Delivered</h1>
          <h1>Account Price:10025012</h1>
        </section>
      </div>
    </>
  );
}

export default AdminPage;
