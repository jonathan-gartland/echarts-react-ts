import React, { useEffect } from "react";
import * as echarts from "echarts";

type EChartsOption = echarts.EChartsOption;

const flatBikesData = [
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
];

const PieChart3: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main")!;
    const myChart = echarts.init(chartDom);

    const option: EChartsOption = {
      legend: {},
      tooltip: {},
      dataset: {
        source: flatBikesData,
      },
      series: [
        {
          type: "pie",
          radius: "20%",
          center: ["25%", "30%"],
          encode: {
            itemName: "Model",
            value: "Brand",
          },
        },
        {
          type: "pie",
          radius: "20%",
          center: ["75%", "30%"],
          encode: {
            itemName: "Model",
            value: "Manufacture Country",
          },
        },
        {
          type: "pie",
          radius: "20%",
          center: ["25%", "75%"],
          encode: {
            itemName: "Model",
            value: "Type",
          },
        },
        {
          type: "pie",
          radius: "20%",
          center: ["75%", "75%"],
          encode: {
            itemName: "Model",
            value: "Material",
          },
        },
      ],
    };

    myChart.setOption(option);
  }, []);

  return <div id="main" style={{ width: "100%", height: "500px" }}></div>;
};

export default PieChart3;
