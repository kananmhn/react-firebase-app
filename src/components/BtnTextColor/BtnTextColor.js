import React, { useState } from 'react';


function BtnTextColor({sendDataToParent}) {
    const [BtnTextColor1, setBtnTextColor] = useState("#FFFFFF");
    const handleBtnTextColorChange = (event) => {
      setBtnTextColor(event.target.value);
      sendDataToParent(event.target.value)
      };
    return (
        <form>
        <label>
        <span className='lable-text'> Button Text Color:</span>
        <div className='color-box'><input type="color" value={BtnTextColor1} onChange={handleBtnTextColorChange} />
        </div></label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
};

export default BtnTextColor;