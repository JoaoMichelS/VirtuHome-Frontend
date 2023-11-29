import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header';
import axios from 'axios';
import { API_IP } from './config';

export default function Transactions({ navigation, route}) {

  const [userTransactions, setUserTransactions] = useState([]);

  const NewTransaction = () => {
    navigation.navigate('NewTransaction', { userId: route.params.userId })
  };

  const NewAccount = () => {
    navigation.navigate('NewAccount', { userId: route.params.userId })
  };

  useEffect( () => {
    const unsubscribe = navigation.addListener('focus', () => {
      async function getTransactions() {
          await axios.get(`http://${API_IP}:3000/transaction/user/${route.params.userId}`)
          .then(function (response) {
              if (response.status == 200){
                setUserTransactions(response.data);
              }
          }) 
          .catch(function (err){
              console.log("Error")
          })
    }
    getTransactions();

    if (route.params?.transactionCreated) {
      getTransactions();
    }
  });
  return unsubscribe;
  }, [navigation, route.params?.transactionCreated]);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Transações</Text>
      <View style={styles.ContainerContent}>
        <ScrollView>
          {userTransactions?.map((transaction, i) => {
            return (
            <TouchableOpacity key={i} style={styles.ContainerChamado}>
                <Text style={styles.Departamento}>
                  {transaction.type === 'expense' ? 'Despesa' : transaction.type === 'income' ? 'Receita' : 'Outro'}
                </Text>
                <Text style={styles.Assunto}>{transaction.amount}</Text>
                <Text style={styles.Assunto}>{transaction.category}</Text>
                <Text style={styles.Data}>{transaction.date}</Text>
            </TouchableOpacity>    
            );
          })}
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

   Departamento: {
    color: "#000000",
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  Assunto: {
      color: "#000000",
      fontSize: 17,
      marginTop: 10,
      marginLeft: 10,
  },

  Data: {
      fontSize: 12,
      textAlign: 'right',
      marginRight: '5%',
      bottom : 76,
      padding: -50,
      paddingTop: '5%',
  },
  
  ContainerChamado: {
    marginTop: 40,
    backgroundColor: '#FDF6BA',
    paddingTop: 15,
    paddingBottom: 20,
    borderColor: '#FDF6BA', 
    borderRadius: 12,
    width: 380,
    alignSelf: 'center',
},

});