import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Myorderrow from './Myorderrow';

export default function Myorder() {
useTitle('Myorder')
  const { signIn, user, logOut } = useContext(AuthContext);
  const [orders, setorders] = useState("");
  const [myorder, setmyorder] = useState([]);
  const [status,setstatus]=useState()
  const [seconddata,setseconddata]=useState()
  useEffect(() => {
    fetch(`http://localhost:5000/myorder/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

    })
      .then((res) => {
        console.log("problem",res)
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setmyorder(data);
        
      });
  }, [user?.email, logOut,signIn,status]);


  useEffect(() => {
    fetch("http://localhost:5000/product", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

      
    })
      .then((res) => {
        console.log("problem",res)
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setseconddata(data);
        
      });
  }, [user?.email, logOut,signIn,status]);






  // const StatusUpdate = (id) => {
  //   setorders(id)
    
  //   // fetch(`http://localhost:5000/productval/${id}`, {
  //   //   method: "GET",
  //   //   headers: {
  //   //     "content-type": "application/json",
  //   //     // authorization: `Bearer ${localStorage.getItem('genius-token')}`
  //   //   },
     
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log("maa",data,data[0].status);
  //   //     setorders(data[0].status)
       
  //   //     // if (data.modifiedCount > 0) {
  //   //     //   const remaining = orders.filter((odr) => odr._id !== id);
  //   //     //   const approving = orders.find((odr) => odr._id === id);
  //   //     //   approving.status = "Approved";

  //   //     //   const newOrders = [approving, ...remaining];
  //   //     //   setorders(newOrders);
          
  //   //     // }
  //   //   });


  //   setstatus(!status)
  //   fetch(`http://localhost:5000/orderstatus/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //       // authorization: `Bearer ${localStorage.getItem('genius-token')}`
  //     },
  //     body: JSON.stringify({ status: status}),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
        
        
  //       toast("order successfull")
  //       // if (data.modifiedCount > 0) {
  //       //   const remaining = orders.filter((odr) => odr._id !== id);
  //       //   const approving = orders.find((odr) => odr._id === id);
  //       //   approving.status = "Approved";

  //       //   const newOrders = [approving, ...remaining];
  //       //   setorders(newOrders);
          
  //       // }
  //     });
  // };


  return (
    <div>
      
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>price</th>
              <th>payment</th>
              
            </tr>
          </thead>
          <tbody>
            {myorder.map((myorder,index) => (
              <Myorderrow
                key={myorder._id}
                myorder={myorder}
                
                // StatusUpdate={StatusUpdate}
                seconddata={seconddata}
                index={index}
              orders={orders}
                // status={status}
               
              ></Myorderrow>


            ))}
           


         
          </tbody>
        </table>
      </div>
  
  )
}
