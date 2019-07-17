
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, View, Text, Image } from 'react-native';

export default class Seguimiento_nav extends Component {
  

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <View style={styles.BannerStyle}>
          <Text style={{ fontSize: 15, color: '#FFFFFF' }}> Estado de Incidencias</Text>
        </View>

        <View style={styles.FragmentStyle}>
        </View>
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