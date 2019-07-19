import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

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

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 15, color: '#000000' }}> Inicio de Sesión</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
});