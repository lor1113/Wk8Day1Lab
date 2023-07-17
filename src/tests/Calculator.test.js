import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let calculator;
  beforeEach(() => {
    container = render(<Calculator/>)
    calculator = Calculator
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add numbers', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should be able to subtract numbers', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to multiply numbers', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should be able to divide numbers', () => {
    const button7 = container.getByTestId('number7');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to concatenate number clicks', () => {
    const button7 = container.getByTestId('number7');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217');
  })

  it('should be able to chain operations', () => {
    const button7 = container.getByTestId('number7');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonAdd);
    fireEvent.click(button2);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('25');
  })

  it('should be able to clear the running total without affecting the output', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonClear = container.getByTestId('clear');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('98');
  })
})

