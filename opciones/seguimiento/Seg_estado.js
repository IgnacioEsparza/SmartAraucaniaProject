
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Seguimiento_nav extends Component {

  static navigationOptions = {
    title: 'Estado de Incidencias',
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
        <Text style={{ fontSize: 15, color: '#FFFFFF' }}> Estado de Incidencias</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
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
    flex: 18,
    backgroundColor: '#FFFFFF',
  },
});