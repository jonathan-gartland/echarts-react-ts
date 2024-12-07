import React, { FC, useEffect, useState } from "react";
import { Img } from "react-image";
import PieChart from "../components/PieChart";
import JonnyBike from "../components/JonnyBike";
import "../global.css";

interface AboutProps {
  isLoading: boolean;
}

const About: FC<AboutProps> = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <div className="spinner-container flex flex-col space-y-1.5">
          <div className="spinner"></div>
          <div>Loading ...</div>
        </div>
      ) : (
        <div className="mx-auto text-left">
          <TextView />
        </div>
      )}
    </div>
  );
};

const TextView: React.FC = () => {
  return (
    <div className="mx-auto mt-10 component-width">
      <div className="rounded-2xl p-10 bg-blue-100 space-y-4 text-lg border-2 border-gray-500 mt-5">
        <div className="mb-10 text-3xl">
          <h1>
            Delayed Loading component, and a brief description of the
            infographic SPA
          </h1>
        </div>
        <div>
          <p>
            {"🙏"} Apologies for the loading delay for this component when
            opening the view, I added the loading prop so I would have a
            component to write a test against for the loading state(s).
            Otherwise this simple text would load immediately and not steal
            three seconds of your time.
          </p>
          <br />
          <p>
            The &#34;Jonny&#39;s Bikes&#34; SPA was originally built as a full
            NextJS, Django Rest Framework, and PostgreSQL app. Why such
            firepower for a data set of 14+/- bikes? I had three primary goals
            in mind.
          </p>
          <br />
          <p>
            First to practice with Django as the back end rest framework using
            an existing PostgreSQL database, in order to keep my python testing
            skills up to speed.
          </p>
          <br />
          <p>
            Second, utilize the echarts {"📈"} module to create some interesting
            visual components that could be integrated into a React App, which
            leads into the third goal.
          </p>
          <p>
            Practice React development to get stronger with testing, deployment,
            automation, etc... of React and React Native apps.
          </p>
          <br />
          <p>
            This example has been stripped down and simplified so it doesn&#39;t
            depend on an api, router, or a backend server running somewhere
            accessible. The detail in the database has been collected into a
            list of simple json objects and I refactored the charts and table to
            use the list instead of the rest API.
          </p>
          <br />
          <p>
            {"🚲"} My bicycle stable, collection, hoard... is a nice simple
            dataset to use for a fun SPA. Technically a few are family bikes,
            but I take care of and maintain them.
          </p>
          <p>
            Any other relevant detail will be on the github repository page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div style={{ padding: 30, position: "relative" }}>
        <Img
          className="h-64 w-full rounded-lg object-cover object-center filter "
          src={`/p6pb24703805.jpg`}
          alt="Gary Fisher Hoo Koo e Koo 1998"
        />
        <h1
          className="mt-8 text-blue-100 absolute mx-28  -top-6"
          style={{ fontSize: 196 }}
        >
          Jonny&#39;s Bikes
        </h1>
        <div className="col mt-10 space-y-5 border-2 border-gray-500 bg-blue-100 relative justify-center rounded-xl">
          <div className="text-4xl mt-5 mx-80">
            Bikes collected over the past 30 years
            <div className="text-2xl pb-4 mt-4 mx-[120px]">
              Built with NextJS and echarts
            </div>
          </div>
        </div>
        <div>
          <Img
            className="mx-auto h-96 w-full rounded-xl object-cover object-center mt-6 component-width mx-6"
            src={`/echarts-react-ts/GTTimberlineFS1996.jpg`}
            alt="Santa Cruz Chameleon 2022"
          />
        </div>
      </div>

      <About isLoading={isLoading} />
      <Img
        className="mx-auto h-96 w-full rounded-xl object-cover object-center mt-6 component-width"
        src={`/echarts-react-ts/2022-Santa-Cruz-Chameleon-Review_12.jpg`}
        alt="Santa Cruz Chameleon 2022"
      />
      <div className="col mt-10 space-y-5 border-2 border-gray-500 bg-blue-100 relative justify-center rounded-xl component-width">
        <div className="text-4xl pb-4 mt-4 mx-48 mb-8 mt-8">
          Some mildly interesting breakdowns of the bike collection
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
        <div>
          <Img
            className="mx-auto h-96 w-full rounded-xl object-cover object-center mt-6 component-width mx-6"
            src={`/echarts-react-ts/GTTimberlineFS1996.jpg`}
            alt="Santa Cruz Chameleon 2022"
          />
        </div>
        <div className="justify-center">
          <JonnyBike />
        </div>
      </div>

      <Img
        className="h-96 w-full rounded-lg object-cover object-center component-width"
        src={`/echarts-react-ts/ac6150e5-b610-4d3d-86af-1af027005b52.png`}
        alt="GT Grade 2018"
      />
    </div>
  );
}
