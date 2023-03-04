import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";

function UserVendorPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <Nav />
      <h1>Added Items</h1>
      <table class="fl-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Size</th>
            <th>Product Avabilty</th>
            <th>Product Price</th>
            <th>Product Section</th>
            <th>Product Details</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.productName}</td>
              <td>
                <img src={item.productImage} alt="pimg" />
              </td>
              <td>{item.sizeOfProduct}</td>
              <td>{item.productAvialable}</td>
              <td>{item.priceOfProduct}</td>
              <td>{item.sectionOfProduct}</td>
              <td>{item.productDetails}</td>
              <td
                style={
                  item.approved === "Approved"
                    ? { color: "green", fontWeight: "bold" }
                    : item.approved === "pending"
                    ? { color: "#F29339", fontWeight: "bold" }
                    : { color: "red", fontWeight: "bold" }
                }
              >
                {item.approved}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserVendorPage;
