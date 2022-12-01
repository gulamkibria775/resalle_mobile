import React from "react";
import useTitle from "../../../hooks/useTitle";
import Addvertige from "../Addvertige/Addvertige";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Extrapage from "../Extrapage/Extrapage";
import Chart from '../Chart/Chart'
import Corola from '../Corola/Corola'

export default function Home() {
  useTitle("home");
  return (
    <div>
      <Banner></Banner>

      <Category></Category>
      <Addvertige></Addvertige>

      <Extrapage></Extrapage>
      <Chart></Chart>
      <Corola></Corola>
    </div>
  );
}
