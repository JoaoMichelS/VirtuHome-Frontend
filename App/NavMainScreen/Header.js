import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Header () {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/VirtuHome.png')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    header : {
        height : 100,
        paddingTop: 40,
        backgroundColor: '#252B3B',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 2
    },
    image: {
        width: 200,
        height: 35,
        alignContent: 'center',
    }
});