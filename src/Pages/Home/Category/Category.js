import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Subcategory from "./Subcategory";
// import Subcategory from './Subcategory';

export default function Category() {

  const {logOut}=useContext(AuthContext)
  const [cate,setcate]=useState([])
  useEffect(() => {
    fetch('http://localhost:5000/category', {
      method: "GET",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => {
        console.log("problem", res);
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setcate(data);
      });
  }, []);
  console.log('set category',cate)

  return (
    <div>

      <h1 className="text-4xl text-center m-5 p-2">Category Section</h1>
      <div className="overflow-x-auto">
       
         
        
            {cate?.map((order,i) => (
              <Subcategory
                // key={order._id}
                key={i}
                order={order}
               
              ></Subcategory>
            ))}
            {/* <tr>
      
      </tr> */}
         
        
      </div>
    </div>
  );
}