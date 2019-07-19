//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

export default class Cuenta_nav extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.BannerStyle}>
          <Text style={{ fontSize: 22, color: '#FFFFFF' }}>Mi Cuenta</Text>
        </View>

        <View style={styles.FragmentStyle}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  },

  BannerStyle: {
    flex: 1,
    //marginStart: 10,
    justifyContent: 'center',
    backgroundColor: '#386C3A',
    alignItems: 'stretch',
    padding: 10,
  },

  FragmentStyle: {
    flex: 13,
    backgroundColor: '#FFFFFF',
  },
});