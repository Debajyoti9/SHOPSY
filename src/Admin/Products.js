import React, { useEffect, useState } from 'react'

function Products() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:4000/products/approved`)
    .then((response) => response.json())
    .then((actualData) => setData(actualData))
    .catch((err) => {
     console.log(err.message);
    });
  },[])
  return (
    <>
       <table class="fl-table">
      <thead>
      <tr>
            <th>Product Name</th>
            <th>Product Size</th>
            <th>Product Avabilty</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Product Details</th>
            <th>Product Section</th>
            <th>Remove Product</th>
        </tr>
      </thead>
      <tbody>
      
      {
        data.map((item)=>
        <tr key={item._id}>
            <td>{item.productName}</td>
            <td>{item.sizeOfProduct}</td>
            <td>{item.productAvialable}</td>
            <td>{item.priceOfProduct}</td>
            <td><img src={item.productImage} alt="pimg"/></td>
            <td>{item.productDetails}</td>
            <td>{item.sectionOfProduct}</td>
            <td><form action={`http://localhost:4000/products/approved/${item._id}`} method='POST'><button type="submit" style={{backgroundColor:"#fa2525"}}>Remove</button></form></td>
        </tr>
        )
      }
            
      </tbody>
     </table>
    </>
  )
}

export default Products