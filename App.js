import React, { Component } from 'react';
import { View } from 'react-native';
import Navegador from './Navegador';

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navegador></Navegador>
        {/* <Navegator></Navegator> */}
      </View>
    );
  }
  
}