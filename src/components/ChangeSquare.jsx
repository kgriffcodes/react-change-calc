import React from 'react';

function ChangeSquare(props) {
  return (
    <div className='changeContainer m-3 p-3'>
      <div className='changeType'>{props.title}</div>
      <div className='changeOutput'>{props.value}</div>
    </div>
  );
}

export default ChangeSquare;
