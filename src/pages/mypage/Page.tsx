import React from 'react';
import * as echarts from 'echarts';
import AgeVerification from '../../components/AgeVerification';
import Jersey from './jersey/Page';

const Page: React.FC = () => {
  const option1: echarts.EChartsOption = {
    // Chart 1 options
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }
    ]
  };

  const option2: echarts.EChartsOption = {
    // Chart 2 options
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

  return (
    <div>
      <AgeVerification>
        <div>
          <div>
            <div style={{ padding: 30, position: 'relative' }}>
              <img
                  className="h-96 w-full rounded-lg object-cover object-center filter contrast-[30%]"
                  // src={`${process.env.PUBLIC_URL}/2022-Santa-Cruz-Chameleon-Review_12.jpg`}
                  src={`${process.env.PUBLIC_URL}/fakelogo.png`}
                  alt="Gary Fisher Hoo Koo e Koo 1998"
              />
              {/*<h1 className=" mt-8 text-blue-100" style={{ fontSize: 196,  position: 'absolute', right: 50,  left: 50, top: 60}}>Jonny's Bikes</h1>*/}
            </div>
          </div>
          <h1>
          </h1>
          <h2>
            Using Rugby Jerseys as stand in for alcohol.
          </h2>
          <Jersey />
          <div style={{width: '600px', height: '400px'}}></div>
        </div>
      </AgeVerification>
    </div>
  );
};

export default Page;
