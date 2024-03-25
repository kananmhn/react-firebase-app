import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';

function BackgroundColor({sendDataToParent}) {
    const [BackgroundColor, setBackgroundColor] = useState("#ffffff");
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const popover = useRef();

    const handleBackgroundColorChange = (color) => {
      setBackgroundColor(color.hex);
      sendDataToParent(color.hex);
    };

    const handleClick = () => {
      setDisplayColorPicker(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popover.current && !popover.current.contains(event.target)) {
                setDisplayColorPicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <form>
        <label>
        <span className='lable-text'>Body BG Color:</span>
        <input type="text" value={BackgroundColor} onClick={handleClick} readOnly />
        { displayColorPicker ? <div className="popover" ref={popover}>
            <SketchPicker color={BackgroundColor} onChangeComplete={handleBackgroundColorChange} />
        </div> : null }
        </label>
        </form>
    );
}

export default BackgroundColor;