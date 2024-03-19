import React, { useState } from "react";
import "./App.css";
import  Header from "./components/Header/Header";

function App() {
  const [fontColor, setFontColor] = useState("#333");

  // Function to update font color
  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const applyColor = () => {
    // Apply color to background

    // Send a request to the server to update the JSON file
    fetch('http://localhost:3001/api/update-color', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fontColor: fontColor,
      }),
    });
  };

  return (
    <div className="App">
         <Header />
     
      <input type="color" value={fontColor} onChange={handleFontColorChange} />
      <button onClick={applyColor}>Apply Color</button>
    </div>
  );
}

export default App;