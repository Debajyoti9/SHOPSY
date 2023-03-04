import React, { useEffect, useState } from 'react'

function Dashboard() {
  const [data,setData] = useState([]);
  const [status,setStatus] = useState("pending");
  useEffect(()=>{
    fetch(`http://localhost:4000/products`)
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
            <th>Product Image</th>
            <th>Product Size</th>
            <th>Product Avialable</th>
            <th>Product Price</th>
            <th>Product Section</th>
            <th>Product Details</th>
            <th>Approval</th>
            <th>Current Status</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item)=>
      <tr key={item._id}>
          <td>{item.productName}</td>
          <td><img src={item.productImage} alt="pimg"/></td>
          <td>{item.sizeOfProduct}</td>
          <td>{item.productAvialable}</td>
          <td>{item.priceOfProduct}</td>
          <td>{item.sectionOfProduct}</td>
          <td>{item.productDetails}</td>
          <td><form action={`http://localhost:4000/products/${item._id}/${status}`} method='POST'><button type='submit' onClick={()=>setStatus("Approved")}>Approved</button> <button type='submit' onClick={()=>setStatus("Declined")}>Decline</button></form></td>
          <td style={item.approved === 'Approved'?{color:"green",fontWeight:"bold"}:item.approved === 'pending'?{color:"#F29339",fontWeight:"bold"}:{color:"red",fontWeight:"bold"}}>{item.approved}</td>
      </tr>
    )}  
      </tbody>
     </table>
    </>
    
  )
}

export default Dashboard