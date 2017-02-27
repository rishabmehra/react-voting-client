import React, { Component, PropTypes } from 'react';
import {List, Map} from 'immutable';
require('../stylesheets/components/App.scss');

export default class App extends Component {
  render() {
    return this.props.children;
  }
};

  App.propTypes = {
    children: PropTypes.object,
    Route: PropTypes.object,
    path: PropTypes.string
  };