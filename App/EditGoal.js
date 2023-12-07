import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from './Header';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { API_IP } from './config';

export default function EditGoal({ navigation, route}) { 

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);
    const [targetValue, setTargetValue] = useState('');
    const [goalId, setGoalId] = useState('');
    const [userId, setUserId] = useState('');
    const [status, setStatus] = useState('');
    const [balance, setBalance] = useState();

    useEffect( () => {
        async function getGoal() {
            await axios.get(`http://${API_IP}:3000/goal/${route.params.goalId}`)
            .then(function (response) {
                if (response.status == 200){
                    setDescription(response.data.goal.description);
                    setEndDate(response.data.goal.endDate);
                    setStartDate(response.data.goal.startDate);
                    setGoalId(response.data.goal.id);
                    setTargetValue(response.data.goal.targetValue);
                    setUserId(response.data.goal.userId);
                    setStatus(response.data.goal.status);
                    setBalance(response.data.goal.balance);
                }
            })
            .catch(function (err){
                console.log("Error")
            })
        }
        getGoal()
      }, []);

    const handleSubmit = async () => {
    try {
        const response = await axios.post(`http://${API_IP}:3000/goal/${route.params.goalId}`, {
            description: description,
            endDate: endDate,
            startDate: startDate,
            balance: balance,
            id: goalId,
            targetValue: targetValue,
            userId: userId,
            status: status,
        });
    console.log(response);
    alert("Meta atualizada!");
    navigation.navigate('Main', {userId: route.params.userId}, { transactionCreated: true });
    
        } catch (error) {
        console.error(error);
        alert('Erro ao logar Axios: ' + error.message);
        // Lógica adicional para lidar com o erro
        }
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://${API_IP}:3000/goal/delete/${route.params.goalId}`);
            console.log(response);
            alert("Meta excluída!");
            navigation.navigate('Main', { userId: route.params.userId, transactionCreated: true });
          } catch (error) {
            console.error(error);
            alert('Erro ao fazer a requisição DELETE: ' + error.message);
          }
        };

    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Editar Meta</Text>
            <ScrollView>
                <View style={styles.ContainerContent}>
                    <Text style={styles.Assunto}>Descrição: </Text>
                        <TextInput style={styles.Input} 
                            value={description}
                            editable={true}
                            onChangeText={(text) => setDescription(text)}
                        />
                    <Text style={styles.Assunto}>Meta: </Text>
                        <TextInput style={styles.Input} 
                            value={targetValue}
                            editable={true}
                            onChangeText={(text) => setTargetValue(text)}
                        />
                    <Text style={styles.Assunto}>Saldo Meta: </Text>
                        <TextInput style={styles.Input} 
                            value={balance}
                            editable={true}
                            onChangeText={(text) => setBalance(text)}
                        />
                </View>
            </ScrollView>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button} onPress={handleDelete}>
                    <Text style={styles.Add}>Apagar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button2} onPress={handleSubmit}>
                    <Text style={styles.Add2}>Salvar</Text>
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

    Assunto: {
        color: '#FECE00',
        marginLeft: 50,
        marginTop: 20,
        marginBottom: -12,
    },

    Input: {
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

    Data: {
        color: '#FECE00',
        marginLeft: 50,
        marginTop: 20,
    },

    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 50,
    },

    Button: {
        backgroundColor: "#DC143C",
        borderWidth: 2, 
        borderColor: '#DC143C', 
        borderRadius: 5, 
        padding: 10, 
        alignSelf: 'center',
        width: 150,
        marginTop: 50,
        height: 50,
    },

    Add: {
        alignSelf: 'center',
        fontWeight: "bold",
        fontSize: 18,
        color: '#fff',
    },
    
    Button2: {
        backgroundColor: "#FECE00",
        borderWidth: 2, 
        borderColor: '#FECE00', 
        borderRadius: 5, 
        padding: 10, 
        alignSelf: 'center',
        width: 150,
        marginTop: 50,
        height: 50,
    },

    Add2: {
        alignSelf: 'center',
        fontWeight: "bold",
        fontSize: 18,
    },

});