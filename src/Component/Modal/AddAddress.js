import React from 'react';
import './css/AddAddress.css';
function AddAddress({close}) {
    const [open,setOpen] = close;
  
    return (
        <div className="add_address">
        <form action="" className="new_address">
            <label htmlFor="address">Add New Address:</label>
            <input type="text" placeholder="Ex:-jaipur,rajasthan,361512" name="address" required/>
            <label htmlFor="number">Add New Mobile Number:</label>
            <input type="number" placeholder="Ex:-9852136510" name="number" />
            <label htmlFor="landmark">Enter Landmark:</label>
            <input type="text" placeholder="Ex:-Near Raju tea Shop" name="landmark" required/>
            <button type="submit" className="btn_add">Confirm and Go</button>
        </form>
        <button className="close_btn" onClick={()=>{open===true?setOpen(false):setOpen(false)}}>close</button>
 </div>
    )
}

export default AddAddress;