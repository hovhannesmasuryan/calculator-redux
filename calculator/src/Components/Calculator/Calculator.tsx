import React, { useState } from 'react';
import './Calculator.css'; 

function  Calculator(): JSX.Element {
const [display, setDisplay] = useState<string>("")

const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const target = e.target as HTMLButtonElement; 
  setDisplay(display.concat(target.name));
};
 
  const handleClearClick = (): void => {
    setDisplay("")
  };

  const backspace = (): void => {
    setDisplay(display.slice(0, -1));
  }

  const handleEqualClick = (): void => {
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
        
          <button className='Clear' onClick={handleClearClick }>Clear</button>
          <button onClick={ backspace }>DEL</button>
          <button name='+' className='operator' onClick={(e) => handleClick(e)}>+</button>
          
          <button name='9' onClick={(e) => handleClick(e) }>9</button>
          <button name='8' onClick={ (e) => handleClick(e) }>8</button>
          <button name='7' onClick={(e) => handleClick(e) }>7</button>
          <button name='-' className='operator' onClick={ (e) => handleClick(e)}>-</button>
        
        
          <button name='6' onClick={ (e) => handleClick(e) }>6</button>
          <button name='5' onClick={(e) => handleClick(e) }>5</button>
          <button name='4' onClick={(e) => handleClick(e) }>4</button>
          <button name='*' className='operator' onClick={ (e) => handleClick(e) }>*</button>
        
       
          <button name='1' onClick={ (e) => handleClick(e) }>1</button>
          <button name='2' onClick={ (e) => handleClick(e) }>2</button>
          <button name='3' onClick={ (e) => handleClick(e) }>3</button>
          <button name='/' className='operator' onClick={(e) => handleClick(e) }>/</button>
        
        
          <button name='0' onClick={(e) => handleClick(e) }> 0 </button>
          <button name='.' onClick={ (e) => handleClick(e) }> . </button>
          <button className='Equel' name='=' onClick={ handleEqualClick }>=</button>

        
      </div>
    </div>
    </div>
  );
}

export default Calculator;