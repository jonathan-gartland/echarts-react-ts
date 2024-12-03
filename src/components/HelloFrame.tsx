import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Bike {
  brand: string;
  model: string;
  type: string;
  id: number;
  year: number;
}


function HelloFrame() {
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {

    const fetchBikeData = async () => {
      try {
        const responseb = await axios.get('http://localhost:8000/api/bikes/');
        setBikes(responseb.data);
        console.log(bikes)
      } catch (error) {
        console.error(error);
      }
    };

    fetchBikeData();

  }, []);


  return (

    <div>
      <h2 style={{ position:'relative', left: 145}} className="w-4/5 text-4xl pt-4 mt-6 border-2 border-gray-500 bg-blue-100 relative justify-center rounded-xl pb-4">Just
        Frames, need to be built up</h2>
      <table className="min-w-64 divide-y divide-gray-200 mt-4 text-sm w-4/5 mx-auto border border-gray-300 rounded-xl">
      <thead className="bg-gray-300">
        <tr>
          <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">Brand</th>
          <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">Model</th>
          <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">Type</th>
          <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">Year</th>
          <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider">Age</th>
        </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
        {bikes.map((item, index) => (
            (item.model === 'Big Sur' || item.model === 'Supercaliber') && <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.brand}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.model}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.year}</td>
              <td className="px-6 py-4 whitespace-nowrap">{2024 - item.year}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default HelloFrame;
