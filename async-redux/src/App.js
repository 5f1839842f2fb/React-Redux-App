import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getPosition } from './rootreducer'

const App = props => {

  useEffect(() => {
    props.getPosition()
  },[])

  const click = () => {
    props.getPosition()
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

export default connect(mapStateToProps, { getPosition })(App)
