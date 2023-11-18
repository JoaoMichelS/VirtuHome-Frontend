import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header.js';

export default function Goals({ navigation }) {

  const NewGoal = () => {
    navigation.navigate('NewGoal')
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Goals</Text>
      <View style={styles.ContainerContent}>
        <ScrollView>
          <Text style={styles.ContainerGoal}>
            <Text style={styles.Goal}>Meta</Text>
          </Text>
          <Text style={styles.ContainerGoal}>
            <Text style={styles.Goal}>Meta</Text>
          </Text>
          <Text style={styles.ContainerGoal}>
            <Text style={styles.Goal}>Meta</Text>
          </Text>  
          <Text style={styles.ContainerGoal}>
            <Text style={styles.Goal}>Meta</Text>
          </Text>  
        </ScrollView>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Button} onPress={NewGoal}>
          <Text style={styles.Add}>Adicionar Meta</Text>
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
    flex: 1.2,
  },

  ContainerGoal: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: '#FFFFFF', 
    width: 300,
    alignSelf: 'center',
    borderRadius: 12,
    textAlign: 'center',
  },

Goal: {
  fontWeight: 'bold',
  fontSize: 20,
},

ButtonContainer: {
  flex: 0.63,
  marginBottom: 50, 
  alignItems: 'center', 
},

Button: {
  backgroundColor: "#FECE00",
  borderWidth: 2, 
  borderColor: '#FECE00', 
  borderRadius: 5, 
  padding: 10, 
  alignSelf: 'center',
  width: 200,
  marginTop: 80,
  height: 50,
},

Add: {
  alignSelf: 'center',
  fontWeight: "bold",
  fontSize: 18,
},

});