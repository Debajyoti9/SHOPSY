import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import more from "../../../static/images/arrow-right-to-bracket-solid.svg";
import { Link } from "react-router-dom";
function BabySection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/products/baby`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div class="container">
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
      <Link to="/baby">
        <button className="show_more">
          Show More
          <img src={more} alt="more" />
        </button>
      </Link>
    </div>
  );
}

export default BabySection;
