// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/components/Login';
import MovieComponent from './src/components/MovieComponent';

const ConfigMenu = () => {
  return (
    <Router  >
      <Scene key="root" >
        <Scene key={'Login'} component={Login} initial hideNavBar />
        <Scene key={'MovieComponent'} component={MovieComponent} />
      </Scene>
    </Router>
  )
}
export default ConfigMenu