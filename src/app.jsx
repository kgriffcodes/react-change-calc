import React, { Component } from 'react';

import InputSect from './components/InputSect';
import DenominationGrid from './components/DenominationGrid';
import OutcomeAlert from './components/OutcomeAlert';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyDue: undefined,
      moneyReceived: undefined,
      alert: false    
    };
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-4'>
            <InputSect />
          </div>
          <div className='col-8'>
            <OutcomeAlert />
            <DenominationGrid />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
