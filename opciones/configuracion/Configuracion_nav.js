import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';



class Configuracion_nav extends Component {

  static navigationOptions = {
    title: 'Configuración',
    headerStyle: {
      backgroundColor: '#648a64',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    }
  }

  render() {

    var iconSize = 30;

    return (
      <View style={styles.MainContainer}>

          <View >
            <TouchableOpacity>
              <Text style={styles.textStyle}>Almacenamiento</Text>
              <Icon name='ios-archive' size={iconSize} color='#000000' style={styles.iconStyle}></Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.lineContainer}>
            <View style={styles.lineaOptionStyle} />
          </View>

          <View >
            <TouchableOpacity>
              <Text style={styles.textStyle}>Notificaciones</Text>
              <Icon name='ios-notifications' size={iconSize} color='#000000' style={styles.iconStyle}></Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.lineContainer}>
            <View style={styles.lineaOptionStyle} />
          </View>

          <View >
            <TouchableOpacity>
              <Text style={styles.textStyle}>Acerca de</Text>
              <Icon name='ios-help-circle' size={iconSize} color='#000000' style={styles.iconStyle}></Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.lineContainer}>
            <View style={styles.lineaOptionStyle} />
          </View>

          <View >
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Inf') }}>
              <Text style={styles.textStyle}>Información</Text>
              <Icon name='md-information-circle' size={iconSize} color='#000000' style={styles.iconStyle}></Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.lineContainer}>
            <View style={styles.lineaOptionStyle} />
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20
  },

  optionsContainer: {
    flex: 1
  },

  lineaOptionStyle: {
    height: 0.9,
    width: "90%",
    backgroundColor: '#648a64'
  },

  lineContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  
  textStyle: {
    fontSize: 20,
    color: '#000',
    paddingLeft: 50,
  },

  iconStyle: {
    position: 'absolute',
    left: 12,
    top: -3
  },

});

import Informacion from './Informacion';

const AppNavigator = createStackNavigator({
  Inicio: { screen: Configuracion_nav },
  Inf: { screen: Informacion},
});

export default createAppContainer(AppNavigator);