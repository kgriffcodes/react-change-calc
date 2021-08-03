import React from 'react';
import ChangeSquare from './ChangeSquare';

function DenominationGrid() {
  return (
    <div className='denominationGrid'>
      <ChangeSquare name='twenties' />
      <ChangeSquare name='tens' />
      <ChangeSquare name='fives' />
      <ChangeSquare name='ones' />
      <ChangeSquare name='quarters' />
      <ChangeSquare name='dimes' />
      <ChangeSquare name='nickels' />
      <ChangeSquare name='pennies' />
    </div>
  );
}

export default DenominationGrid;
