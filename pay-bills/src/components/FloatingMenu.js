import React, { Component } from 'react';

import '../../public/style.css';

export default class FloatingMenu extends Component {

  constructor()
  {
    super();

    this.state = {
      addBill: false
    };
  }

  displayForm = () => {

    if( this.state.addBill == true )
    {
      document.getElementByTagName('FORM').style.display = 'block';
    }
    else if( this.state.addBill == false )
    {
      document.getElementByTagName('FORM').style.display = 'none';
    }

  };

  toggleAddBill = () => {
    this.setState( prevState => ({
      addBill: !prevState.addBill
    }));
    console.log(this.state.addBill);
  };

  render() {

    return(
      <nav id="floating-menu">
        <div className="link">
          <div className="icon"><i className="far fa-credit-card"></i></div>
          <div className="text">Spend</div>
        </div>
        <div className="link">
          <div className="icon"><i className="fas fa-piggy-bank"></i></div>
          <div className="text">Save</div>
        </div>
        <div className="link">
          <div className="icon"><i className="fas fa-exchange-alt"></i></div>
          <div className="text">Transfer</div>
        </div>
        <div className="link">
          <div className="icon"><i className="fas fa-cogs"></i></div>
          <div className="text">Settings</div>
        </div>
        <div className="add-button bg-primary" onClick={this.toggleAddBill}>
          <div className="icon"><i className="fas fa-plus"></i></div>
        </div>
      </nav>
    );

  }

}
