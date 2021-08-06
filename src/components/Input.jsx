/* eslint-disable react/jsx-indent */
import React from 'react';

function Input(props) {
  return (
      <div>
        <label className='row'>{props.title}</label>
        <input 
          name={props.name}
          value={props.value}
          className='row' 
          type='number'
          placeholder={props.placeholder} 
          step='0.01'
          onChange={props.changeInput}
        >
        </input>
      </div>
  );
}

export default Input;
