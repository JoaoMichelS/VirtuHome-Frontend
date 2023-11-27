import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {FIREBASE_AUTH, auth} from "./src/services/firebaseConfig";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

function ForgotPasswordScreen  ({ navigation }) {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const ForgotPassword = () => {
      axios.post(`http://192.168.15.33:3000/user/login`, {email: email, password: oldPassword}).
      then(function (response){
        if (response.status == 200){
          const id = response.data.id;
          var newUser = response.data;
          delete newUser.id;
          newUser.password = newPassword;
          axios.post(`http://192.168.15.33:3000/user/${id}`, newUser).
          then(function (response_){
            if (response_.status == 200){navigation.navigate('Login');}
            else {alert('Erro ao atualizar usuário');};
          }).catch(function (err){
            alert('Erro ao atualizar usuário');
          });
        }
        else {alert('Erro ao atualizar usuário');}
      }).catch(function (err){
        console.log(err);
        alert('Erro ao atualizar Axios');
      });
      }

    return (
        <View style={styles.container}>
            <Text style={styles.ForgotPassword}>Recuperar senha</Text>
            <Text style={styles.text}>Digite seu email para envio do link de recuperação:</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#FECE00"}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={"#FECE00"}
                secureTextEntry
                onChangeText={(text) => setOldPassword(text)}
                value={oldPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Nova Senha"
                placeholderTextColor={"#FECE00"}
                secureTextEntry
                onChangeText={(text) => setNewPassword(text)}
                value={newPassword}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={ForgotPassword}>
                  <Text style={styles.textB}>ENTRAR</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#252B3B'
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#FECE00',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 8,
      marginBottom: 12,
      backgroundColor: '#252B3B',
      color: '#FECE00',
    },
    textB: {
      color: '#252B3B',
    },
    text: {
      textAlign: 'left',
      color: '#FECE00',
      paddingBottom : 15,
      fontSize: 15,
    }, 
    ForgotPassword: {
      color: '#FECE00',
      textDecorationLine: 'underline',
      fontSize: 40,
      paddingBottom: 85,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
    },
    button: {
      backgroundColor: "#FECE00",
      borderWidth: 2, 
      borderColor: '#2B2D60', 
      borderRadius: 12, 
      padding: 10, 
      marginTop: 55,
      margin: 5,
      height: 45,
    },
  });
  
export default ForgotPasswordScreen;