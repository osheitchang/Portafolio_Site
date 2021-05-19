import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./Header";
import Portafolio from "./Portafolio"

function App() {
  return (
    <div className="App">
      <Header />
      <Portafolio />
      {/* Interactive Part */}
      {/* Footer */}
    </div>
  );
}

export default App;
