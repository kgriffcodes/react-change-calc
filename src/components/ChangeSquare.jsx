import React from 'react';

function ChangeSquare() {
  return (
    <div className='changeContainer'>
      <div className='changeType'>{ this.state.name }</div>
      <div className='changeOutput' />
    </div>
  );
}

export default ChangeSquare;
