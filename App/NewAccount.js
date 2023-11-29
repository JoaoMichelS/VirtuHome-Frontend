import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Header from './Header';
import axios from 'axios';
import { API_IP } from './config';

export default function NewAccount({ navigation, route }) { 
    
    const [name, setName] =  useState('');
    const [balance, setBalance] =  useState('');
    const [status, setStatus] =  useState('');
    

    const addAccount = async () => {
      try{
        const response = await axios.post(`http://${API_IP}:3000/account`, {
        name: name,
        balance: balance,
        status: status,
        userId: route.params.userId
      }).then(function (response){
        if (response.status == 200){
          alert("Conta criada!");
          navigation.navigate('Main', {userId: route.params.userId}, { transactionCreated: true });
        } else {alert('Erro ao criar conta!')};
      }).catch(function (err){
        console.log(err);
        alert('Erro ao criar conta!');
      });
    } catch (error) {
      console.log(error);
      alert('Erro ao criar conta: ' + error.message);
    }}

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Nova Conta</Text>
            <TextInput style={styles.input}
              placeholder="Nome"
              placeholderTextColor={"#FECE00"}
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <TextInput style={styles.input2}
              keyboardType='numeric'
              placeholder="Balance"
              placeholderTextColor={"#FECE00"}
              onChangeText={(text) => setBalance(text)}
              value={balance}
            />
            <TouchableOpacity style={styles.Button} onPress={addAccount}>
              <Text style={styles.Add}>ADICIONAR</Text>
            </TouchableOpacity>
        </View>
    )
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

    input: {
        width: '80%', 
        height: 50,
        borderColor: '#FECE00',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 8,
        marginBottom: 12,
        color: "#FECE00",
        alignSelf: 'center',
        marginTop: 90,
      },

    input2: {
      width: '80%', 
      height: 50,
      borderColor: '#FECE00',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 8,
      marginBottom: 12,
      color: "#FECE00",
      alignSelf: 'center',
      marginTop: 50,
    },

    Button: {
      backgroundColor: "#FECE00",
      borderWidth: 2, 
      borderColor: '#FECE00', 
      borderRadius: 5, 
      padding: 10, 
      alignSelf: 'center',
      width: 150,
      marginTop: 150,
      height: 50,
    },

    Add: {
     alignSelf: 'center',
     fontWeight: "bold",
     fontSize: 18,
    },
  });