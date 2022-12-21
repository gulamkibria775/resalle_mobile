import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Userrow from "./Userrow";
import { useQuery } from "@tanstack/react-query";

export default function Alluser() {
  useTitle("my_product");
  const { signIn, user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [status, setstatus] = useState();
  const [stata, setstata] = useState();

  
 

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://server-site-gulamkibria775.vercel.app/newuser"
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
      fetch(`https://server-site-gulamkibria775.vercel.app/newuser/${id}`, {
        method: "DELETE",
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('genius-token')}`
        // }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://server-site-gulamkibria775.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      // body: JSON.stringify({ status: status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast(" admin successfully");
          refetch();
          
        }
      });
  };

 

  return (
    <div>
      <h1 className="text-5xl text-red-500 my-5">ALL Seller Information !!!</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete</th>

              <th>Seller_Email</th>
              <th>Seller_Name</th>

              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((order) => (
              <Userrow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                // StatusUpdate={StatusUpdate}
                handleStatusUpdate={handleStatusUpdate}
                // status={status}
                // stata={stata}
              ></Userrow>
            ))}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
// // import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
// import OrderRow from './OrderRow';

// const Orders = ({data}) => {
//     const { user, logOut } = useContext(AuthContext);
//     const [orders, setOrders] = useState([])
//     console.log('data form data',data[0].comment)

//     useEffect(() => {
// fetch(`https://server-site-gulamkibria775.vercel.app/services?email=${user?.email}`, {
//             headers: {
//                 authorization: `Bearer ${localStorage.getItem('genius-token')}`
//             }
//         })
//             .then(res => {
//                 if (res.status === 401 || res.status === 403) {
//                     return logOut();
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 setOrders(data);

//             })
//     }, [user?.email, logOut])

//     const handleDelete = id => {
//         const proceed = window.confirm('Are you sure, you want to cancel this status');
//         if (proceed) {
//             fetch(`https://server-site-gulamkibria775.vercel.app/services/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     authorization: `Bearer ${localStorage.getItem('genius-token')}`
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.deletedCount > 0) {
//                         alert('deleted successfully');
//                         const remaining = orders.filter(odr => odr._id !== id);
//                         setOrders(remaining);
//                     }
//                 })
//         }
//     }

// const handleStatusUpdate = id => {
//     fetch(`https://server-site-gulamkibria775.vercel.app/services/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json',
//             // authorization: `Bearer ${localStorage.getItem('genius-token')}`
//         },
//         body: JSON.stringify({ status: 'Approved' })
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if (data.modifiedCount > 0) {
//                 const remaining = orders.filter(odr => odr._id !== id);
//                 const approving = orders.find(odr => odr._id === id);
//                 approving.status = 'Approved'

//                 const newOrders = [approving, ...remaining];
//                 setOrders(newOrders);
//             }
//         })
// }

//     return (
//         <div className=''>
//             <h2 className="text-5xl">You have {orders.length} Service </h2>
//             <h1 className="text-3xl">you want to update or deleate the service</h1>
//             <div className="overflow-x-auto w-full">
//                 <table className='table-auto'>
//                     <thead>
//                         <tr>
//                             <th>
//                                Delete
//                             </th>
//                             <th>image</th>
//                             <th>Name</th>
//                             <th>comment</th>
//                             {/* <th>Favorite Color</th> */}
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             orders.map((order) => <OrderRow
//                                 key={order._id}
//                                 order={order}
//                                 handleDelete={handleDelete}
//                                 handleStatusUpdate={handleStatusUpdate}
//                             ></OrderRow>)
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Orders;


