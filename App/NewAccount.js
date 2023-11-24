import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Header from './Header';
import axios from 'axios';

export default function NewAccount({ route, navigation }) { 
    
    const [name, setName] =  useState('');
    const [balance, setBalance] =  useState('');
    const [status, setStatus] = useState('');
    const [accountId, setAccountId] = useState('');

    const addAccount = async () => {
      try{
        const NewAccount = {
          name: name,
          balance: balance,
          status: status,
          userId: route.params.userId,
          accountId: accountId
        };
        axios.post("http://192.168.15.33:3000/account", NewAccount).
        then(function (response){
        if (response.status == 200){
          alert("Conta cadastrada!")
        }
        else if (response.status == 409){
          alert('Conta já existe!');
        }
      }).catch(function (err){
        alert('Erro ao criar conta ou já existente');
      });
    } catch (error) {
      console.log(error);
      alert('Erro ao criar conta: ' + error.message);
      }
    }

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
              placeholder="Saldo"
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