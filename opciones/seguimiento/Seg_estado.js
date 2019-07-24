
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAw from 'react-native-vector-icons/FontAwesome';

export default class Seguimiento_nav extends Component {

  static navigationOptions = {
    title: 'Estado de Incidencias',
    headerStyle: {
      backgroundColor: '#648a64',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    }
  }

  acceptIcon(){
    var estado = this.props.navigation.state.params.data.estado;
    var iconType = 'check-square';

    if(estado == '#ff0000'){
      iconType = 'times-rectangle';
    }

    return(iconType);

  }

  stateColor() {

    var estado = this.props.navigation.state.params.data.estado;
    var colores = {};
    var verde = '#008f39';

    //enviado
    if (estado == '#00b3ff') {
      colores[0] = '#00b3ff';
      colores[1] = '#757575';
      colores[2] = '#757575';
      colores[3] = '#757575';
    }

    //rechazado
    if (estado == '#ff0000') {
      colores[0] = verde;
      colores[1] = '#ff0000';
      colores[2] = '#757575';
      colores[3] = '#757575';
    }

    //Aceptado
    if (estado == '#008f39') {
      colores[0] = verde;
      colores[1] = '#00b3ff';
      colores[2] = '#757575';
      colores[3] = '#757575';
    }

    //En proceso
    if (estado == '#ffb300') {
      colores[0] = verde;
      colores[1] = verde;
      colores[2] = '#00b3ff';
      colores[3] = '#757575';
    }

    //En finalizado
    if (estado == '#8c8c8c') {
      colores[0] = verde;
      colores[1] = verde;
      colores[2] = verde;
      colores[3] = '#00b3ff';
    }

    return (colores)

  }

  render() {

    var iconAccept = this.acceptIcon();
    var colorEstado = this.stateColor();
    var iconSize = 25;
    var data = this.props.navigation.state.params.data;

    return (
      <View style={styles.MainContainer}>

        <View style={styles.titleContainer}>
          <Text style={styles.textStyle}>{data.incidente}</Text>
          <Icon name={data.icon} size={iconSize} color='#000000' style={styles.iconStyle}></Icon>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>

        {/* Ubicacion y fecha */}

        <View style={styles.titleContainer}>
          <Text style={styles.textStyle}>Ubicación:</Text>
          <Text style={styles.subTextStyle}>{data.direccion}</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.textStyle}>Fecha:</Text>
          <Text style={styles.subTextStyle}>{data.fecha}</Text>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>

        <ScrollView>

          <View style={styles.imagenContainer}>
            <Image source={require('../../assets/images/basural.jpg')} style={styles.imagenStyle} />
          </View>

          <View style={styles.lineContainer}>
            <View style={styles.lineaOptionStyle} />
          </View>

          <View style={styles.statesContainer}>
            <Text style={styles.textStyle}>Enviado</Text>
            <IconAw name='envelope-square' size={iconSize} color={colorEstado[0]} style={styles.iconStyle}></IconAw>
          </View>

          <View style={styles.statesContainer}>
            <Text style={styles.textStyle}>Aceptado</Text>
            <IconAw name={iconAccept} size={iconSize} color={colorEstado[1]} style={styles.iconStyle}></IconAw>
          </View>

          <View style={styles.statesContainer}>
            <Text style={styles.textStyle}>En Proceso</Text>
            <IconAw name='pencil-square' size={iconSize} color={colorEstado[2]} style={styles.iconStyle}></IconAw>
          </View>

          <View style={styles.statesContainer}>
            <Text style={styles.textStyle}>Finalizado</Text>
            <IconAw name='circle-o' size={iconSize} color={colorEstado[3]} style={styles.iconStyle}></IconAw>
          </View>

        </ScrollView>

      </View>
    );
  }
}

const tam = 1.2;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  textStyle: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 55,
  },

  subTextStyle: {
    fontSize: 14,
    color: '#000',
    paddingLeft: 55,
    fontStyle: 'italic'
  },

  iconStyle: {
    position: 'absolute',
    left: 15,
    top: -3
  },

  lineaOptionStyle: {
    height: 0.9,
    width: "90%",
    backgroundColor: '#648a64'
  },

  lineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  statesContainer: {
    marginBottom: 10,
    marginTop: 10
  },

  titleContainer: {
    marginTop: 15,
    //alignItems: 'center'
  },
  imagenStyle: {
    marginTop: 15,
    width: (240 * tam),
    height: (152 * tam),
    borderColor: '#8c8c8c',
    borderWidth: 2,
    borderRadius: 5
  },

  imagenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

});