import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header.js';

export default function Notifications() {
    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Notificações</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#252B3B', 
    },

    title: {
        color: '#FECE00',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 50,
        marginBottom: 20,
    },
});