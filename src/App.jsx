import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {

  const [colour, setColour] = useState("#ffffff");
  document.body.style.background = colour;

  //--------
  const randNum = () => {
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    return hexArray[Math.floor(Math.random() * hexArray.length)];
  };

  const getColour = () => {
    let hex = "#" + randNum() + randNum() + randNum() + randNum() + randNum() + randNum();
    return hex;

  };

  //----------------------------

  const handleClick = () => {
    setColour(getColour);
  }

  return (
    <div className="App">
      <div className="colourBox">
        <h1>colour is:</h1>
        <h2>{colour}</h2>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};


export default App;
