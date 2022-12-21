import React, { useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Myorderrow from "./Myorderrow";

export default function Myorder() {
  useTitle("Myorder");
  const { signIn, user, logOut } = useContext(AuthContext);
  const [orders, setorders] = useState("");
  const [myorder, setmyorder] = useState([]);
  const [status, setstatus] = useState();
  const [seconddata, setseconddata] = useState();
  useEffect(() => {
    fetch(
      `https://server-site-gulamkibria775.vercel.app/myorder/${user?.email}`,
      {
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
        setmyorder(data);
      });
  }, [user?.email, logOut, signIn, status]);

  useEffect(() => {
    fetch("https://server-site-gulamkibria775.vercel.app/product", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
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
          {myorder.map((myorder, index) => (
            <Myorderrow
              key={myorder._id}
              myorder={myorder}
              seconddata={seconddata}
              index={index}
              orders={orders}
              // status={status}
            ></Myorderrow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
