import React, { Component } from 'react';

import '../../public/style.css';

export default class AddBill extends Component {

  constructor()
  {
    super();

    this.state = {

    };

  }

  render() {

    return(
      <section id="add-bill">
        <div className="container bg-primary text-light">
          <form id="add-bill-form" className="form-group text-center">
            <h2>Add Bill</h2>
            <label htmlFor="business-name" className="form-control">Business Name</label>
            <input type="text" id="business-name" className="btn btn-outline-light form-control" />
            <label htmlFor="business-name" className="form-control">Price</label>
            <input type="text" id="business-name" className="btn btn-outline-light form-control" />
            <br/><br/>
            <input type="button" className="btn btn-outline-light" value="Save" />
          </form>
        </div>
      </section>
    );

  }

}
