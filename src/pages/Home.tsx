import React from "react";
import { Img } from "react-image";
import PieChart from "../components/PieChart";
import JonnyBike from "../components/JonnyBike";
import "../global.css"; // Import the global CSS file

export default function Home() {
  return (
    <div>
      <div style={{ padding: 30, position: "relative" }}>
        <Img
          className="h-96 w-full rounded-lg object-cover object-center filter"
          src={`${process.env.PUBLIC_URL}/p6pb24703805.jpg`}
          alt="Gary Fisher Hoo Koo e Koo 1998"
        />
        <h1
          className="mt-8 text-blue-100 absolute right-50 left-50 top-60"
          style={{ fontSize: 196 }}
        >
          Jonny's Bikes
        </h1>
        <div
          className="col mt-10 space-y-5 border-2 border-gray-500 bg-blue-100 relative justify-center rounded-xl"
          style={{ left: 120, width: "80%" }}
        >
          <div className="text-4xl mt-5">
            Bikes collected over the past 30 years
          </div>
          <div className="text-xl pb-4">Built with NextJS and echarts</div>
        </div>
      </div>
      <div className="row mt-6">
        <div>
          <PieChart
            text={"Brand"}
            name={"Bikes by Brand"}
            divname={"brand"}
            queryname={"Brand"}
          />
        </div>
        <div>
          <PieChart
            text={"Manufacture Country"}
            name={"Bikes by Manufacture Country"}
            divname={"man_country"}
            queryname={"manufacture country"}
          />
        </div>
      </div>
      <div className="row">
        <div>
          <PieChart
            text={"Type"}
            name={"Bikes by Type"}
            divname={"type"}
            queryname={"type"}
          />
        </div>
        <div>
          <PieChart
            text={"Material"}
            name={"Material"}
            queryname={"material"}
            divname={"material"}
          />
        </div>
      </div>
      <Img
        className="h-96 w-full rounded-lg object-cover object-center mt-6"
        src={`${process.env.PUBLIC_URL}/2022-Santa-Cruz-Chameleon-Review_12.jpg`}
        alt="Santa Cruz Chameleon 2022"
      />
      <div className="justify-center">
        <JonnyBike />
      </div>
      <Img
        className="h-96 w-full rounded-lg object-cover object-center"
        src={`${process.env.PUBLIC_URL}/image0.jpg`}
        alt="GT Grade 2018"
      />
    </div>
  );
}
