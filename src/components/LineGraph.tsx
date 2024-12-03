import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function LineGraph() {

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  return (
    <div>
      <h1>Line Graph</h1>
      <ReactECharts option={option} style={{ height: '500px' }}/>
    </div>
  );
}
