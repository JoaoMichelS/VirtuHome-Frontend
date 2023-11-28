import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import Header from './Header';
import axios from 'axios';
export default function NewGoal({ navigation }) { 

  const [goal, setGoal] =  useState('');
  const [valor, setValor] =  useState('');
  const [valorMoradia, setValorMoradia] =  useState('');
  const [valorAlimentação, setValorAlimentação] =  useState('');
  const [valorTransporte, setValorTransporte] =  useState('');
  const [valorSaúde, setValorSaúde] =  useState('');
  const [valorEducação, setValorEducação] =  useState('');
  const [valorLazer, setValorLazer] =  useState('');
  const [valorOutros, setValorOutros] =  useState('');
  
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
            <ScrollView>
            <TextInput style={styles.input}
              placeholder="Renda Mensal"
              placeholderTextColor={"#FECE00"}
              keyboardType='numeric'
              onChangeText={(text) => setGoal(text)}
              value={goal}
            />
            <TextInput style={styles.input2}
              placeholder="Quanto gostaria de economizar em %"
              placeholderTextColor={"#FECE00"}
              keyboardType='numeric'
              onChangeText={(text) => setValor(text)}
              value={valor}
            />
            <Text style={styles.title2}>Gasto em Moradia: </Text>
            <TextInput style={styles.input2}
              keyboardType='numeric'
              placeholderTextColor={"#FECE00"}
              onChangeText={(text) => setValorMoradia(text)}
              value={valorMoradia}
            />
            <Text style={styles.title2}>Gasto em Alimentação: </Text>
            <TextInput style={styles.input2}
              keyboardType='numeric'
              //placeholderTextColor={"#FECE00"}
              onChangeText={(text) => setValorAlimentação(text)}
              value={valorAlimentação}
            />
            <Text style={styles.title2}>Gasto em Transporte: </Text>
            <TextInput style={styles.input2}
              placeholderTextColor={"#FECE00"}
              keyboardType='numeric'
              onChangeText={(text) => setValorTransporte(text)}
              value={valorTransporte}
            />
            <Text style={styles.title2}>Gasto em Saúde: </Text>
            <TextInput style={styles.input2}
              placeholderTextColor={"#FECE00"}
              keyboardType='numeric'
              onChangeText={(text) => setValorSaúde(text)}
              value={valorSaúde}
            />
            <Text style={styles.title2}>Gasto em Educação: </Text>
            <TextInput style={styles.input2}
              placeholderTextColor={"#FECE00"}
              keyboardType='numeric'
              onChangeText={(text) => setValorEducação(text)}
              value={valorEducação}
            />
            <Text style={styles.title2}>Gasto em Lazer: </Text>
            <TextInput style={styles.input2}
              placeholderTextColor={"#FECE00"}
              keyboardType='numeric'
              onChangeText={(text) => setValorLazer(text)}
              value={valorLazer}
            />
            <Text style={styles.title2}>Gasto em Outros: </Text>
            <TextInput style={styles.input2}
              placeholderTextColor={"#FECE00"}
              keyboardType='numeric'
              onChangeText={(text) => setValorOutros(text)}
              value={valorOutros}
            />
            <TouchableOpacity style={styles.Button} onPress={addGoal}>
              <Text style={styles.Add}>ADICIONAR</Text>
            </TouchableOpacity>
            </ScrollView>
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
      height: 48,
      borderColor: '#FECE00',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 8,
      marginBottom: 12,
      color: "#FECE00",
      alignSelf: 'center',
      marginTop: 60,
    },

    title2: {
      color: '#FECE00',
      marginLeft: 50,
      marginTop: 20,
      marginBottom: -12,
    },

    input2: {
      width: '80%', 
      height: 48,
      borderColor: '#FECE00',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 8,
      marginBottom: 12,
      color: "#FECE00",
      alignSelf: 'center',
      marginTop: 20,
    },

    Button: {
      backgroundColor: "#FECE00",
      borderWidth: 2, 
      borderColor: '#FECE00', 
      borderRadius: 5, 
      padding: 10, 
      alignSelf: 'center',
      width: 150,
      marginTop: 50,
      height: 50,
      marginBottom: 70,
    },

    Add: {
     alignSelf: 'center',
     fontWeight: "bold",
     fontSize: 18,
    },
  });