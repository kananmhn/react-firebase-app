import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import FontColor from "./components/FontColor/FontColor";
import BackgroundColor from "./components/BackgroundColor/BacgroundColor";
import BtnBgColor from "./components/BtnBgColor/BtnBgColor";
import BtnTextColor2 from "./components/BtnTextColor/BtnTextColor";
import FontSize from "./components/FontSize/FontSize";
import LeftSideComponent from "./components/LeftSideComponent/LeftSideComponent";
function App() {
  let [fColor, setFColor] = useState("");
  let [BGColor, setBGColor] = useState("");
  let [BtnTextColor1, setBtntextColor] = useState("");
  let [BtnbgColor, setBtnbgColor] = useState("");
  let [fontSize, setfontSize] = useState("");


  function handleDataFromChildFC(data) {
    setFColor(data);
  }
  function handleDataFromChildBG(data) {
    setBGColor(data);
  }
  function handleDataFromChildBtnBg(data) {
    setBtnbgColor(data);
  }
  function handleDataFromChildBtnTxt(data) {
    setBtntextColor(data);
  }
  function handleDataFromChildFontSize(data) {
    setfontSize(data);
  }
 
  fetch('http://localhost:3001/api/color-id')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      console.log('Data from server:', data); // Log the entire data object
      const color_id = data.color_id;
      const fColor = data.fontColor;
      const BGColor = data.backgroundColor;
      const BtnTextColor1 = data.BtnTextColor;
      const BtnbgColor = data.BtnBgcolor;
      const fontSize = data.fontSize;
      localStorage.setItem('color_id', color_id);
      localStorage.setItem('fColor', fColor);
      localStorage.setItem('BGColor', BGColor);
      localStorage.setItem('BtnTextColor1', BtnTextColor1);
      localStorage.setItem('BtnbgColor', BtnbgColor);
      localStorage.setItem('fontSize', fontSize);
     
  })
  .catch(error => {
      console.error('Error:', error);
  });

  const applyColor = () => {
  
    console.log(fColor, BGColor, BtnTextColor1, BtnbgColor, fontSize);

    if (!fColor) {
      fColor = localStorage.getItem('fColor'); 
  }
  if (!BGColor) {
      BGColor = localStorage.getItem('BGColor');
  }
  if (!BtnTextColor1) {
      BtnTextColor1 = localStorage.getItem('BtnTextColor1');
  if (!BtnbgColor) {
      BtnbgColor =  localStorage.getItem('BtnbgColor');
  }
  if (!fontSize) {
      fontSize =localStorage.getItem('fontSize');
  }
    
    // Send a request to the server to update the JSON file
    fetch('http://localhost:3001/api/update-color', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fontColor: fColor,
        backgroundColor: BGColor,
        BtnTextColor: BtnTextColor1,
        BtnBgcolor: BtnbgColor,
        fontSize: fontSize,
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
  };
}
  return (
    <div className="App">
      <Header />
      <div className="max-container">
        <div className="row content-wrapper">
          <div className="col-lg-3 left-section">
            <h3 className="sidebar-title">Select Your Theme</h3>
            <FontColor sendDataToParent={handleDataFromChildFC} />
            <BackgroundColor sendDataToParent={handleDataFromChildBG} />
            <BtnBgColor sendDataToParent={handleDataFromChildBtnBg} />
            <BtnTextColor2 sendDataToParent={handleDataFromChildBtnTxt} />
            <FontSize sendDataToParent={handleDataFromChildFontSize} />
            <button className="apply-color" onClick={applyColor}>Apply Color</button>
          </div>
          <div className="col-lg-9 right-section" style={{  backgroundColor: BGColor }}>
             <LeftSideComponent fColor={fColor} BGColor={BGColor} BtnTextColor1={BtnTextColor1} BtnbgColor={BtnbgColor} fontSize={fontSize}/>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default App;