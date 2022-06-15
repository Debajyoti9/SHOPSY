import React,{useState} from 'react';
let total = 0;
function CartItem({src,name,size,price,setTotal}) {
    const [count,setCount] = useState(0);
    // console.log(id)
  return (
    <>
         <div className="cart_product_image">
             <img src={src} alt="product_image" />
         </div>
         <div className="cart_product_name">
             <h3>{name}</h3>
         </div>
         <div className="cart_product_size">
         <p>size: <span>{size}</span></p>
         </div>
         <div className="cart_product_price">
             <p>price: <span>{price}/-</span></p>
         </div>
         <div className="cart_add_more"><span onClick={()=>{setCount(count+1); total+=price;setTotal(total)}}>+</span><p>{count}</p><span  onClick={()=>{
             if(count>1){
                setCount(count-1); 
                total-=price; 
                setTotal(total);
             }
         }}>-</span></div>
         
     </>
  )
}
export default CartItem;