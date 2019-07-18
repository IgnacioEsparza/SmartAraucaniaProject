//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button } from 'react-native';
// import all basic components

export default class Ingresar_nav extends Component {

  static navigationOptions = {
    title: 'Ingresar Incidencias',
    headerStyle: {
      backgroundColor: '#386C3A',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    }
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 15, color: '#000000' }}> Ingresar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});