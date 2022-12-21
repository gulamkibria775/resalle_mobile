import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import OrderRow from "./OrderRow/OrderRow";

export default function Myproduct() {
  useTitle("my_product");
  const { signIn, user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [status, setstatus] = useState();
  const [stata, setstata] = useState();
  console.log("my praduct data", orders, user?.email);
  console.log("my praduct data1", stata);
  console.log("my praduct data2", status);

  useEffect(() => {
    fetch(
      `https://server-site-gulamkibria775.vercel.app/product/${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        console.log("problem", res);
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email, logOut, signIn, stata, status]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this status"
    );
    if (proceed) {
      fetch(`https://server-site-gulamkibria775.vercel.app/product/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
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
    setstatus(!status);
    fetch(`https://server-site-gulamkibria775.vercel.app/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ status: status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  const StatusUpdate = (id) => {
    setstata(!stata);

    fetch(`https://server-site-gulamkibria775.vercel.app/product1/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ status: stata }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Price</th>
              <th>product_name</th>
              <th>Addvertage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <OrderRow
                // key={order._id}
                key={i}
                order={order}
                handleDelete={handleDelete}
                StatusUpdate={StatusUpdate}
                handleStatusUpdate={handleStatusUpdate}
                status={status}
                stata={stata}
              ></OrderRow>
            ))}
         
          </tbody>
        </table>
      </div>
    </div>
  );
}
