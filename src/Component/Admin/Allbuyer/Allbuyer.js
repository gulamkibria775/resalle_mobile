import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Buyerrow from "./Buyerrow";
import { useQuery } from "@tanstack/react-query";
export default function Allbuyer() {
  useTitle("my_product");
  const {  user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
 
  console.log("my praduct data", orders, user?.email);

  console.log("my praduct data1", orders);
  

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://server-site-gulamkibria775.vercel.app/newbuyer"
      );
      const data = await res.json();
      return data;
    },
  });

 
  

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this status"
    );
    if (proceed) {
      fetch(`https://server-site-gulamkibria775.vercel.app/newbuyer/${id}`, {
        method: "DELETE",
       
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
   
    fetch(
      `https://server-site-gulamkibria775.vercel.app/newbuyer/admin/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${localStorage.getItem('genius-token')}`
        },
        // body: JSON.stringify({ status: status }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
        if (data.modifiedCount > 0) {
          toast("Admin suceesfully");
          refetch();
          const remaining = orders.filter((odr) => odr._id !== id);

          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
         
          setOrders(orders);
        }
      });
  };



  return (
    <div>
      <h1 className="text-5xl text-red-500 my-5">ALL Buyer Information !!!</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete</th>

              <th>Buyer_Email</th>
              <th>Buyer_Name</th>

              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((order, i) => (
              <Buyerrow
                // key={order._id}
                key={i}
                order={order}
                handleDelete={handleDelete}
              
                handleStatusUpdate={handleStatusUpdate}
               
              ></Buyerrow>
            ))}
          
          </tbody>
        </table>
      </div>
    </div>
  );
}

