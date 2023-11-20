import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Header from './Header';
import axios from 'axios';
export default function NewGoal({ navigation }) { 

  const [goal, setGoal] =  useState('');
  const [valor, setValor] =  useState('');

  const addGoal = async () => {
  //   try{
  //     const newGoal = {
  //       goal: goal,
  //       valorMeta: valor,
  //      }
  //   }
  }

    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Nova Meta</Text>
            <TextInput style={styles.input}
              placeholder="Meta"
              placeholderTextColor={"#FECE00"}
              secureTextEntry
              onChangeText={(text) => setGoal(text)}
              value={goal}
            />
            <TextInput style={styles.input2}
              placeholder="Valor"
              placeholderTextColor={"#FECE00"}
              secureTextEntry
              onChangeText={(text) => setValor(text)}
              value={valor}
            />
            <TouchableOpacity style={styles.Button} onPress={addGoal}>
              <Text style={styles.Add}>ADICIONAR</Text>
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
      marginTop: 30,
    },

    input3: {
      width: '80%', 
      height: 50,
      borderColor: '#FECE00',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 8,
      marginBottom: 12,
      color: "#FECE00",
      alignSelf: 'center',
      marginTop: 30,
    },

    Button: {
      backgroundColor: "#FECE00",
      borderWidth: 2, 
      borderColor: '#FECE00', 
      borderRadius: 5, 
      padding: 10, 
      alignSelf: 'center',
      width: 150,
      marginTop: 80,
      height: 50,
    },

    Add: {
     alignSelf: 'center',
     fontWeight: "bold",
     fontSize: 18,
    },
  });