import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import logo from '../../assets/images/logo.png';
import Icon from 'react-native-vector-icons/Entypo';

const { width: WIDTH } = Dimensions.get('window');
var colorTextInput = '#FFFFFF';

export default class Iniciar_Sesion extends Component {

    static navigationOptions = {
        title: 'Inicio de Sesión',
        headerStyle: {
            backgroundColor: '#648a64',
        },
        headerTitleStyle: {
            color: '#FFFFFF'
        }
    }

    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if (!this.state.press) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>

                <ScrollView>

                    <View style={styles.inputTextContainer}>

                        <View style={styles.logoContainer}>
                            <Image source={logo} style={styles.logoStyle} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Número Telefónico'}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <Icon name='phone' color='#FFFFFF' size={20} style={styles.inputIconStyle} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Contraseña'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <Icon name='lock-open' color='#FFFFFF' size={20} style={styles.inputIconStyle} />

                            <TouchableOpacity style={styles.eyeBtnStyle} onPress={this.showPass.bind(this)}>
                                <Icon name={this.state.press == false ? 'eye' : 'eye-with-line'} color='#FFFFFF' size={20} />
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.loginBtnStyle} onPress={this.loginBtn}>
                            <Text style={styles.textBtnStyle}>Acceder</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputIconStyle: {
        position: 'absolute',
        top: 12,
        left: 34,
    },

    eyeBtnStyle: {
        position: 'absolute',
        top: 12,
        right: 34,
    },

    textContainer: {
        alignItems: 'center',
        backgroundColor: colorTextInput,
        marginTop: 20
    },

    labelStyle: {
        fontSize: 15,
        color: '#000000',
    },

    logoStyle: {
        width: 120,
        height: 76,
    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },

    inputStyle: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: '#aabf7d',
        color: '#FFFFFF',
        marginHorizontal: 25,
    },

    inputContainer: {
        marginTop: 10,
    },

    inputTextContainer: {
        flex: 13,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },

    loginBtnStyle: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#648a64',
        justifyContent: 'center',
        marginTop: 20,
    },

    textBtnStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',

    },

});