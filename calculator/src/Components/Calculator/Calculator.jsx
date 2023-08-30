import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { equalClicked, clearClicked, operatorClicked, digitClicked,} from '../../store/slices/calculatorSlice';
import './Calculator.css';
 

function Calculator() {
  const dispatch = useDispatch();
  const displayValue = useSelector((state) => state.calculator.displayValue);

  const handleDigitClick = (digit) => {
    dispatch(digitClicked(digit));
  };

  const handleOperatorClick = (operator) => {
    dispatch(operatorClicked(operator));
  };

  const handleClearClick = () => {
    dispatch(clearClicked());
  };

  const handleEqualClick = () => {
    dispatch(equalClicked());
  };

  return (
    <div className="calculator">
      <div>
        <input type="text" className="display" value={displayValue} readOnly />
      </div>
      <div className="buttons">
        
          <button onClick={() => handleDigitClick('9')}>9</button>
          <button onClick={() => handleDigitClick('8')}>8</button>
          <button onClick={() => handleDigitClick('7')}>7</button>
          <button className='operator' onClick={() => handleOperatorClick('+')}>+</button>
        
        
          <button onClick={() => handleDigitClick('6')}>6</button>
          <button onClick={() => handleDigitClick('5')}>5</button>
          <button onClick={() => handleDigitClick('4')}>4</button>
          <button className='operator' onClick={() => handleOperatorClick('-')}>-</button>
        
       
          <button onClick={() => handleDigitClick('3')}>1</button>
          <button onClick={() => handleDigitClick('2')}>2</button>
          <button onClick={() => handleDigitClick('1')}>3</button>
          <button className='operator' onClick={() => handleOperatorClick('*')}>*</button>
        
        
          <button onClick={() => handleDigitClick('0')}>0</button>
          <button onClick={() => handleClearClick()}>C</button>
          <button onClick={() => handleEqualClick()}>=</button>
          <button className='operator' onClick={() => handleOperatorClick('/')}>/</button>
        
      </div>
    </div>
  );
}

export default Calculator;