import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
// import useTitle from "../../../hooks/useTitle";

export default function Myorderrow({
  myorder,
 
}) {
  // useTitle("MyorderRow")
  let [orders, setorders] = useState();
  let [sta, setsta] = useState(true);
  // let [paid,setPaid]=useState(true)

  const id = myorder.id;
  console.log("iddd", id);
  console.log("orderid", orders);

 
  return (
    <div className="m-7 p-5">
      {myorder?.comment && (
        <ul>
          <img className="w-12" src={myorder.img} alt="" />
          <li>{myorder.product_name}</li>
          <li>{myorder.username}</li>
          <li>{myorder.useremail}</li>
          Comment{myorder.comment}
        </ul>
      )}
    </div>
  );
}
