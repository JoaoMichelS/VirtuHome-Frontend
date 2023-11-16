import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
import Header from './Header';

export default function ChangePassword({ navigation }) { 

    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Change Password</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#252B3B',
    },
    title: {
      color: '#FECE00',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 30,
    }
  });