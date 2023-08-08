import React, { Component } from 'react';
import icon from '../../assets/img/icon-128.png';

class GreetingComponent extends Component {
  state = {
    name: 'devasdsa',
  };

  render() {
    return (
      <div>
        <p>Deneme, {this.state.name}!</p>
        <img src={icon} alt="extension icon" />
      </div>
    );
  }
}

export default GreetingComponent;
