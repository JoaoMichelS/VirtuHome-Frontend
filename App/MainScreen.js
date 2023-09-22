import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

function MainScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.favs}>Favorites</Text>
            <Text style={styles.functions}>Functions</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container : {
        flex: 1,
        backgroundColor: '#252B3B', 
    },
    favs : {
        color: '#FECE00',
        textAlign: 'center',
        fontWeight : 'bold',
        flex: 0.5,
    },
    functions : {
        color: '#FECE00',
        textAlign: 'center',
        fontWeight : 'bold',
    }
});