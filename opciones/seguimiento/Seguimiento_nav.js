
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import ListShape from '../seguimiento/Adapter_list_seguimiento'

export default class Seguimiento_nav extends Component {
  //Screen3 Component

  ingresarIncidenciaBtn = () => {
    //function to handle click on floating Action Button
    Alert.alert('Ingresar Incidencia');
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

        <View style={styles.BannerStyle}>
          <Text style={{ fontSize: 15, color: '#FFFFFF' }}> Estado de Incidencias</Text>
        </View>

        <View style={styles.FragmentStyle}>
          <FlatList
            data={[
              { title: 'Mobiliario Urbano Mal Estado', description: 'Arturo Prat 725' },
              { title: 'Mobiliario Urbano Mal Estado', description: 'Plaza Anibal Pinto' },
              { title: 'Semáforo Defectuoso', description: 'Avenida Caupolicán' },
            ]}
            renderItem={({ item }) => <ListShape title={item.title} description={item.description}/>}
          />
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.ingresarIncidenciaBtn}
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
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});