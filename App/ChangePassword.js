import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Header from './Header';
import { updatePassword } from 'firebase/auth';
import { API_IP } from './config';

export default function ChangePassword({ navigation }) { 

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

  const updatePassword = async () => {
    if (newPassword != newPassword2) {
      alert("Senhas diferentes");
      return;
    }

    // try{
    //   const 
    // }
  }

    return(
        <View style={styles.container}>
            <Header />
            <Text>{newPassword}-{newPassword2}</Text>
            <Text style={styles.title}>Alterar Senha</Text>
            <TextInput style={styles.input}
              placeholder="Senha Atual"
              placeholderTextColor={"#FECE00"}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TextInput style={styles.input2}
              placeholder="Nova Senha"
              placeholderTextColor={"#FECE00"}
              secureTextEntry
              onChangeText={(text) => setNewPassword(text)}
              value={newPassword}
            />
            <TextInput style={styles.input3}
              placeholder="Confirme Nova Senha"
              placeholderTextColor={"#FECE00"}
              secureTextEntry
              onChangeText={(text) => setNewPassword2(text)}
              value={newPassword2}
            />
            <TouchableOpacity style={styles.Button} onPress={updatePassword}>
              <Text style={styles.ChangePassword}>SALVAR</Text>
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

    ChangePassword: {
     alignSelf: 'center',
     fontWeight: "bold",
     fontSize: 18,
    },
  });