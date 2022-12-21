import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";
import useTitle from "../../../../hooks/useTitle";
import Subcomment from "./Subcomment";

export default function Comment() {
  useTitle("Myorder");
  const { signIn, user, logOut } = useContext(AuthContext);
  const [orders, setorders] = useState("");
  const [myorder, setmyorder] = useState([]);
  const [status, setstatus] = useState();
  const [seconddata, setseconddata] = useState([]);
  console.log("secondedd data", seconddata);
 

  useEffect(() => {
    fetch("https://server-site-gulamkibria775.vercel.app/comment", {
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
    })
      .then((res) => {
        console.log("problem", res);
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setseconddata(data);
      });
  }, [user?.email, logOut, signIn, status]);

 

  return (
    <div className="grid grid-cols-3">
      {seconddata?.map((myorder, index) => (
        <Subcomment
          key={myorder._id}
          myorder={myorder}
          
        
          index={index}
         
        ></Subcomment>
      ))}
    </div>
  );
}
