import React from "react";
import { useEffect, useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import Modal from "../../../Modal/Modal";
import Suboneplus from "../Oneplus/Suboneplus";
import axios from "axios";

export default function Oneplus() {
  const [alldata, setalldata] = useState([]);
  const [singleitem, setsingleitem] = useState(null);
  useTitle("samsung");

  //     useEffect(() => {

  //   // fetch("https://server-site-gulamkibria775.vercel.app/product")
  //   //   .then((res) => res.json())
  //   //   .then( data=>{setalldata(data)});

  //   axios.get("https://server-site-gulamkibria775.vercel.app/product")
  //   .then(response => response.data)
  //   .then((data) => {
  //       setEventDetails(data);
  //       setIsLoading(false);

  // }, []);

  // Axois use

  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://server-site-gulamkibria775.vercel.app/product")
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  const result = post?.filter((word) => word.categore === "samsung");
  console.log("resutl", result);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {result.map((item, i) => (
        <Suboneplus
          data={item}
          key={i}
          setsingleitem={setsingleitem}
        ></Suboneplus>
      ))}
      {singleitem && <Modal singleitem={singleitem}></Modal>}
    </div>
  );
}
