import React, { useEffect } from 'react';
import LinearRegression from '../graphs/linearregression';
import bikes from '../data/bikes.json';
const MyComponent: React.FC = () => {
  useEffect(() => {
    LinearRegression();
  }, []);

  return (
    <div id="mycomponent" style={{ position: 'relative', left: '100px', width: '600px', height: '400px' }}></div>
  );
}

export default MyComponent;
