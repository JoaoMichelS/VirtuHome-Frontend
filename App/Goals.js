import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list';
import Header from './Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { API_IP } from './config'

export default function Goals({ navigation, route}) {

  const [userGoals, setUserGoals] = useState([]);

  const NewGoal = () => {
    navigation.navigate('NewGoal', { userId: route.params.userId })
  };

  useEffect( () => {
    const unsubscribe = navigation.addListener('focus', () => {
      async function getGoals() {
          await axios.get(`http://${API_IP}:3000/goal/user/${route.params.userId}`)
          .then(function (response) {
              if (response.status == 200){
                setUserGoals(response.data);
              }
          })
          .catch(function (err){
              console.log("Error")
          })
    }
    getGoals();

    if (route.params?.goalCreated) {
      // Se uma nova transação foi criada, atualize a lista
      getGoals();
    }
  });
  return unsubscribe;
  }, [navigation, route.params?.goalCreated]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Metas</Text>
      <View style={styles.ContainerContent}>
          <ScrollView>
            {userGoals?.map((goal, i) => {
              const formattedDate1 = formatDate(goal.startDate); // Chamando a função para formatar a data
              const formattedDate2 = formatDate(goal.endDate); // Chamando a função para formatar a data
                return (
                <TouchableOpacity key={i} style={styles.ContainerChamado}>
                    <Text style={styles.Departamento}>{goal.description}</Text>
                    <Text style={styles.Assunto}>Renda Mensal: R${goal.monthlyIncome}</Text>
                    <Text style={styles.Assunto}>Meta: R${goal.targetValue}</Text>
                    <Text style={styles.Data}>Início: {formattedDate1}</Text> 
                    <Text style={styles.Data}>Fim: {formattedDate2}</Text> 
                </TouchableOpacity>    
                );
              })}
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
    bottom : 90,
    padding: -50,
},

ContainerChamado: {
  marginTop: 40,
  backgroundColor: '#FDF6BA',
  paddingTop: 15,
  paddingBottom: 20,
  borderColor: '#FDF6BA', 
  borderRadius: 12,
  width: 380,
  alignSelf: 'center',
},

ContainerContent: {
  flex: 1.15,
},

});