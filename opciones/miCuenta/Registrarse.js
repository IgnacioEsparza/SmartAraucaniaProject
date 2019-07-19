import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Registrarse extends Component {
    static navigationOptions = {
        title: 'Registro',
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
                <Text style={{ fontSize: 15, color: '#000000' }}> Registro</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
});