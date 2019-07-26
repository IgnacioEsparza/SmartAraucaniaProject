import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text,
    View, FlatList, TouchableOpacity,
    Image, SafeAreaView
} from 'react-native';

import {createAppContainer, createDrawerNavigator } from 'react-navigation';

import Drawer from 'react-native-drawer'
import MyNotificationsScreen from './opciones/cuenta/Cuenta_nav';
import MyHomeScreen from './opciones/seguimiento/Seguimiento_nav';


const MyDrawerNavigator = createDrawerNavigator({
    Home: { screen: MyHomeScreen, },
    Notifications: { screen: MyNotificationsScreen, },
},{
    // contentComponent: 
});

export default createAppContainer(MyDrawerNavigator);

