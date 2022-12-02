import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Suboneplus({ data, setsingleitem }) {
  const {
    _id,
    categore,
    title,
    seller_name,
    product_name,
    price,
    year_pursage,
    img,
    upload_date,
  } = data;
  console.log("aredata", data);

  const [commet,setComment]=useState(false)



  const setsinglecomment = (data) => {
    // setstata(!stata)
   
    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
       
        
          toast("your comment successfully send")
          setComment(true)
          // const remaining = orders.filter((odr) => odr._id !== id);
          // const approving = orders.find((odr) => odr._id === id);
          // approving.status = "Approved";

          // const newOrders = [approving, ...remaining];
          // setOrders(newOrders);
        
      });
  };







  return (
    <div className="card w-96 shadow-xl m-3 mt-7">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{categore}</h2>
        <p>product_name:{product_name}</p>
        <p>year_pursage:{year_pursage}</p>
        <p>upload_date:{upload_date}</p>
        <p>Orginal_price:{price}</p>

        <p>seller_name:{seller_name}</p>

        {
          commet &&  <p>seller_name:{seller_name}</p>
        }
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
          <label
            onClick={() => setsingleitem(data)}
            htmlFor="my-modal-3"
            className="btn btn-primary"
          >
            Buy Now
          </label>
          <label
            onClick={ () => setsingleitem(data)}
            htmlFor="my-modal-3"
            className="btn btn-primary"
          >
        Comment
          </label>
          {/* <Link
            to= "/comment" >
        Comment
          </Link> */}
          
        </div>
      </div>
    </div>
  );
}
