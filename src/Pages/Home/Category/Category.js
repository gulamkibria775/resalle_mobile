import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Subcategory from "./Subcategory";


export default function Category() {
  
  const { logOut } = useContext(AuthContext);
  const [cate, setcate] = useState([]);
  useEffect(() => {
    fetch("https://server-site-gulamkibria775.vercel.app/category", {
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
  }, [logOut]);
  console.log("set category", cate);

  return (
    <div>
      <h1 className="text-4xl text-center m-5 p-2">Category Section</h1>
      <div className="overflow-x-auto">
        {cate?.map((order, i) => (
          <Subcategory key={i} order={order}></Subcategory>
        ))}
      </div>
    </div>
  );
}
