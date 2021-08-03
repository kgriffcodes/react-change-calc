import React from 'react';
import ChangeSquare from './ChangeSquare';

function DenominationGrid() {
  return (
    <div className='denominationGrid'>
      <div className='denomRow1 row justify-content-around'>
        <ChangeSquare className='twenties' title='Twenties' value='' />
        <ChangeSquare className='tens' title='Tens' value='' />
        <ChangeSquare className='fives' title='Fives' value='' />
        <ChangeSquare className='ones' title='Ones' value='' />
      </div>
      <div className='denomRow2 row justify-content-around'>
      <ChangeSquare className='quarters' title='Quarters' value='' />
      <ChangeSquare className='dimes' title='Dimes' value='' />
      <ChangeSquare className='nickels' title='Nickels' value='' />
      <ChangeSquare className='pennies' title='Pennies' value='' />
      </div>
    </div>
  );
}

export default DenominationGrid;
