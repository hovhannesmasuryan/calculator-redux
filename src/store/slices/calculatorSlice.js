import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayValue: '0',
  prevValue: null,
  operator: null,
  waitingForOperand: false,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    digitClicked: (state, action) => {
      const digit = action.payload;

      if (state.waitingForOperand) {
        state.displayValue = digit;
        state.waitingForOperand = false;
      } else {
        state.displayValue =
          state.displayValue === '0' ? digit : state.displayValue + digit;
      }
    },
    operatorClicked: (state, action) => {
      const nextOperator = action.payload;
      const inputValue = parseFloat(state.displayValue);

      if (state.operator && state.waitingForOperand) {
        state.operator = nextOperator;
        return;
      }

      if (state.prevValue === null) {
        state.prevValue = inputValue;
      } else if (state.operator) {
        const result = performOperation(
          state.prevValue,
          inputValue,
          state.operator
        );
        state.displayValue = String(result);
        state.prevValue = result;
      }

      state.waitingForOperand = true;
      state.operator = nextOperator;
    },
    clearClicked: (state) => {
      state.displayValue = '0';
      state.prevValue = null;
      state.operator = null;
      state.waitingForOperand = false;
    },
    equalClicked: (state) => {
      if (state.prevValue !== null && state.operator) {
        const inputValue = parseFloat(state.displayValue);
        const result = performOperation(
          state.prevValue,
          inputValue,
          state.operator
        );
        state.displayValue = String(result);
        state.prevValue = result;
        state.operator = null;
        state.waitingForOperand = true;
      }
    },
  },
});

const performOperation = (prevValue, nextValue, operator) => {
  switch (operator) {
    case '+':
      return prevValue + nextValue;
    case '-':
      return prevValue - nextValue;
    case '*':
      return prevValue * nextValue;
    case '/':
      if (nextValue === 0) {
        alert("Can't divide by zero");
        return prevValue;
      }
      return prevValue / nextValue;
    default:
      return nextValue;
  }
};

export const {
  digitClicked,
  operatorClicked,
  clearClicked,
  equalClicked, 
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
