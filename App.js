import React, { Component } from 'react';
import { View } from 'react-native';
import Navegador from './Navegador';
import Navigator from './Navigator'

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Navegador></Navegador> */}
        <Navigator></Navigator>
      </View>
    );
  }
  
}