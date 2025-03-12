import React from 'react'
import { useState } from 'react';
import "../style.css"

const Toggle = () => {
    const [backgroundColor,setBackgroundColor] = useState('white');
    const [textColor,setTextColor] = useState('#1b1b1b');
    const [buttonStyle,setButtonStyle] = useState('white');

  return (
  <div style={{backgroundColor, color:textColor}}>
    <button onClick={handleClick}
    style={{buttonStyle,
    color: textColor,
    border: `2px solid ${textColor}`}}
    >
    {backgroundColor === '#1b1b1b' ? 'Dark Mode' : 'Light Mode'}
    </button>
  </div>
  )
};

export default Toggle;