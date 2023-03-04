import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
function Trendingpage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/products/trending`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        {data.map((item) => (
          <Card
            src={item.productImage}
            name={item.productName}
            avialable={item.productAvialable}
            size={item.sizeOfProduct}
            price={item.priceOfProduct}
            Id={item._id}
            key={item?._id}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Trendingpage;
