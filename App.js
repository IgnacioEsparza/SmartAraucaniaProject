import React, { Component } from 'react';
import { View } from 'react-native';
import Navigator from './Navigator';
import DrawerNavigator from './DrawerNavigator';

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator></Navigator>
        {/* <DrawerNavigator></DrawerNavigator> */}
      </View>
    );
  }
  
}