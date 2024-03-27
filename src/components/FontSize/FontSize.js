import React, { useState } from 'react';


function FontSize({sendDataToParent}) {
    const [FontSize, setFontSize] = useState("16px");
    const handleBackgroundColorChange = (event) => {
      setFontSize(event.target.value);  
      sendDataToParent(event.target.value);
      };
    return (
        <form>
        <label>
        <span className='lable-text'>Font Size:</span>
          <div className='color-box'><input type="input" value={FontSize} onChange={handleBackgroundColorChange} />
        </div></label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
};

export default FontSize;