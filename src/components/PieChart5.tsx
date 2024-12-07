import React, { FC, useEffect } from "react";
import * as echarts from "echarts";

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

interface BikeProps {
  name: string;
  text: string;
  divname: string;
  queryname: string;
  subtext?: string;
}

const PieChart5: FC<BikeProps> = ({
  text,
  name,
  divname,
  queryname,
  subtext,
}: BikeProps) => {
  useEffect(() => {
    const chartDom = document.getElementById(divname)!;
    const myChart = echarts.init(chartDom);

    const data = flatBikesData
      .slice(1)
      .reduce((acc: { [key: string]: number }, bike) => {
        const key = bike[flatBikesData[0].indexOf(queryname)] as string;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});

    const chartData = Object.entries(data).map(([key, value]) => ({
      name: key,
      value,
    }));

    const option: echarts.EChartsOption = {
      title: {
        text: text,
        subtext: subtext !== undefined ? subtext : "",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: name,
          type: "pie",
          radius: "40%",
          data: chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  }, [text, name, divname, queryname, subtext]);

  return (
    <div
      id={divname}
      className="flex justify-center items-center"
      style={{ width: "450px", height: "300px" }}
    ></div>
  );
};

export default PieChart5;
