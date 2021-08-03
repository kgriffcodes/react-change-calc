/* eslint-disable react/jsx-indent */
import React from 'react';

function InputSect() {
  return (
      <div>
        <input 
          className='moneyDue'
          name='moneyDue'
        />
        <input 
          className='moneyReceived'
          name='moneyReceived'
        />
        <button className='btn btn-primary'>Calculate</button>
      </div>
  );
}

export default InputSect;
