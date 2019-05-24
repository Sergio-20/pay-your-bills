import React, { Component } from 'react';

import '../../public/style.css';

export default class AllBills extends Component {

  constructor()
  {
    super();

    this.state = {};

  }

  showAllBills = () => {

    const bills = this.props.allBills;

    return bills.map( (bill) => {
      return <ul className="bills-list" key={bill}>
        <li className="bill">
          <div className="company">
            <div className="logo text-center">
              <img className="col-sm-2" src={bill.busImg} alt="Netflix"/>
              <div>{ bill.businessName }</div>
            </div>
          </div>
          <div className="price">-{ bill.price }</div>
        </li>
      </ul>
    });

  };

  render() {

    return(
      <section id="AllBills" className="bg-primary">
        <div className="container">
          <div className="total-bills">
            <div className="text">Total Due: </div>
            <div className="number">$874</div>
          </div>

          <div className="recent-transactions">
            <h2>Recent Transactions:</h2>
          </div>

          <ul className="">
            { this.showAllBills() }
          </ul>

        </div>
      </section>
    );

  }

}
