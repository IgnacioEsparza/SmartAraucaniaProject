import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

class Cuenta_nav extends Component {

  static navigationOptions = {
    title: 'Ingresar Incidencias',
    headerStyle: {
      backgroundColor: '#648a64',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    }
  }

  loginBtn = () => {
    this.props.navigation.navigate('InSesion')
  };

  registrarBtn = () => {
    this.props.navigation.navigate('Reg')
  };

  render() {
    return (
      <View style={styles.MainContainer}>

        <View style={styles.textContainer}>
          <Text style={styles.labelStyle}>Deseas Unirte ?</Text>
        </View>

        <View style={styles.btnContainer}>

          <TouchableOpacity style={styles.loginBtnStyle} onPress={this.loginBtn}>
            <Text style={styles.textBtnStyle}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtnStyle} onPress={this.registrarBtn}>
            <Text style={styles.textBtnStyle}>Registrarse</Text>
          </TouchableOpacity>

        </View >

        <View style={styles.textContainer}>
          <Text style={styles.labelStyle}>Ojo Ciudadano</Text>
          <Text style={styles.labelStyle}>Smart Araucanía © 2019</Text>
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  BannerStyle: {
    flex: 1,
    //marginStart: 10,
    justifyContent: 'center',
    backgroundColor: '#648a64',
    alignItems: 'stretch',
    padding: 10,
  },

  labelStyle: {
    fontSize: 15,
    color: '#000000',
  },

  textContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    marginTop: 20
  },

  btnContainer: {
    flex: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginBtnStyle: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#648a64',
    justifyContent: 'center',
    marginTop: 20,
  },

  textBtnStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',

  }
});

import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import IniciarSesion from './Iniciar_Sesion';
import Registrarse from './Registrarse';

const AppNavigator = createStackNavigator({
  Inicio: { screen: Cuenta_nav },
  InSesion: {screen: IniciarSesion},
  Reg: {screen: Registrarse}
});

export default createAppContainer(AppNavigator);