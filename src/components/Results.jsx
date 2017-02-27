import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import * as actionCreators from '../action_creators';
require('../stylesheets/components/Results.scss');
export default class Results extends Component {

  getPair() {
    return this.props.pair || [];
  };

  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  };
  render() {
    return this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <div className="cc-results">
        <div className="tally">
          {this.getPair().map(entry =>
            <div key={entry} className="entry">
              <span>{entry}</span>
              <span className="voteCount">
                {this.getVotes(entry)}
              </span>
            </div>
          )}
        </div>
        <div className="management">
          <button ref="next"
                   className="next"
                   onClick={this.props.next}>
            <h1>Next</h1>
          </button>
        </div>
      </div>;
  }
};

  Results.propTypes = {
    pair: PropTypes.any,
    winner: PropTypes.string,
    next: PropTypes.func,
    tally: PropTypes.object
  };

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']) ? state.getIn(['vote', 'pair']).toArray() : [],
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(
  mapStateToProps,
  actionCreators
  )(Results);