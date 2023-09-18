import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implemente a lógica de autenticação aqui, por exemplo, fazendo uma solicitação à sua API.
    // Verifique as credenciais e navegue para a próxima tela em caso de sucesso.

    if (username === '123' && password === '123') {
      navigation.navigate('Main'); // Navegue para a próxima tela após a autenticação bem-sucedida.
    } else {
      // Exiba uma mensagem de erro em caso de autenticação falha.
      alert('Credenciais inválidas. Tente novamente.');
    }
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
        placeholder="Username"
        placeholderTextColor={"#FECE00"}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#FECE00"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
  },
  Image: {
    width:200,
    height:200,
    marginBottom:30,
  },
  button: {
    backgroundColor: "#FECE00",
    borderWidth: 2, // Largura da borda
    borderColor: '#FECE00', // Cor da borda
    borderRadius: 5, // Raio do canto da borda (opcional)
    padding: 10, // Espaçamento interno
  },
  text: {
    color: "#FECE00"
  },
  textB: {
    color: "#FECE00",
    fontWeight: "bold",
  },
});

export default LoginScreen;
