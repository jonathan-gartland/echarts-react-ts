import React, { useEffect } from "react";
import * as echarts from "echarts";

type EChartsOption = echarts.EChartsOption;

const PieChart2: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main2")!;
    const myChart = echarts.init(chartDom);
    const option: EChartsOption = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ["Model", "Brand", "Manufacture Country", "Type", "Material"],
          ["Backwoods", "GT", "TW", "mtb", "aluminum"],
          ["Grade", "GT", "TW", "gravel", "carbon"],
          ["Timberline", "GT", "TW", "mtb", "steel"],
          ["Grade", "GT", "TW", "gravel", "carbon"],
          ["Corsa 2.0", "GT", "TW", "road", "steel"],
          ["Chameleon", "Santa Cruz", "TW", "mtb", "aluminum"],
          ["Chameleon", "Santa Cruz", "TW", "mtb", "aluminum"],
          ["Hightower", "Santa Cruz", "TW", "mtb", "aluminum"],
          ["Hoo Koo e Koo", "Gary Fisher", "TW", "mtb", "steel"],
          ["Hoo Koo e Koo", "Gary Fisher", "TW", "mtb", "steel"],
          ["Paragon", "Gary Fisher", "US", "mtb", "aluminum"],
          ["Verailles", "Lemond", "US", "road", "steel/carbon"],
          ["Arrivee", "Lemond", "US", "road", "titanium"],
          ["Big Sur", "Gary Fisher", "US", "mtb", "aluminum"],
          ["Supercaliber", "Gary Fisher", "US", "mtb", "carbon"],
          ["Unknown", "Unknown", "CN", "fixed", "steel"],
        ],
      },
      series: [
        {
          type: "pie",
          radius: "20%",
          center: ["25%", "30%"],
          encode: {
            itemName: "Brand",
            value: "Brand",
          },
        },
        {
          type: "pie",
          radius: "20%",
          center: ["75%", "30%"],
          encode: {
            itemName: "Type",
            value: "Type",
          },
        },
        {
          type: "pie",
          radius: "20%",
          center: ["25%", "75%"],
          encode: {
            itemName: "Manufacture Country",
            value: "Manufacture Country",
          },
        },
        {
          type: "pie",
          radius: "20%",
          center: ["75%", "75%"],
          encode: {
            itemName: "Material",
            value: "Material",
          },
        },
      ],
    };

    myChart.setOption(option);

    // Resize chart on window resize
    // window.addEventListener("resize", myChart.resize);

    // Cleanup on component unmount
    return () => {
      // window.removeEventListener("resize", myChart.resize);
      myChart.dispose();
    };
  }, []);

  return <div id="main2" style={{ width: "900px", height: "400px" }}></div>;
};

export default PieChart2;
