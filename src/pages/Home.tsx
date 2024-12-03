import React, {  } from 'react';
import PieChart from '../components/PieChart';
import HelloBike from '../components/HelloBike';
export default function Home() {

  return (
    <div>
      <div style={{ padding: 30, position: 'relative' }}>
        <img
          className="h-96 w-full rounded-lg object-cover object-center filter contrast-[30%]"
          // src={`${process.env.PUBLIC_URL}/2022-Santa-Cruz-Chameleon-Review_12.jpg`}
          src={`${process.env.PUBLIC_URL}/p6pb24703805.jpg`}
          alt="Gary Fisher Hoo Koo e Koo 1998"
        />
        <h1 className=" mt-8 text-blue-100" style={{ fontSize: 196,  position: 'absolute', right: 50,  left: 50, top: 60}}>Jonny's Bikes</h1>
          <div style={{left: 120, justifyContent: 'center', width: '80%'}}
               className="col mt-10 space-y-5 border-2 border-gray-500 bg-blue-100 relative justify-center rounded-xl">
              <div className="text-4xl mt-5">Bikes collected over the past 30 years</div>
              <div className="text-xl pb-4">Built with NextJS and echarts</div>
          </div>
      </div>
        <div className="row mt-6">
            <div>
            <PieChart text={'Brand'} name={'Bikes by Brand'}
                    divname={'brand'} queryname={'Brand'}/>
        </div>
        <div>

          <PieChart text={'Manufacture Country'}
                    name={'Bikes by Manufacture Country'} divname={'man_country'}
                    queryname={'manufacture country'}/>
        </div>
      </div>
      <div className="row">
        <div>
          <PieChart text={'Type'} name={'Bikes by Type'} divname={'type'}
                    queryname={'type'}/>
        </div>
        <div>
          <PieChart text={'Material'} name={'Material'}
                    queryname={'material'}
                    divname={'material'}/>
        </div>
      </div>
      <img
        className="h-96 w-full rounded-lg object-cover object-center mt-6"
        // src={`${process.env.PUBLIC_URL}/ac6150e5-b610-4d3d-86af-1af027005b52.png`}
        src={`${process.env.PUBLIC_URL}/2022-Santa-Cruz-Chameleon-Review_12.jpg`}
        alt="Santa Cruz Chameleon 2022"
      />
      <div className="" style={{ justifyContent: 'center' }}>
        <HelloBike/>
      </div>

      <img
        className="h-96 w-full rounded-lg object-cover object-center" // src={`${process.env.PUBLIC_URL}/ac6150e5-b610-4d3d-86af-1af027005b52.png`}
        src={`${process.env.PUBLIC_URL}/image0.jpg`}
        alt="GT Grade 2018"
      />

    </div>
  );
}
