import React, { Component, PropTypes } from 'react';
require('../stylesheets/components/Winner.scss');
export default class Winner extends Component{
  render() {
    return <div className="cc-winner">
      <h1>Winner is {this.props.winner}!</h1>
    </div>;
  }
};

  Winner.propTypes = {
    winner: PropTypes.string
  };