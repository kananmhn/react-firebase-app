import React, { useState } from 'react';


function BackgroundColor({sendDataToParent}) {
    const [BackgroundColor, setBackgroundColor] = useState("#ffffff");
    const handleBackgroundColorChange = (event) => {
      setBackgroundColor(event.target.value);  
      sendDataToParent(event.target.value);
      };
    return (
        <form>
        <label>
        <span className='lable-text'>Body BG:</span>
          <div className='color-box'><input type="color" value={BackgroundColor} onChange={handleBackgroundColorChange} />
        </div></label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
};

export default BackgroundColor;