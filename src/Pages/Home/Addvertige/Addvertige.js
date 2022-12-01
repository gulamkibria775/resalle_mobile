import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Singleadd from "./Singleadd";

export default function Addvertige() {
  useTitle("addvertige")
  const [orderdata,setorderdata]=useState([])
  const { signIn ,user,logOut} = useContext(AuthContext);
  console.log("orderdata12",orderdata)
  useEffect(() => {
    fetch("http://localhost:5000/product", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
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
        setorderdata(data);
        
      });
  }, [user?.email, logOut,signIn]);

  return (
    <div>
{ orderdata && <h1 className="text-5xl text-center my-7 text-red-700">Addvertige section</h1>}

<div className='grid grid-cols-1 md:grid-cols-3'>
     
     {
     
       orderdata.map((item,index)=>(
       <Singleadd item={item} key={index}></Singleadd>
       
         ))
     }
     </div>
    </div>

  );
}
