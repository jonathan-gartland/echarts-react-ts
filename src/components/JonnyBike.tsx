import React from "react";
import { Img } from "react-image";

function JonnyBike() {
  const bikes = [
    {
      model: "Backwoods",
      brand: "GT",
      type: "mtb",
      year: 1994,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Grade",
      brand: "GT",
      type: "gravel",
      year: 2016,
      material: "carbon",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Timberline",
      brand: "GT",
      type: "mtb",
      year: 1996,
      material: "steel",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Grade",
      brand: "GT",
      type: "gravel",
      year: 2018,
      material: "carbon",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Corsa 2.0",
      brand: "GT",
      type: "road",
      year: 2013,
      material: "steel",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Chameleon",
      brand: "Santa Cruz",
      type: "mtb",
      year: 2018,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Chameleon",
      brand: "Santa Cruz",
      type: "mtb",
      year: 2022,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Hightower",
      brand: "Santa Cruz",
      type: "mtb",
      year: 2022,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Hoo Koo e Koo",
      brand: "Gary Fisher",
      type: "mtb",
      year: 1998,
      material: "steel",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Hoo Koo e Koo",
      brand: "Gary Fisher",
      type: "mtb",
      year: 1998,
      material: "steel",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Paragon",
      brand: "Gary Fisher",
      type: "mtb",
      year: 1996,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "US",
    },
    {
      model: "Verailles",
      brand: "Lemond",
      type: "road",
      year: 2006,
      material: "steel/carbon",
      "frame only": 0,
      "manufacture country": "US",
    },
    {
      model: "Arrivee",
      brand: "Lemond",
      type: "road",
      year: 2003,
      material: "titanium",
      "frame only": 0,
      "manufacture country": "US",
    },
    {
      model: "Big Sur",
      brand: "Gary Fisher",
      type: "mtb",
      year: 2002,
      material: "aluminum",
      "frame only": 1,
      "manufacture country": "US",
    },
    {
      model: "Supercaliber",
      brand: "Gary Fisher",
      type: "mtb",
      year: 1996,
      material: "carbon",
      "frame only": 1,
      "manufacture country": "US",
    },
    {
      model: "Unknown",
      brand: "Unknown",
      type: "fixed",
      year: 2010,
      material: "steel",
      "frame only": 0,
      "manufacture country": "CN",
    },
  ];

  return (
    <div>
      <div className="pb-10">
        <div className="w-4/5 text-3xl px-16 pt-4 mt-6 border-2 border-gray-500 bg-blue-300 relative justify-center rounded-xl mb-4 pb-4 component-width">
          Bikes Ready to Ride or Within a Quick Tune Up of Being Rideable...
          Plus 2 Frames
        </div>
        <Img
          className="h-80 w-full rounded-lg object-cover object-center component-width"
          src={`${process.env.PUBLIC_URL}/image0.jpg`}
          alt="GT Grade 2018"
        />
        <table className="min-w-64 divide-y divide-gray-200 mt-4 text-sm w-4/5 mx-6 component-width">
          <thead className="bg-gray-600">
            <tr>
              <th className="px-4 py-3 font-bold text-gray-200 uppercase tracking-wider text-left">
                id
              </th>
              <th className="px-4 py-3 font-bold text-gray-200 uppercase tracking-wider text-lcenter">
                brand
              </th>
              <th className="px-8 py-3 font-bold text-gray-200 uppercase tracking-wider text-center">
                model
              </th>
              <th className="px-4 py-3 font-bold text-gray-200 uppercase tracking-wider text-left">
                Type
              </th>
              <th className="px-4 py-3 font-bold text-gray-200 uppercase tracking-wider text-left">
                Year
              </th>
              <th className="px-4 py-3 font-bold text-gray-200 uppercase tracking-wider text-left">
                Age
              </th>
              <th className="px-4 py-3 font-bold text-gray-200 uppercase tracking-tighter text-center">
                Manufactured
              </th>
              <th className="px-4 py-3 font-bold text-gray-200 uppercase tracking-wider text-left">
                Material
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bikes.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-200"}
              >
                <td className="px-4 py-4 whitespace-nowrap text-left">
                  <span className="text-blue-gray-700 font-normal">
                    {index + 1}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  <span className="text-blue-gray-700 font-normal">
                    {item.brand}
                  </span>
                </td>
                <td className="px-8 py-4 whitespace-nowrap text-center">
                  <span className="text-blue-gray-700 font-normal">
                    {item.model}
                    {item["frame only"] === 1 && " (Frame)"}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-left">
                  <span className="text-blue-gray-700 font-normal">
                    {item.type}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-left">
                  <span className="text-blue-gray-700 font-normal">
                    {item.year}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-left">
                  <span className="text-blue-gray-700 font-normal">
                    {2024 - item.year}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  <span className="text-blue-gray-700 font-normal">
                    {item["manufacture country"]}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-left">
                  <span className="text-blue-gray-700 font-normal">
                    {item.material}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JonnyBike;
