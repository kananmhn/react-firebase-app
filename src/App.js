import React, { useState } from "react";
import "./App.css";
import "./css/_color.scss";

function App() {
  const [fontColor, setFontColor] = useState("#333");
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  // Function to update font color
  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const applyColor = () => {
    // Apply color to background
    setBackgroundColor(fontColor);

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
      <input type="color" value={fontColor} onChange={handleFontColorChange} />
      <button onClick={applyColor}>Apply Color</button>
    </div>
  );
}

export default App;