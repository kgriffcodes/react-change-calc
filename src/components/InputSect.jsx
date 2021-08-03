/* eslint-disable react/jsx-indent */
import React from 'react';

function InputSect() {
  return (
    <div>
    <input
      type='number'
      step='0.01'
      id='moneyDue'
      className='moneyDue'
      placeholder='money due'
      value={ this.state.moneyDue }
    />
    <input
      type='number'
      step='0.01'
      id='moneyReceived'
      className='moneyReceived'
      placeholder='money received'
      value={ this.state.moneyReceived }
    />
    <button className='btn btn-primary'>Calculate</button>
  </div>
  );
}

export default InputSect;
