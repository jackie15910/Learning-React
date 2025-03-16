import React from 'react'
import { useState } from 'react';
import "../style.css"



const Toggle = () => {
    const [backgroundColor,setBackgroundColor] = useState('white');
    const [textColor,setTextColor] = useState('#1b1b1b');
    const [buttonStyle,setButtonStyle] = useState('white');

    const handleClick = () => {
      setBackgroundColor(backgroundColor =='#1b1b1b' ? 'white' : '#1b1b1b');
      setTextColor(textColor =='white' ? '#1b1b1b' : 'white');
      setButtonStyle(buttonStyle == '#1b1b1b' ? 'white' : '#1b1b1b');
  }

  return (
  <div style={{backgroundColor, color:textColor}}>
    <button onClick={handleClick}
    style={{buttonStyle,
    color: textColor,
    border: `2px solid ${textColor}`}}
    >
    {backgroundColor === '#1b1b1b' ? 'Dark Mode' : 'Light Mode'}
    </button>

    <section>
      <h1>Welcome to the <br/>
      Real World...</h1>
      </section>
      <p>Click the button to toggle the background color</p>
  </div>
  )
};

export default Toggle;