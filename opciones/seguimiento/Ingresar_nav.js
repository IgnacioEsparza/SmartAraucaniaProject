import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Alert, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Textarea from 'react-native-textarea';

export default class Ingresar_nav extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     pickerSelection: '',
  //     pickerDisplayed: false
  //   }
  //   c = new Ingresar_cam();
  // }

  // static navigationOptions = {
  //   title: 'Ingresar nueva Incidencia',
  //   headerStyle: {
  //     backgroundColor: '#386C3A',
  //   },
  //   headerTitleStyle: {
  //     color: '#FFFFFF'
  //   }
  // }

  // setPickerValue(newValue) {
  //   this.setState({
  //     pickerSelection: newValue
  //   })
  //   this.togglePicker();
  // }

  // togglePicker() {
  //   this.setState({
  //     pickerDisplayed: !this.state.pickerDisplayed
  //   })
  // }

  // _onPressButton() {
  //   Alert.alert('Uwu pal que lee')
  // }

  render() {

    // const pickerValues = [
    //   {
    //     title: 'Aceras/calzadas dañadas',
    //     value: '0',
    //     icon: "android"
    //   },
    //   {
    //     title: 'Corte de agua',
    //     value: '1',
    //     icon: "alarm"
    //   },
    // ]

    return (
      <View style={styles.MainContainer}>
        {/* <View style={styles.FragmentStyle}>
          <TouchableHighlight onPress={() => this.togglePicker()} >
            <View style={styles.buttonModal}>
              <Text style={styles.text}>Seleccione el tipo de Incidencia
              <Icon name="arrow-drop-down" color='#666666' size={20} />
              </Text>
            </View>
          </TouchableHighlight>
          <View style={styles.line} />
          <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
            <View style={styles.modal}>
              {pickerValues.map((value, index) => {
                return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} >
                  <View style={styles.buttonModal}>
                    <Text style={styles.text} >
                      <Icon name={value.icon} color='#666666' size={17} />
                      {value.title}</Text>
                  </View>
                </TouchableHighlight>
              })}
              <View style={styles.line} />
              <TouchableHighlight onPress={() => this.togglePicker()} >
                <View style={styles.buttonModal}>
                  <Text style={styles.text}>Cancelar</Text>
                </View>
              </TouchableHighlight>
            </View>
          </Modal>
          <View style={styles.container}>
            <TouchableHighlight >
              <View style={styles.buttonModal}>
                <Icon name={"camera-alt"} color='#000' size={40} />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.line} />
          <View style={styles.container}>
            <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              onChangeText={this.onChange}
              defaultValue={this.state.text}
              maxLength={140}
              placeholder={'Descripcion de la incidencia....'}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
            />
          </View>
          <View style={{ paddingLeft: 120, paddingBottom: 30, paddingRight: 120, paddingTop: 10, alignContent: 'center' }}>
            <TouchableHighlight onPress={() => this._onPressButton()}>
              <View style={styles.buttonSend}>
                <Text style={styles.textSend}>Enviar
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View> */}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  BannerStyle: {
    flex: 1,
    backgroundColor: '#386C3A',
    justifyContent: 'center',
  },
  FragmentStyle: {
    flex: 15,
    backgroundColor: '#FFFFFF',
  },
  modal: {
    margin: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    borderColor: '#7aa65d',
    borderWidth: 0.5
  },
  buttonModal: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 5,
    paddingEnd: 15,
  },
  text: {
    color: '#666666',
    fontSize: 15,
  },
  line: {
    height: 0.7,
    width: "100%",
    backgroundColor: '#7aa65d'
  },
  container: {
    flex: 1,
    paddingTop: 5,
    paddingEnd: 5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textareaContainer: {
    height: 180,
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: '#7aa65d',
    borderWidth: 0.7,
  },
  textarea: {
    textAlignVertical: 'top',
    height: 150,
    fontSize: 15,
    color: '#666666',
  },
  buttonSend: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 5,
    paddingEnd: 15,
    borderColor: '#7aa65d',
    borderWidth: 1.5,
    borderRadius: 12
  },
  textSend: {
    color: '#7aa65d',
    fontSize: 15,
  },
});

// import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
// import Ingresar_cam from './Ingresar_cam';

// const Gocamera = createStackNavigator({
//   Ing_cam: {
//     screen: Ingresar_cam
//   }
// });

// AppRegistry.registerComponent('c', () => Gocamera);



