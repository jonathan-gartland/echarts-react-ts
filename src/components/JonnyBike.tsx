
// interface Bike {
//   brand: string;
//   model: string;
//   type: string;
//   id: number;
//   year: number;
// }

function JonnyBike() {
  const bikes = [
    {
      "model": "Backwoods",
      "brand": "GT",
      "type": "mtb",
      "year": 1994,
      "material": "aluminum",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Grade",
      "brand": "GT",
      "type": "gravel",
      "year": 2016,
      "material": "carbon",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Timberline",
      "brand": "GT",
      "type": "mtb",
      "year": 1996,
      "material": "steel",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Grade",
      "brand": "GT",
      "type": "gravel",
      "year": 2018,
      "material": "carbon",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Corsa 2.0",
      "brand": "GT",
      "type": "road",
      "year": 2013,
      "material": "steel",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Chameleon",
      "brand": "Santa Cruz",
      "type": "mtb",
      "year": 2018,
      "material": "aluminum",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Chameleon",
      "brand": "Santa Cruz",
      "type": "mtb",
      "year": 2022,
      "material": "aluminum",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Hightower",
      "brand": "Santa Cruz",
      "type": "mtb",
      "year": 2022,
      "material": "aluminum",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Hoo Koo e Koo",
      "brand": "Gary Fisher",
      "type": "mtb",
      "year": 1998,
      "material": "steel",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Hoo Koo e Koo",
      "brand": "Gary Fisher",
      "type": "mtb",
      "year": 1998,
      "material": "steel",
      "frame only": 0,
      "manufacture country": "TW"
    },
    {
      "model": "Paragon",
      "brand": "Gary Fisher",
      "type": "mtb",
      "year": 1996,
      "material": "aluminum",
      "frame only": 0,
      "manufacture country": "US"
    },
    {
      "model": "Verailles",
      "brand": "Lemond",
      "type": "road",
      "year": 2006,
      "material": "steel/carbon",
      "frame only": 0,
      "manufacture country": "US"
    },
    {
      "model": "Arrivee",
      "brand": "Lemond",
      "type": "road",
      "year": 2003,
      "material": "titanium",
      "frame only": 0,
      "manufacture country": "US"
    },
    {
      "model": "Big Sur",
      "brand": "Gary Fisher",
      "type": "mtb",
      "year": 2002,
      "material": "aluminum",
      "frame only": 1,
      "manufacture country": "US"
    },
    {
      "model": "Supercaliber",
      "brand": "Gary Fisher",
      "type": "mtb",
      "year": 1996,
      "material": "carbon",
      "frame only": 1,
      "manufacture country": "US"
    },
    {
      "model": "Unknown",
      "brand": "Unknown",
      "type": "fixed",
      "year": 2010,
      "material": "steel",
      "frame only": 0,
      "manufacture country": "CN"
    }
  ];
  // const [bikes, setBikes] = useState<Bike[]>([]);

  // useEffect(() => {
  //   const fetchBikeData = async () => {
  //     try {
  //       const responseb = await axios.get('http://localhost:8000/api/bikes/');
  //       setBikes(responseb.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //
  //   fetchBikeData();
  // }, []);

  return (
      <div>
        <div>
          <h2 className="w-4/5 text-4xl left-36 px-36 pt-4 mt-6 border-2 border-gray-500 bg-blue-100 relative justify-center rounded-xl pb-4">Bikes:
            Rideable or within a tune up of being rideable</h2>
          <table
              className="min-w-64 divide-y divide-gray-200 mt-4 text-sm w-4/5 mx-auto border border-gray-300 rounded-xl">
            <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-3 font-bold text-gray-500 uppercase tracking-wider">id</th>
              <th className="px-4 py-3 font-bold text-gray-500 uppercase tracking-wider">brand</th>
              <th className="px-4 py-3 font-bold text-gray-500 uppercase tracking-wider">model</th>
              <th className="px-4 py-3 font-bold text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 font-bold text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-4 py-3 font-bold text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-4 py-3 font-sm font-bold text-gray-500 uppercase tracking-wider">Manufactured</th>
              <th className="px-4 py-3 font-bold text-gray-500 uppercase tracking-wider">Material</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {bikes.map((item, index) => (
                // item.model !== 'Supercaliber' && item.model !== 'Big Sur' && (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}>

                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-blue-gray-700 font-normal">{index + 1}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-blue-gray-700 font-normal">{item.brand}</span>
                  </td>
                  <td className="px-8 py-4 whitespace-nowrap">
                    <span
                        className="text-blue-gray-700 font-normal">{item.model}{item["frame only"] === 1 && " (Frame)"}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-blue-gray-700 font-normal">{item.type}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-blue-gray-700 font-normal">{item.year}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-blue-gray-700 font-normal">{2024 - item.year}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-blue-gray-700 font-normal">{item["manufacture country"]}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-blue-gray-700 font-normal">{item.material}</span>
                  </td>
                </tr>
                // )
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default JonnyBike;
