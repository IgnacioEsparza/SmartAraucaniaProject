import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Textarea from 'react-native-textarea';

export default class Ingresar_nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      incidentType: 'Seleccione el tipo de Incidencia',
      iconType: 'menu-down',
      desc: ''
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  static navigationOptions = {
    title: 'Ingresar Incidencia',
    headerStyle: {
      backgroundColor: '#648a64',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    }
  }

  ShowHideComponent = () => {
    this.setState({ show: !this.state.show });
  };

  updateTip(text) {
    this.setState({ incidentType: this.state.incidentType = text });
  }

  updateIcon(text) {
    this.setState({ iconType: this.state.iconType = text });
  }

  camaraBtn() {
    this.props.navigation.navigate('Cam')
  }

  handleChangeText(newText) {
    this.setState({ desc: newText })
  }

  enviarBtn() {
    Alert.alert(this.state.desc)
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.FragmentStyle}>
          <ScrollView>
            <TouchableOpacity onPress={this.ShowHideComponent}>
              <Text style={styles.text}>{this.state.incidentType}
                <Icon name='menu-down' color='#000' size={30} style={{ top: 5 }} /> </Text>
              {this.state.show ? (
                <View style={styles.MainContainer}>
                  <View style={styles.FragmentStyle}>
                    <ScrollView>
                      <FlatList data={[
                        { title: 'Micro Basural', icon: 'delete-sweep', value: '1' },
                        { title: 'Requerimeinto de Poda - Tala', icon: 'content-cut', value: '2' },
                        { title: 'Mascota Perdida', icon: 'paw', value: '3' },
                        { title: 'Poste Chocado', icon: 'close-octagon-outline', value: '4' },
                        { title: 'Contenedor de Envases de Vidrio Lleno', icon: 'delete-empty', value: '5' },
                        { title: 'Contenedor de Envases de Plástico Lleno', icon: 'delete-empty', value: '6' },
                        { title: 'Luminaria Encendida (Día)', icon: 'lightbulb-on', value: '7' },
                        { title: 'Luminaria Apagada (Noche)', icon: 'lightbulb-on-outline', value: '8' },
                        { title: 'Aceras/Calzada Dañada', icon: 'sign-caution', value: '9' },
                        { title: 'Corte de Agua', icon: 'water-pump', value: '10' },
                        { title: 'Semáforo Defectuoso', icon: 'traffic-light', value: '11' },
                        { title: 'Alcantarillado', icon: 'water-off', value: '12' },
                        { title: 'Cableado', icon: 'flash', value: '13' },
                        { title: 'Arqueta Dañada', icon: 'vector-square', value: '14' },
                        { title: 'Mobiliario Urbano en Mal Estado', icon: 'seat', value: '15' },
                        { title: 'Edificio en Mal Estado', icon: 'domain', value: '16' },]}
                        renderItem={({ item, index }) => {
                          return (<View item={item} index={index} parentFlatList={this} style={styles.containerFlat}>
                            <Icon name={item.icon} color='#000' size={30} style={{ bottom: 2 }} />
                            < View style={{ flex: 1, flexDirection: 'column', marginLeft: 12, justifyContent: 'center', }} >
                              <Text style={{ fontSize: 15, color: '#000', marginBottom: 5 }}> {item.title}</Text>
                            </View >
                            <TouchableOpacity onPress={() => { this.updateTip(item.title); this.ShowHideComponent(); this.updateIcon(item.icon) }}
                              style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                            </TouchableOpacity >
                          </View >);
                        }}
                        keyExtractor={item => item.value}
                      />
                    </ScrollView>
                  </View>
                </View>) : null}
            </TouchableOpacity>
            <View style={styles.line} />
            <View style={styles.container}>
              <TouchableHighlight onPress={() => this.camaraBtn()}>
                <View style={styles.buttonModal}>
                  <Icon name={"camera"} color='#000' size={50} />
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.line} />
            <View style={styles.container}>
              <Textarea containerStyle={styles.textareaContainer} style={styles.textarea}
                onChangeText={this.handleChangeText} defaultValue={this.state.desc} maxLength={100}
                placeholder={'Descripcion de la incidencia....'} placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'} />
            </View>
            <View style={{ paddingLeft: 120, paddingBottom: 30, paddingRight: 120, paddingTop: 10, alignContent: 'center' }}>
              <TouchableHighlight onPress={() => this.enviarBtn()}>
                <View style={styles.buttonSend}>
                  <Text style={styles.textSend}>Enviar </Text>
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </View >);
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  FragmentStyle: {
    flex: 15,
    backgroundColor: '#FFFFFF',
  },
  buttonModal: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 5,
    paddingEnd: 15,
  },
  text: {
    alignContent: 'center',
    alignSelf: 'center',
    color: '#000',
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: '#eeeeee'
  },
  container: {
    flex: 1,
    paddingTop: 5,
    paddingEnd: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSend: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 5,
    paddingEnd: 15,
    borderColor: '#7aa65d',
    borderWidth: 1.5,
    borderRadius: 12,
  },
  textSend: {
    color: '#7aa65d',
    fontSize: 15,
  },
  containerFlat: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 0,
    borderColor: '#eeeeee',
    borderWidth: 1,
  },
  textareaContainer: {
    height: 180,
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: '#eeeeee',
    borderWidth: 1,
    borderRadius: 5,
  },
  textarea: {
    textAlignVertical: 'top',
    height: 150,
    fontSize: 15,
    color: '#666666',
  },
});