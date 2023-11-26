import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header';

export default function Transactions({ navigation, route}) {

  const [transactions, setTransactions] = useState([]);

  const NewTransaction = () => {
    navigation.navigate('NewTransaction', { userId: route.params.userId })
  };

  const NewAccount = () => {
    navigation.navigate('NewAccount', { userId: route.params.userId })
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Gastos</Text>
      <View style={styles.ContainerContent}>
        <ScrollView>
          <Text style={styles.ContainerTransaction}>
            <Text style={styles.Transaction}></Text>
          </Text>
        </ScrollView>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Button} onPress={NewTransaction}>
          <Text style={styles.Add}>Adicionar Transação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button2} onPress={NewAccount}>
          <Text style={styles.Add2}>Adicionar Conta</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  }, 

  ContainerContent: {
    flex: 1.15,
  },

  ContainerTransaction: {
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#FFFFFF', 
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 5,
  },

  Transaction: {
    fontWeight: 'bold',
    fontSize: 20,
  }, 

  ButtonContainer: {
    flex: 0.6,
    marginBottom: 50, 
    alignItems: 'center', 
    flexDirection: 'column',
  },

  Button: {
    backgroundColor: "#FECE00",
    borderWidth: 2, 
    borderColor: '#FECE00', 
    borderRadius: 5, 
    padding: 10, 
    width: 200,
    marginTop: 25,
    height: 50,
    alignSelf: 'center',
  },

  Button2: {
    padding: 10, 
    width: 160,
    marginTop: 12,
    alignSelf: 'center',
  },

  Add: {
    alignSelf: 'center',
    fontWeight: "bold", 
    fontSize: 18,
   },

   Add2: {
    alignSelf: 'center',
    fontWeight: "bold", 
    fontSize: 16,
    color: '#FECE00',
   },

});