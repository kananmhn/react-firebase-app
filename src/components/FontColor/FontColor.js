import React, { useState } from 'react';
// import { SketchPicker } from 'react-color';
// import ColorPicker from 'react-pick-color';

function FontColor({sendDataToParent}) {
    const [fontColor, setFontColor] = useState("#000");
    const handleFontColorChange = (event) => {
        setFontColor(event.target.value);
        sendDataToParent(event.target.value);
      };
    return (
        <form>
        <label>
          <span className='lable-text'>Font Color:</span>
          <div className='color-box'>
          <input type="color" value={fontColor} onChange={handleFontColorChange} />
          </div>
          {/* <ColorPicker /> */}
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
};

export default FontColor;