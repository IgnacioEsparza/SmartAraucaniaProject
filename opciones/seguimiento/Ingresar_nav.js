import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Ingresar_nav extends Component {

  static navigationOptions = {
    title: 'Ingresar Incidencias',
    headerStyle: {
      backgroundColor: '#648a64',
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