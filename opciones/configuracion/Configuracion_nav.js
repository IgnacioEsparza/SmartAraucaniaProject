import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Configuracion_nav extends Component {

  render() {

    var iconSize = 30;

    return (
      <View style={styles.MainContainer}>
        <View style={styles.BannerStyle}>
          <Text style={{ fontSize: 22, color: '#FFFFFF' }}> Configuración</Text>
        </View>

        <View style={styles.FragmentStyle}>

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
            <TouchableOpacity>
              <Text style={styles.textStyle}>Ayuda</Text>
              <Icon name='ios-alert' size={iconSize} color='#000000' style={styles.iconStyle}></Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.lineContainer}>
            <View style={styles.lineaOptionStyle} />
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  BannerStyle: {
    flex: 1,
    //marginStart: 10,
    justifyContent: 'center',
    backgroundColor: '#648a64',
    alignItems: 'stretch',
    padding: 10,
    marginBottom: 20
  },

  FragmentStyle: {
    flex: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 20
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