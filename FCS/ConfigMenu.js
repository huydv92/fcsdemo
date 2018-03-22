// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/components/Login';
import HomeView from './src/components/HomeView';

const ConfigMenu = () => {
  return (
    <Router  >
      <Scene key="root" >
        <Scene key={'Login'} component={Login} initial hideNavBar />
        <Scene key={'HomeView'} component={HomeView} hideNavBar type = {"reset"} />
      </Scene>
    </Router>
  )
}
export default ConfigMenu