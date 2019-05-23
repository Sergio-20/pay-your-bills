import React, { Component } from 'react';

import '../../public/style.css';

export default class AllBills extends Component {

  constructor()
  {
    super();

    this.state = {};

  }

  showAllBills = () => {

    const bills = [1,2,3,4,5,6,7,8,9,10];

    return bills.map( (bill) => {
      return <ul className="bills-list" key={bill}>
        <li className="bill">
          <div className="company">
            <div className="logo text-center">
              <img className="col-sm-2" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.therichest.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fnetflix-logo.png&f=1" alt="Netflix"/>
            </div>
          </div>
          <div className="price">-$12.99</div>
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
