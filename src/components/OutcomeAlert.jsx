import React from 'react';

function OutcomeAlert(props) {
  if(props.changeDue >= 0){
    return (
      <div className={'outcomeAlerts pt-3 mt-3 text-center green-bg ' + props.className}>
        <p className={props.className}>The total change due is ${props.changeDue}.</p>
      </div>
    );
  } else {
      let stillOwe=(props.changeDue * -1) 
      return (
        <div className={'outcomeAlerts pt-3 mt-3 text-center red-bg ' + props.className}>
          <p>You still owe ${stillOwe}.</p>
        </div>
      );
    }
}

export default OutcomeAlert;
