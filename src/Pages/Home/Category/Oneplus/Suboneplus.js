import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";

export default function Suboneplus({ data, setsingleitem }) {
  const {
    
    categore,
    
    seller_name,
    product_name,
    price,
    year_pursage,
    img,
    upload_date,
  } = data;
  console.log("aredata", data);

  const [commet, setComment] = useState(false);


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

        {commet && <p>seller_name:{seller_name}</p>}
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
            onClick={() => setsingleitem(data)}
            htmlFor="my-modal-3"
            className="btn btn-primary"
          >
            Comment
          </label>
        
        </div>
      </div>
    </div>
  );
}
