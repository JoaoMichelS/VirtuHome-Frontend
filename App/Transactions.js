import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';
import NewTransaction from './NewTransaction';

export default function Transactions() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Transactions</Text>
      <TouchableOpacity style={styles.Button} >
        <Text style={styles.Add}>Adicionar Transacao </Text>
      </TouchableOpacity>
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
    paddingTop: 50,
  }, 

  Button: {
    backgroundColor: "#FECE00",
    borderWidth: 2, 
    borderColor: '#FECE00', 
    borderRadius: 5, 
    padding: 10, 
    alignSelf: 'center',
    width: 200,
    marginTop: 80,
    height: 50,
  },

  Add: {
    alignSelf: 'center',
    fontWeight: "bold",
    fontSize: 18,
   },
});