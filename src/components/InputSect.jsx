/* eslint-disable react/jsx-indent */
import React from 'react';

function Input(props) {
  return (
      <div>
        <label className='row'>{props.title}</label>
        <input className='row' type='number' step='0.01'></input>
      </div>
  );
}

export default Input;
