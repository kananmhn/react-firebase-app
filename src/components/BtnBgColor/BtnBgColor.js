import React, { useState } from 'react';


function BtnBgColor({sendDataToParent}) {
    const [BtnBgColor, setBtnBgColor] = useState("#0081c6");
    const handleBtnBgColorChange = (event) => {
      setBtnBgColor(event.target.value);
      sendDataToParent(event.target.value)
      };
    return (
        <form>
        <label>
        <span className='lable-text'>Button BG color:</span>
        <div className='color-box'><input type="color" value={BtnBgColor} onChange={handleBtnBgColorChange} />
        </div></label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
};

export default BtnBgColor;