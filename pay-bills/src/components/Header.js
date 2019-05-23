import React, { Component } from 'react';

import '../../public/style.css';

export default class Header extends Component {

  constructor()
  {
    super();

    this.state = {

    };
  }

  render() {

    return(
      <header className="bg-light text-dark">
        <h2>Bills App</h2>
      </header>
    );

  }

}
