import React, { useEffect } from 'react';
import './App.css';
import ReactMapboxGl, { Marker} from 'react-mapbox-gl';
import { connect } from 'react-redux'
import { getPosition } from './rootreducer'

import ACCESS_TOKEN from './mapboxtoken'

const App = props => {
  const Map = ReactMapboxGl({
    accessToken:
      ACCESS_TOKEN
  });

  useEffect(() => {
    props.getPosition()
    console.log(props.lat, props.long)
  },[])

  const click = () => {
    props.getPosition()
  }

  return (
    <div className="App">
      <h1 onClick={click}>{props.title}</h1>
      {props.title ?
      <Map center={[props.long, props.lat]} zoom={[5]} style="mapbox://styles/mapbox/streets-v9" containerStyle={{ height: '90vh', width: '90vw' }}>
        <Marker
          coordinates={[props.long, props.lat]}
          anchor="center">
          <img src={'https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/512/international-space-station-icon.png'}
          style={{maxWidth: "5rem"}}/>
        </Marker>
      </Map> : null }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.title,
    lat: state.latitude,
    long: state.longitude
  }
}

export default connect(mapStateToProps, { getPosition })(App)
