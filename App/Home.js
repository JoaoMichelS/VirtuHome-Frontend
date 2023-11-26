import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { VictoryPie } from 'victory-native';
import Header from './Header';
import axios from 'axios';

export default function Home({ navigation, route}) {

  const [userAccounts, setUserAccounts] = useState([]);

  useEffect( () => {
    const unsubscribe = navigation.addListener('focus', () => {
      async function getUserAccounts() {
          await axios.get(`http://192.168.15.33:3000/account/user/${route.params.userId}`)
          .then(function (response) {
              if (response.status == 200){
                setUserAccounts(response.data);
              }
          }) 
          .catch(function (err){
              console.log("Error")
          })
    }
    getUserAccounts();

    if (route.params?.transactionCreated) {
      // Se uma nova transação foi criada, atualize a lista
      getUserAccounts();
    }
  });
  return unsubscribe;
  }, [navigation, route.params?.transactionCreated]);

  const pieData = userAccounts.map((account) => ({
    x: account.name, 
    y: parseFloat(account.balance), 
  }));

  useEffect( () => {
    const unsubscribe = navigation.addListener('focus', () => {
      async function getAccounts() {
          await axios.get(`http://192.168.15.33:3000/account/user/${route.params.userId}`)
          .then(function (response) {
              if (response.status == 200){
                setUserAccounts(response.data);
              }
          })
          .catch(function (err){
              console.log("Error")
          })
    }
    getAccounts();

    if (route.params?.transactionCreated) {
      // Se uma nova transação foi criada, atualize a lista
      getAccounts();
    }
  });
  return unsubscribe;
  }, [navigation, route.params?.transactionCreated]);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.Saldo}>Saldo Atual: </Text>
        <VictoryPie
          data={pieData}
          colorScale={['yellow', '#DC143C', '#1E90FF', '#00FF7F', '#FFA500', '#9932CC']}
          labels={({ datum }) => `${datum.x}: ${datum.y}`} // Formato do label
          labelRadius={50}
          labelPlacement={({ index }) => (index ? 'parallel' : 'parallel')}
        />
        <Text style={styles.Contas}>Contas</Text>
        <Text style={styles.ContainerContas}>
        <ScrollView>
          {userAccounts?.map((account, i) => {
            return (
            <TouchableOpacity key={i} style={styles.ContainerChamado}>
                <Text style={styles.Departamento}>{account.name}</Text>
                <Text style={styles.Assunto}>{account.balance}</Text>
            </TouchableOpacity>    
            );
          })}
        </ScrollView>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252B3B',
  },

  Saldo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: "#fff",
    marginTop: 50,
    alignSelf: 'center',
  },

  Contas: {
    color: '#FECE00',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
  },

  ContainerContas: {
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

  Conta: {
    fontWeight: 'bold',
    fontSize: 20,
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



});