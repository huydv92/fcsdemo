// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MovieComponent from './src/components/MovieComponent';

export default class ConfigMenu extends Component{
  render(){
    return(
      <Router  >
        <Scene key="root" hideNavBar>
          <Scene key={'MovieComponent'} component={MovieComponent}  />
        </Scene>
      </Router>
      
    );
  }
}
