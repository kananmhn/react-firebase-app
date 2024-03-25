import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import FontColor from "./components/FontColor/FontColor";
import BackgroundColor from "./components/BackgroundColor/BacgroundColor";
import BtnBgColor from "./components/BtnBgColor/BtnBgColor";
import BtnTextColor1 from "./components/BtnTextColor/BtnTextColor";
import FontSize from "./components/FontSize/FontSize";
import LeftSideComponent from "./components/LeftSideComponent/LeftSideComponent";
function App() {
  const [fColor, setFColor] = useState("");
  const [BGColor, setBGColor] = useState("");
  const [BtnTextColor, setBtntextColor] = useState("");
  const [BtnbgColor1, setBtnbgColor] = useState("");
  const [fontSize, setfontSize] = useState("");


  // // Function to update font color
  // const handleFontColorChange = (event) => {
  //   setFontColor(event.target.value);
  // };
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

  const applyColor = () => {
    // Apply color to background

    // Send a request to the server to update the JSON file
    fetch('http://localhost:3001/api/update-color', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fontColor: fColor,
        backgroundColor: BGColor,
        BtnTextColor: BtnTextColor,
        BtnBgcolor: BtnbgColor1
      }),
    });
  };

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
            <BtnTextColor1 sendDataToParent={handleDataFromChildBtnTxt} />
            <FontSize sendDataToParent={handleDataFromChildFontSize} />
            <button className="apply-color" onClick={applyColor}>Apply Color</button>
          </div>
          <div className="col-lg-9 right-section" style={{  backgroundColor: BGColor }}>
             <LeftSideComponent fColor={fColor} BGColor={BGColor} BtntextColor={BtnTextColor} BtnbgColor1={BtnbgColor1} fontSize={fontSize}/>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default App;