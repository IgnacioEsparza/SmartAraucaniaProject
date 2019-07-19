import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
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
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

transicionSeguimientoBtn = () => {
    alert('Madre mía')
};

const CustomRow = ({ title, description /*, image_url, estado_url */ }) => (
    <View style={styles.container}>
        {/* <Image source={{ uri: image_url }} style={styles.photo} /> */}
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={{ height: 0.5, width: "100%", backgroundColor: "#000" }} />
            <Text style={styles.description}>
                {description}
            </Text>
            <TouchableOpacity onPress={() => { Alert.alert(`Madre mía: ${this.props.title}`); }}
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}>
            </TouchableOpacity >
        </View>
        {/* <Image source={{ uri: estado_url }} style={styles.photo} /> */}
    </View>
);

export default CustomRow;