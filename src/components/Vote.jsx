import React, { Component, PropTypes } from 'react';
require('../stylesheets/components/Vote.scss');
export default class Vote extends Component {
  
  getPair(){
    return this.props.pair || [] ;
  };
 
  isDisabled(){
    return !!this.props.hasVoted;
  };

  hasVotedFor(entry){
    return this.props.hasVoted === entry;
  };

  render() {
    return <div className="cc-voting">
      {this.getPair().map((entry, id) =>{ 
         let button_number = "vote_button_" + id; 
        return( 
        <button className = {button_number}
                key={entry}
                disabled={this.isDisabled()}
                onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
          {this.hasVotedFor(entry) ?
            <div className="label-voted">Voted</div> :
            null}
        </button>
        );
        
      })}
    </div>;
  }
};

Vote.propTypes = {
  pair: PropTypes.any,
  hasVoted: PropTypes.string
};