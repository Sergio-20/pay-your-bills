import React, { Component } from 'react';
import Header from './Header';
import AllBills from './AllBills';
import FloatingMenu from './FloatingMenu';
import AddBill from './AddBill';

import '../../public/style.css';

export default class BillsApp extends Component {

  constructor()
  {
    super();

    this.state = {
      allBills: [],
      isAddingBill: false
    };
  }

  toggleNewBillStatus = () => {
    this.setState( prevState => ({
      isAddingBill: !prevState.isAddingBill
    }));
  };

  saveBill = ( bill ) => {
    this.setState( prevState => ({
      allBills: [...prevState.allBills, bill]
    }));
    console.log(this.state);
  };

  render() {

    return(
      <div id="bills-app">
        <Header />
        <AllBills allBills={this.state.allBills} />
        <AddBill isAddingBill={ this.state.isAddingBill } saveBill={ this.saveBill } />
        <FloatingMenu toggleNewBill={this.toggleNewBillStatus} />
      </div>
    );

  }

}
