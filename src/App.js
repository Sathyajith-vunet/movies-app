import React from 'react';
import './App.css';
import Image from './components/Image/Image'
import Search1 from './components/Search/Search1';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Search1 />
      <div className="container">
        <div className="row">
        <div className="col-md-3"></div>
          <div className="col-md-3">
            <Image></Image>
          </div>
          <div className="col-md-3">
            <Details></Details>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
