
import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from 'react-native';
import { List, ListItem } from "react-native-elements";

import ListShape from '../seguimiento/Adapter_list_seguimiento';
import Icon from 'react-native-vector-icons/FontAwesome';


class Seguimiento_nav extends Component {

  static navigationOptions = {
    title: 'Estado de Incidencias',
    headerStyle: {
      backgroundColor: '#386C3A',
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

  transicionSeguimientoBtn = () => {
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

        <View style={styles.FragmentStyle}>
          <ScrollView>
            <FlatList
              data={[
                { title: 'Mobiliario Urbano Mal Estado', description: 'Arturo Prat 725' },
                { title: 'Mobiliario Urbano Mal Estado', description: 'Plaza Anibal Pinto' },
                { title: 'Semáforo Defectuoso', description: 'Avenida Caupolicán' },
              ]}
              renderItem={({ item }) => <ListShape title={item.title} description={item.description} />}
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

import Ingresar from '../Ingresar_nav';

const AppNavigator = createStackNavigator({
  Inicio: { screen: Seguimiento_nav },
  Ing: { screen: Ingresar },
});

export default createAppContainer(AppNavigator);