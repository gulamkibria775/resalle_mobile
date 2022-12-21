import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";

export default function Myorderrow({ myorder }) {
  useTitle("MyorderRow");
  let [orders, setorders] = useState();
  let [sta, setsta] = useState(true);
  // let [paid,setPaid]=useState(true)

  const id = myorder.id;
  console.log("iddd", id);
  console.log("orderid", orders);

  const [val, setval] = useState(false);

  // try
  const StatusUpdate = (id) => {
    setorders(id);

    fetch(`https://server-site-gulamkibria775.vercel.app/productval/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("maayy", data, data[0].status);
       
      });

    setsta(!sta);
    fetch(`https://server-site-gulamkibria775.vercel.app/orderstatus/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify({ status: sta }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("order successfull");
       
      });
  };
  // tryend

  fetch(`https://server-site-gulamkibria775.vercel.app/productval/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      // authorization: `Bearer ${localStorage.getItem('genius-token')}`
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("may", data, data[0].status);
      setorders(data[0].status);

      // }
    });

 

  console.log("fun", orders);
 
  return (
    <tr>
      <td>
        <img className="w-12" src={myorder.img} alt="" />
      </td>
      <td>{myorder.product_name}</td>
      <td>{myorder.price}</td>

      {orders ? (
        <td>
          {/* <Link to={`/dashboard/payment/${id}`}> <button  onClick={() => StatusUpdate(id) } className="btn btn-secondary">
         payment
        </button>
        </Link> */}
          <button
            onClick={() => StatusUpdate(id)}
            className="btn btn-secondary"
          >
            Paid<Link to={`/dashboard/payment/${id}`}></Link>
          </button>
        </td>
      ) : (
        <td>
          <Link to={`/dashboard/payment/${id}`}>
            <button
              onClick={() => StatusUpdate(id)}
              className="btn btn-secondary bg-orange-600 disabled"
            >
              payment
            </button>
          </Link>
        </td>
      )}
    </tr>
  );
}
