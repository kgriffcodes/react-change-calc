import React from 'react';
import ChangeSquare from './ChangeSquare';

function DenominationGrid(props) {
  return (
    <div className='denominationGrid'>
      <div className='denomRow1 row justify-content-around'>
        <ChangeSquare title='Twenties' value={props.state.twenties}  />
        <ChangeSquare title='Tens' value={props.state.tens}  />
        <ChangeSquare title='Fives' value={props.state.fives}  />
        <ChangeSquare title='Ones' value={props.state.ones} />
      </div>
      <div className='denomRow2 row justify-content-around'>
      <ChangeSquare title='Quarters' value={props.state.quarters} />
      <ChangeSquare title='Dimes' value={props.state.dimes} />
      <ChangeSquare title='Nickels' value={props.state.nickels} />
      <ChangeSquare title='Pennies' value={props.state.pennies} />
      </div>
    </div>
  );
}

export default DenominationGrid;
