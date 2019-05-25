import React, { Component } from 'react';

import '../../public/style.css';

export default class AddBill extends Component {

  constructor()
  {
    super();

    this.state = {
      busImg: 'add url here',
      businessName: 'add business name',
      price: '0'
    };

  }

  inputChange = () => {

    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value
    });

  };

  handleSubmit = () => {

    event.preventDefault();
    this.props.saveBill( this.state );

  };

  render() {

    return(
      <section id="add-bill">
        <div className="container bg-primary text-light">
          <div className={ this.props.isAddingBill === true ? 'active' : 'inactive' }>
            <form id="add-bill-form" className="form-group text-center" onSubmit={ this.handleSubmit }>
              <h2>Add Bill</h2>
              <label htmlFor="businessName" className="form-control">Business Name</label>
              <input type="text" id="businessName" className="btn btn-outline-light form-control" name="businessName" onChange={ this.inputChange } value={ this.state.businessName } />
              <br/><br/>
              <label htmlFor="price" className="form-control">Price</label>
              <input type="text" id="price" className="btn btn-outline-light form-control" name="price" onChange={ this.inputChange } value={ `${this.state.price}` } />
              <br/><br/>
              <label htmlFor="busImg" className="form-control">Logo Image</label>
              <input type="text" id="busImg" className="btn btn-outline-light form-control" name="busImg" onChange={ this.inputChange } value={ `${this.state.busImg}` } />
              <br/><br/>
              <input id="submit-btn" type="submit" className="btn btn-outline-light" value="Save" />
            </form>
          </div>
        </div>
      </section>
    );

  }

}
