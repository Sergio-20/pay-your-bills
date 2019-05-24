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

  render() {

    return(
      <div id="bills-app">
        <Header />
        <AllBills />
        <AddBill isAddingBill={ this.state.isAddingBill } />
        <FloatingMenu toggleNewBill={this.toggleNewBillStatus} />
      </div>
    );

  }

}
