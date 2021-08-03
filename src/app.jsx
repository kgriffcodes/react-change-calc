import React, { Component } from 'react';

import DenominationGrid from "./components/DenominationGrid";
import Header from "./components/Header";
import Input from "./components/InputSect";
import OutcomeAlert from "./components/OutcomeAlert";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyDue: undefined,
      moneyReceived: undefined,
      alert: 'do not enter'    
    };
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row justify-content-around'>
          <div className='white-bg col-4'>
            <h2 className='mt-2'>Enter Information</h2>
            <hr />
            <div className='inputWrap p-1 pl-3'>
              <Input 
              className='moneyDue'
              name='moneyDue'
              title='Money Due:'
              />
              <Input 
                className='moneyReceived'
                name='moneyReceived'
                title='Money Received:'
              />
              <button className='m-2 mt-3 btn btn-primary'>Calculate</button>
            </div>  
          </div>

          <div className='white-bg col-7'>
            <OutcomeAlert />
            <DenominationGrid />
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
