import React from "react";

export default function Singleadd({ item }) {
  // console.log("ITEM", item.advertige);
  console.log("ITEM", item);
  return (
    <div  className="my-1 m-2">
      
      {item.advertige && (
        <div className="card  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{item.product_name}</h2>
            <p>price:{item.price}</p>
            <p>condition_type:{item.condition_type}</p>
            <p>year_pursage:{item.year_pursage}</p>
            <p>upload_date:{item.upload_date}</p>
            <p>Prodruct sold by s</p>
          </div>
          <figure>
            <img className="w-52" src={item.img} alt="Shoes" />
          </figure>
        </div>
      )}
    </div>
  );
}
