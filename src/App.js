import './App.css';
import React from 'react';
import SideBar from './components/sidebar'
import NavBar from './components/navbar'
import Canvas from './components/canvas'

function App() {
  return (
    <div id="parent" >
      <NavBar/>
      <div id="parent2">
        <SideBar />
        <Canvas />
      </div>
      <button className="btn btn-primary" type="button" id="GenerateBtn">Generate</button>
    </div>
  );
}

export default App;
