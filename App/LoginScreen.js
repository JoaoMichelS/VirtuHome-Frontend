import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {FIREBASE_AUTH, auth} from "./src/services/firebaseConfig";
import { ActivityIndicator } from "react-native-web";
import axios from 'axios';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH; 

  const signIn = async () => {
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('logou!');
      navigation.navigate('Main');
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    }
  }

  const ForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  };

  const NewUser = () => {
    navigation.navigate('NewUser');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Logo.png')}
        style={styles.Image} 
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#FECE00"}
        onChangeText={(text) => setEmail(text)}
        value={email} 
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#FECE00"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.ForgotPassword} onPress={ForgotPassword}>
        <Text style={styles.ForgotPassword}>Recuperar senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <Text style={styles.text}>DON´T HAVE ACCOUNT?</Text>
      <TouchableOpacity style={styles.NewUser} onPress={NewUser}>
        <Text style={styles.textB}>SIGN UP</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%', 
    height: 40,
    borderColor: '#FECE00',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 12,
    color: "#FECE00",
  },
  Image: {
    width:200,
    height:200,
    marginBottom:30,
  },
  ForgotPassword: {
    color: "#FECE00",
    textDecorationLine: 'underline',
    paddingBottom : 10,
  },
  button: {
    backgroundColor: "#FECE00",
    borderWidth: 2, // Largura da borda
    borderColor: '#FECE00', // Cor da borda
    borderRadius: 5, // Raio do canto da borda (opcional)
    padding: 10, // Espaçamento interno
  },
  text: {
    color: "#FECE00",
    paddingTop: 15,
  },
  textB: {
    color: "#FECE00",
    fontWeight: "bold",
    paddingTop: 8,
  },
});

export default LoginScreen;
