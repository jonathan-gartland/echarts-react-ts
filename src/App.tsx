import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Page from './pages/mypage/Page';

import './App.css';
import { Route, Link, Routes, useLocation } from "react-router-dom";
//import Page from './pages/Page';

function App() {

  // function RootLink() {
  //   const location = useLocation();
  //
  //   if (location.pathname === '/') {
  //     return null; // Don't render the link if at root
  //   }
  //   return <Link to="/" style={{ position: 'relative', left: -60}}>Home</Link>;
  // }

  function RouterRoutes() {
    return (
      <div className="App" style={{ position: 'relative'}}>
        <header style={{ left: 120, justifyContent: 'center', width: '80%' }} className=" mt-4 space-x-16 border-2 border-gray-500 bg-blue-100 relative justify-center rounded-xl">
          {/*{RootLink()}*/}
          <Link to={"/"} className="px-4 py-2 text-xl text-blue-500 hover:text-blue-700">The Bikes</Link>
          <Link to={"/mypage/mypage"} className="px-4 py-2 text-xl text-blue-500 hover:text-blue-700">Fake Age Restriction</Link>
          <Link to={"/about"} className="px-6 py-2 text-xl text-blue-500 hover:text-blue-700">About</Link>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About initialLoading={true}/>}/>
            <Route path="/mypage/mypage" element={<Page/>}/>
          </Routes>
        </div>
      </div>
    );
  }

  // @ts-ignore
  return (<RouterRoutes/>);
}

export default App;
