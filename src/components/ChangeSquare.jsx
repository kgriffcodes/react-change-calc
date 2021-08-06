import React from 'react';

function ChangeSquare(props) {
  const changeType = props.className;

  return (
    <div className='changeContainer text-center m-3 p-3'>
      <div className='changeType' title={props.title}>{props.title}</div>
      <div className='changeOutput change'>{props.value}</div>
    </div>
  );
}

export default ChangeSquare;
