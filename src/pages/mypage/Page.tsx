import React from "react";
import Jersey from "./jersey/Page";

const Page: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <div style={{ padding: 30, position: "relative" }}>
            <img
              className="h-96 w-full rounded-lg object-cover object-center filter contrast-[30%]"
              // src={`${process.env.PUBLIC_URL}/2022-Santa-Cruz-Chameleon-Review_12.jpg`}
              src={`/fakelogo.png`}
              alt="Fake Bourbon Logo"
            />
            {/*<h1 className=" mt-8 text-blue-100" style={{ fontSize: 196,  position: 'absolute', right: 50,  left: 50, top: 60}}>Jonny's Bikes</h1>*/}
          </div>
        </div>
        <h1></h1>
        <h2>
          Using Rugby Jerseys as stand in for alcohol. A tour through some of my
          vintage rugby jerseys and the Ulster one as well.
        </h2>
        <Jersey />
        <div style={{ width: "600px", height: "400px" }}></div>
      </div>
    </div>
  );
};

export default Page;
