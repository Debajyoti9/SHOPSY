import React from "react";
import Nav from "../Nav/Nav";
import "../Style/VendorDetails.css";
function VendorDetails() {
  return (
    //Product Name	Product Size	Product Avabilty	Product Price	Product colors
    <>
      <Nav />
      <div className="addProduct">
        <h1>Add Product</h1>
        <form action="http://localhost:4000/products" method="POST">
          <label for="fname">Product Name</label>
          <input
            type="text"
            id="fname"
            name="productName"
            placeholder="Product Name"
          />

          <label for="lname">Product Avabilty</label>
          <input
            type="number"
            id="lname"
            name="productAvialable"
            placeholder="Type How many Availabe"
          />

          <label for="Size">Size</label>
          <div className="line">
            <input type="checkbox" name="sizeOfProduct" id="1" value="1" />
            <label for="Size">1</label>
            <input type="checkbox" name="sizeOfProduct" id="2" value="2" />
            <label for="Size">2</label>
            <input type="checkbox" name="sizeOfProduct" id="3" value="3" />
            <label for="Size">3</label>
            <input type="checkbox" name="sizeOfProduct" id="4" value="4" />
            <label for="Size">4</label>
            <input type="checkbox" name="sizeOfProduct" id="5" value="5" />
            <label for="Size">5</label>
            <input type="checkbox" name="sizeOfProduct" id="6" value="6" />
            <label for="Size">6</label>
            <input type="checkbox" name="sizeOfProduct" id="7" value="7" />
            <label for="Size">7</label>
            <input type="checkbox" name="sizeOfProduct" id="8" value="8" />
            <label for="Size">8</label>
            <input type="checkbox" name="sizeOfProduct" id="9" value="9" />
            <label for="Size">9</label>
            <input type="checkbox" name="sizeOfProduct" id="10" value="10" />
            <label for="Size">10</label>
            <input type="checkbox" name="sizeOfProduct" id="11" value="11" />
            <label for="Size">11</label>
            <input type="checkbox" name="sizeOfProduct" id="12" value="12" />
            <label for="Size">12</label>
          </div>
          <label for="lname">Product Price</label>
          <input
            type="number"
            id="lname"
            name="priceOfProduct"
            placeholder="Type your product price"
          />
          <label for="fname">Product Image</label>
          <input
            type="text"
            id="fname"
            name="productImage"
            placeholder="Product Image link"
          />
          <label for="Section">Section</label>
          <select id="section" name="sectionOfProduct">
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="baby">baby</option>
            <option value="trending">trending</option>
          </select>
          <label for="lname">Product Details</label>
          <textarea
            id="pdetails"
            name="productDetails"
            rows="4"
            cols="50"
            placeholder="Write details about your products"
          ></textarea>
          <input type="submit" value="ADD" />
        </form>
      </div>
    </>
  );
}

export default VendorDetails;
