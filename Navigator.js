import React, { Component } from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import Seguimiento_nav from './opciones/seguimiento/Seguimiento_nav'
import Cuenta_nav from './opciones/cuenta/Cuenta_nav';
import Configuracion_nav from './opciones/configuracion/Configuracion_nav';

import Icon from 'react-native-vector-icons/Entypo';

const TabNavigator = createBottomTabNavigator({
  Cuenta: {
    screen: Cuenta_nav,
    navigationOptions: {
      tabBarLabel: 'Mi Cuenta',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='user' color={tintColor} size={24} />
      ),
    }
  },
  Seguimiento: {
    screen: Seguimiento_nav,
    navigationOptions: {
      tabBarLabel: 'Seguimiento',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='magnifying-glass' color={tintColor} size={24} />
      ),
    }
  },
  Configuracion: {
    screen: Configuracion_nav,
    navigationOptions: {
      tabBarLabel: 'Configuración',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='cog' color={tintColor} size={24} />
      ),
    }
  }
}, {
    initialRouteName: 'Seguimiento',
    order: ['Cuenta', 'Seguimiento', 'Configuracion'],
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: '#648a64',
      inactiveTintColor: 'black',
      pressColor: '#648a64',
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: '#white',
      },
      indicatorStyle: {
        backgroundColor: '#ffffff',
      }
    }
  });

export default createAppContainer(TabNavigator);