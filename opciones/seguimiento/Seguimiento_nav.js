//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
// import all basic components

export default class Seguimiento_nav extends Component {
  //Screen3 Component

  clickHandler = () => {
    //function to handle click on floating Action Button
    Alert.alert('Haz Pulsado el Botón');
  };

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <View style={styles.BannerStyle}>
          <Text style={{ fontSize: 15, color: '#FFFFFF' }}> Estado de Seguimiento</Text>
        </View>

        <View style={styles.FragmentStyle}>

        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.clickHandler}
            style={styles.TouchableOpacityStyle}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
              source={{
                uri: 'https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
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
  }
});