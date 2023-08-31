import React, { useState } from 'react';
import './Calculator.css';
 

function Calculator() {
const [display, setDisplay] = useState("")

  const handleClick = (e) => {
    setDisplay(display.concat(e.target.name));
  };

 
  const handleClearClick = () => {
    setDisplay("")
  };

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  }

  const handleEqualClick = () => {
    try {
      setDisplay(eval(display).toString())
    } catch(err) {
      setDisplay("Error")
    }
  };

  return (
    <div className='container'>
    <div className="calculator">
      <div>
        <input type="text" className="display" value={display} readOnly />
      </div>
      <div className="buttons">
        
          <button className='Clear' onClick={ handleClearClick }>Clear</button>
          <button onClick={ backspace }>DEL</button>
          <button name='+' className='operator' onClick={handleClick}>+</button>
          
          <button name='9' onClick={ handleClick }>9</button>
          <button name='8' onClick={ handleClick }>8</button>
          <button name='7' onClick={ handleClick }>7</button>
          <button name='-' className='operator' onClick={ handleClick }>-</button>
        
        
          <button name='6' onClick={ handleClick }>6</button>
          <button name='5' onClick={ handleClick }>5</button>
          <button name='4' onClick={ handleClick }>4</button>
          <button name='*' className='operator' onClick={ handleClick }>*</button>
        
       
          <button name='1' onClick={ handleClick }>1</button>
          <button name='2' onClick={ handleClick }>2</button>
          <button name='3' onClick={ handleClick }>3</button>
          <button name='/' className='operator' onClick={ handleClick }>/</button>
        
        
          <button name='0' onClick={ handleClick }> 0 </button>
          <button name='.' onClick={ handleClick }> . </button>
          <button className='Equel' name='=' onClick={ handleEqualClick }>=</button>

        
      </div>
    </div>
    </div>
  );
}

export default Calculator;