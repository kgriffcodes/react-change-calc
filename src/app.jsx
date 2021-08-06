import React, { Component } from 'react';

import DenominationGrid from "./components/DenominationGrid";
import Header from "./components/Header";
import Input from "./components/Input";
import OutcomeAlert from "./components/OutcomeAlert";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: undefined,
      amountReceived: undefined,
      changeDue: 0,
      twenties: undefined,
      tens: undefined,
      fives: undefined,
      ones: undefined,
      quarters: undefined,
      dimes: undefined,
      nickels: undefined,
      pennies: undefined,
      alertVal: false   
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  calculate(){
    //assign state values to variables
    const totalCost = this.state.amountDue;
    const amtTendered = this.state.amountReceived;
    let changeDue = (amtTendered - totalCost);
    //round to he nearest hundredth place
    changeDue = (Math.round(100*changeDue)/100).toFixed(2); 
    console.log(changeDue);

    // calculate exact dollars and coins due
    let twentiesDue = Math.floor(changeDue/20);
    let dollarsSans20 = (changeDue % 20);

    let tensDue = Math.floor(dollarsSans20/10);
    let dollarsSans10 = (dollarsSans20 % 10);

    let fivesDue = Math.floor(dollarsSans10/5);
    let dollarsSans5 = (dollarsSans10 % 5);

    let singlesDue = Math.floor(dollarsSans5/1);
    let coinsDue = (dollarsSans5 % 1).toFixed(2);

    let quartersDue = Math.floor(coinsDue/0.25);
    let coinsSansQuartDue = coinsDue % 0.25;

    let dimesDue = Math.floor(coinsSansQuartDue/0.10);
    let coinsSansDimesDue = coinsSansQuartDue % 0.10;

    let nickelsDue = Math.floor(coinsSansDimesDue/0.05);
    let coinsSansNickelsDue = coinsSansDimesDue % 0.05;

    let penniesDue = Math.round(coinsSansNickelsDue / 0.01);

    //display answers
    this.setState({
      changeDue: changeDue,
      twenties: twentiesDue,
      tens: tensDue,
      fives: fivesDue,
      ones: singlesDue,
      quarters: quartersDue,
      dimes: dimesDue,
      nickels: nickelsDue,
      pennies: penniesDue,
      alertVal: true
    });
    console.log(this.state)
  }

  render() {

    return (
      <div className='container'>
        <Header />
        <div className='row justify-content-around'>
          <div className='white-bg col-4 text-center'>
            <h2 className='mt-2'>Enter Information</h2>
            <hr />
            <div className='inputWrap p-1 ml-4'>
              <Input 
              className='amountDue'
              name='amountDue'
              title='Money Due:'
              placeholder='$0.00'
              value={ this.state.amountDue }
              changeInput={ this.handleChange }
              />
              <Input 
                className='amountReceived'
                name='amountReceived'
                title='Money Received:'
                placeholder='$0.00'
                value={ this.state.amountReceived }
                changeInput={ this.handleChange }
              />
              <button 
              onClick={ this.calculate }
              className='m-2 mt-3 btn btn-primary'>
                Calculate
              </button>
            </div>  
          </div>

          <div className='white-bg col-7 p-4'>
            <OutcomeAlert 
              changeDue={this.state.changeDue} 
              className={ this.state.alertVal ? 'display' : 'displayNone' }
            />
            <DenominationGrid state={this.state} />
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
