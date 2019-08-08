import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Mensaje from "./components/mensaje";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./components/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Eiichi Matsuo</h1>
      <Mensaje/>
    </div>
  );
}

export default App;
