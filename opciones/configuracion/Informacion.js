import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Informacion extends Component {

    static navigationOptions = {
        title: 'Información',
        headerStyle: {
            backgroundColor: '#648a64',
        },
        headerTitleStyle: {
            color: '#FFFFFF'
        }
    }

    render() {

        var iconSize = 30;

        return (
            <View style={styles.MainContainer}>
                <ScrollView>

                    <View style={styles.textContainer} >
                        <Text style={styles.textStyle}>Botón Agregar Incidencia</Text>
                        <Icon name='ios-add-circle' size={iconSize} color='#000000' style={styles.iconStyle}></Icon>
                    </View>

                    <View style={styles.colorLineContainer}>
                        <Text style={styles.infoTextStyle}>Con este botón se podrá ingresar incidencias</Text>
                        <Text style={styles.infoDescripcionStyle}>El botón se encuentra en la pantalla principal,
                        si la incidencia resulta no ser verdadera o inviable, esta quedará rechazada.
                        En caso de actividades con malas intenciones, el usuario quedará baneado de la aplicación.</Text>
                    </View>

                    <View style={styles.lineContainer}>
                        <View style={styles.lineaOptionStyle} />
                    </View>

                    <View style={styles.textContainer} >
                        <Text style={styles.textStyle}>Colores de Estados</Text>
                        <Icon name='ios-color-palette' size={iconSize} color='#000000' style={styles.iconStyle}></Icon>
                    </View>

                    <View style={styles.colorLineContainer}>
                        <Text style={styles.infoTextStyle}>Enviado</Text>
                        <View style={[styles.colorLineStyle, { backgroundColor: '#00b3ff' }]} />
                        <Text style={styles.infoDescripcionStyle}>Este estado se muestra cuando recién se ha enviado la incidencia detectada.</Text>
                    </View>

                    <View style={styles.lineContainerEstados}>
                        <View style={styles.lineaOptionStyle} />
                    </View>

                    <View style={styles.colorLineContainer}>
                        <Text style={styles.infoTextStyle}>Aceptado</Text>
                        <View style={[styles.colorLineStyle, { backgroundColor: '#008f39' }]} />
                        <Text style={styles.infoDescripcionStyle}>Este estado se muestra cuando la petición ha sido aceptada.</Text>
                    </View>

                    <View style={styles.lineContainerEstados}>
                        <View style={styles.lineaOptionStyle} />
                    </View>

                    <View style={styles.colorLineContainer}>
                        <Text style={styles.infoTextStyle}>Rechazado</Text>
                        <View style={[styles.colorLineStyle, { backgroundColor: '#ff0000' }]} />
                        <Text style={styles.infoDescripcionStyle}>Este estado se muestra cuando la petición ha sido rechazada.</Text>
                    </View>

                    <View style={styles.lineContainerEstados}>
                        <View style={styles.lineaOptionStyle} />
                    </View>

                    <View style={styles.colorLineContainer}>
                        <Text style={styles.infoTextStyle}>En Proceso</Text>
                        <View style={[styles.colorLineStyle, { backgroundColor: '#ffb300' }]} />
                        <Text style={styles.infoDescripcionStyle}>Este estado se muestra una vez la
                        petición fue aceptada, y se encuentra en proceso de solución.</Text>
                    </View>

                    <View style={styles.lineContainerEstados}>
                        <View style={styles.lineaOptionStyle} />
                    </View>

                    <View style={styles.colorLineContainer}>
                        <Text style={styles.infoTextStyle}>Finalizado</Text>
                        <View style={[styles.colorLineStyle, { backgroundColor: '#8c8c8c' }]} />
                        <Text style={styles.infoDescripcionStyle}>Este estado se muestra una vez la
                        petición fue procesada correctamente y la incidencia detectada ha sido solucionada.</Text>
                    </View>

                    <View style={styles.lineContainerEstados}>
                        <View style={styles.lineaOptionStyle} />
                    </View>

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    lineaOptionStyle: {
        height: 1,
        width: "90%",
        backgroundColor: '#648a64'
    },

    lineContainer: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    lineContainerEstados: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    textContainer: {
        marginTop: 20,
        marginBottom: 20
    },

    textStyle: {
        fontSize: 20,
        color: '#000',
        paddingLeft: 50,
    },

    infoTextStyle: {
        fontSize: 16,
        color: '#000',
    },

    infoDescripcionStyle: {
        fontSize: 12,
        color: '#000',
        marginTop: 5,
        paddingRight: 30,
        justifyContent: 'space-around'
    },

    iconStyle: {
        position: 'absolute',
        left: 12,
        top: -3
    },

    colorLineStyle: {
        height: 10,
        width: "50%",
        marginTop: 5,
        borderColor: '#8c8c8c',
        borderWidth: 1,
        borderRadius: 2
    },

    colorLineContainer: {
        marginTop: 5,
        paddingLeft: 30
    }

});