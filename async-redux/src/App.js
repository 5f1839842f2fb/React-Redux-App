import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { testAction } from './rootreducer'

const App = props => {

  const click = () => {
    props.testAction()
  }

  return (
    <div className="App" onClick={click}>
      <h1>{props.title}</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

export default connect(mapStateToProps, { testAction })(App)
