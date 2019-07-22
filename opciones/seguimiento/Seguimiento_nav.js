
import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

class ListItem extends Component {

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
      <View style={{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
      }}>

        <Icon name='chair' color='#000000' size={40} style={{ top: 10 }} />
        < View style={{
          flex: 1,
          flexDirection: 'column',
          marginLeft: 12,
          justifyContent: 'center',
        }} >

          <Text style={{ fontSize: 16, color: '#000', marginBottom: 5 }}> {this.props.item.title}</Text>

          <View style={{ height: 0.5, width: "100%", backgroundColor: "#000" }} />

          <Text style={{ fontSize: 11, fontStyle: 'italic', marginTop: 5 }}> {this.props.item.description}</Text>

          <View style={{ height: 10, width: "100%", backgroundColor: "#ffeb3b", marginTop: 10, borderColor: '#e0e0e0', borderWidth: 1, borderRadius: 2 }} />

        </View >

        <TouchableOpacity onPress={() => { alert(`Seleccionado: ${this.props.item.title}`) }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}>
        </TouchableOpacity >

      </View >);
  }


}

class Seguimiento_nav extends Component {

  static navigationOptions = {
    title: 'Estado de Incidencias',
    headerStyle: {
      backgroundColor: '#648a64',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    }
  }

  state = {
    animation: new Animated.Value(0)
  }

  ingresarIncidenciaBtn = () => {
    this.props.navigation.navigate('Ing')
  };

  render() {
    return (

      <View style={styles.MainContainer}>

        <View style={styles.FragmentStyle}>
          <ScrollView>
            <FlatList
              data={[
                { title: 'Mobiliario Urbano Mal Estado', description: 'Arturo Prat 725' },
                { title: 'Mobiliario Urbano Mal Estado', description: 'Plaza Anibal Pinto' },
                { title: 'Semáforo Defectuoso', description: 'Avenida Caupolicán' },
              ]}
              renderItem={({ item, index }) => {
                return (<ListItem item={item} index={index} parentFlatList={this}></ListItem>);
              }}
              keyExtractor={item => item.description}
            />
          </ScrollView>
        </View>

        <View>
          <TouchableWithoutFeedback activeOpacity={0.7} onPress={this.ingresarIncidenciaBtn}>
            <Animated.View style={[styles.button, styles.insertar]}>
              <Icon name='plus' size={20} color='#ffffff'></Icon>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  FragmentStyle: {
    flex: 18,
    backgroundColor: '#FFFFFF',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#333',
    shadowOpacity: .1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  insertar: {
    backgroundColor: '#484848'
  },

  textoInsertar: {
    backgroundColor: '#ffffff',
    fontSize: 15,
  }

});

import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import Ingresar from './Ingresar_nav';
import EstadoSeguimiento from './Seg_estado';
import IngresarCam from './Ingresar_cam'

const AppNavigator = createStackNavigator({
  Inicio: { screen: Seguimiento_nav },
  Ing: { screen: Ingresar },
  Seg: { screen: EstadoSeguimiento },
  Cam: { screen: IngresarCam },
});

export default createAppContainer(AppNavigator);