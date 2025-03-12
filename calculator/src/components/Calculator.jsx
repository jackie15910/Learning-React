import React from 'react'
import { useState } from 'react';
import "../style.css"

const Calculator = () => {
    const [inputValue,setInputValue] = useState('');

    const clear = () => {
      setInputValue('');
    }
    const display = () => {
      setInputValue('');
    }
    const calculate = () => {
      setInputValue('');
    }

  return (
  <div>
    <form className='calculator'>
      <span className='num clear' onClick={() => clear()}>c</span>
      <input type='text' className='value' value={inputValue}></input>
      <span className='' onClick={() => display('8')}>8</span>
      <span className='' onClick={() => display('9')}>9</span>
      <span className='' onClick={() => display('-')}>-</span>
      <span className='' onClick={() => display('4')}>4</span>
      <span className='' onClick={() => display('5')}>5</span>
      <span className='' onClick={() => display('6')}>6</span>
      <span className='plus' onClick={() => display('+')}>+</span>

      <span className='' onClick={() => display('8')}>1</span>
      <span className='' onClick={() => display('9')}>2</span>
      <span className='' onClick={() => display('-')}>3</span>
      <span className='' onClick={() => display('4')}>00</span>
      <span className='' onClick={() => display('5')}>.</span>
      <span className='num equal' onClick={() => calculate()}>=</span>
    </form>
  </div>
  )
};

export default Calculator;