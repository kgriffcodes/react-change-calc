import React from 'react';
import ChangeSquare from './ChangeSquare';

function DenominationGrid() {
  return (
    <div className='denominationGrid'>
      <ChangeSquare className='twenties' />
      <ChangeSquare className='tens' />
      <ChangeSquare className='fives' />
      <ChangeSquare className='ones' />
      <ChangeSquare className='quarters' />
      <ChangeSquare className='dimes' />
      <ChangeSquare className='nickels' />
      <ChangeSquare className='pennies' />
    </div>
  );
}

export default DenominationGrid;
