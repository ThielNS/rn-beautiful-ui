import React, { Component } from 'react';
import { Button as RNButton } from 'react-native';

class Button extends Component {
  render() {
    return(<Button title={this.props.title} />);
  }
}