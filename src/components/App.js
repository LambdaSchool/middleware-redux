import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchChars } from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    // 'https://swapi.co/api/people/'
    this.props.fetchChars('https://swapi.co/api/eople/');
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
        {this.props.error !== null ? <div>{this.props.error} </div> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.chars.fetching,
    fetched: state.chars.fetched,
    error: state.chars.error,
    chars: state.chars.chars
  };
};
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchChars
  }
)(App);
