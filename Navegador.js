	
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Ingresar_nav from './opciones/seguimiento/Ingresar_nav';
import Seguimiento_nav from './opciones/seguimiento/Seguimiento_nav';
import Cuenta_nav from './opciones/cuenta/Cuenta_nav';
import Configuracion_nav from './opciones/configuracion/Configuracion_nav';
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./assets/images/drawer-150x150.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Ingresar_nav will be indexed here
  First: {
    screen: Ingresar_nav,
    navigationOptions: ({ navigation }) => ({
      title: 'Ingresar Incidencia',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#eeeeee',
      },
      headerTintColor: '#000000',
    }),
  },
});
 
const Seguimiento_nav_StackNavigator = createStackNavigator({
  //All the screen from the Seguimiento_nav will be indexed here
  Second: {
    screen: Seguimiento_nav,
    navigationOptions: ({ navigation }) => ({
      title: 'Seguimiento',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#eeeeee',
      },
      headerTintColor: '#000000',
    }),
  },
});
 
//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Cuenta_nav_StackNavigator = createStackNavigator({
  //All the screen from the Cuenta_nav will be indexed here
  Third: {
    screen: Cuenta_nav,
    navigationOptions: ({ navigation }) => ({
      title: 'Mi Cuenta',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#eeeeee',
      },
      headerTintColor: '#000000',
    }),
  },
});

const Configuracion_nav_StackNavigator = createStackNavigator({
  //All the screen from the Cuenta_nav will be indexed here
  Third: {
    screen: Configuracion_nav,
    navigationOptions: ({ navigation }) => ({
      title: 'Configuración',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#eeeeee',
      },
      headerTintColor: '#000000',
    }),
  },
});
 
//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({
//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
 
  Seguimiento_nav: {
    //Title
    screen: Seguimiento_nav_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Seguimiento',
    },
  },
  Ingresar_nav: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Ingresar Incidencia',
    },
  },
  Cuenta_nav: {
    //Title
    screen: Cuenta_nav_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Mi Cuenta',
    },
  },
  Configuracion_nav: {
    screen: Configuracion_nav_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Configuración',
    },
  },
});


export default createAppContainer(DrawerNavigatorExample);
