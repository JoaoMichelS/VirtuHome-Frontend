import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from './Header';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { API_IP } from './config';

export default function EditGoal({ navigation, route}) { 

    const [monthlyIncome, setMonthlyIncome] =  useState('');
    const [valorMoradia, setValorMoradia] =  useState('');
    const [valorAlimentação, setValorAlimentação] =  useState('');
    const [valorTransporte, setValorTransporte] =  useState('');
    const [valorSaúde, setValorSaúde] =  useState('');
    const [valorEducação, setValorEducação] =  useState('');
    const [valorLazer, setValorLazer] =  useState('');
    const [valorOutros, setValorOutros] =  useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);
    const [targetValue, setTargetValue] = useState('');
    const [goalId, setGoalId] = useState('');
    const [userId, setUserId] = useState('');
    const [status, setStatus] = useState('');

    useEffect( () => {
        async function getGoal() {
            await axios.get(`http://${API_IP}:3000/goal/${route.params.goalId}`)
            .then(function (response) {
                if (response.status == 200){
                    setMonthlyIncome(response.data.goal.monthlyIncome);
                    setDescription(response.data.goal.description);
                    setEndDate(response.data.goal.endDate);
                    setStartDate(response.data.goal.startDate);
                    setGoalId(response.data.goal.id);
                    setTargetValue(response.data.goal.targetValue);
                    setUserId(response.data.goal.userId);
                    setValorAlimentação(String(response.data.goal.spendingCategories.Food));
                    setValorEducação(String(response.data.goal.spendingCategories.Education));
                    setValorSaúde(String(response.data.goal.spendingCategories.Health));
                    setValorMoradia(String(response.data.goal.spendingCategories.Home));
                    setValorLazer(String(response.data.goal.spendingCategories.Leisure));
                    setValorOutros(String(response.data.goal.spendingCategories.Others));
                    setValorTransporte(String(response.data.goal.spendingCategories.Transportation));
                    setStatus(response.data.goal.status);
                }
            })
            .catch(function (err){
                console.log("Error")
            })
        }
        getGoal()
      }, []);

      const spendingCategories = {
        Food: parseFloat(valorAlimentação),
        Transportation: parseFloat(valorTransporte),
        Health: parseFloat(valorSaúde),
        Education: parseFloat(valorEducação),
        Leisure: parseFloat(valorLazer),
        Home: parseFloat(valorMoradia),
        Others: parseFloat(valorOutros)
    };

    const handleSubmit = async () => {
    try {
        const response = await axios.post(`http://${API_IP}:3000/goal/${route.params.goalId}`, {
            description: description,
            monthlyIncome: monthlyIncome,
            endDate: endDate,
            startDate: startDate,
            id: goalId,
            targetValue: targetValue,
            userId: userId,
            status: status,
            spendingCategories: spendingCategories,
        });
    console.log(response);
    navigation.navigate('Main', {userId: route.params.userId}, { transactionCreated: true });
    
        } catch (error) {
        console.error(error);
        alert('Erro ao logar Axios: ' + error.message);
        // Lógica adicional para lidar com o erro
        }
    };

    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Editar Meta</Text>
            <ScrollView>
                <View style={styles.ContainerContent}>
                    <Text style={styles.Assunto}>Descrição da Meta: </Text>
                        <TextInput style={styles.Input} 
                            value={description}
                            editable={true}
                            onChangeText={(text) => setDescription(text)}
                        />
                    <Text style={styles.Assunto}>Renda mensal:</Text>
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={monthlyIncome}
                            editable={true}
                            onChangeText={(text) => setMonthlyIncome(text)}
                        />
                    <Text style={styles.Assunto}>Quantos R$ gostaria de economizar no período:</Text>
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={targetValue}
                            editable={true}
                            onChangeText={(text) => setTargetValue(text)}
                        />
                    <Text style={styles.Assunto}>Gasto em Moradia:</Text>
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={valorMoradia}
                            editable={true}
                            onChangeText={(text) => setValorMoradia(text)}
                        />
                    <Text style={styles.Data}>Gasto em Alimentação:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={valorAlimentação}
                            editable={true}
                            onChangeText={(text) => setValorAlimentação(text)}
                        />
                    <Text style={styles.Data}>Gasto em Transporte:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={valorTransporte}
                            editable={true}
                            onChangeText={(text) => setValorTransporte(text)}
                        />
                    <Text style={styles.Data}>Gasto em Saúde:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={valorSaúde}
                            editable={true}
                            onChangeText={(text) => setValorSaúde(text)}
                        />
                    <Text style={styles.Data}>Gasto em Educação:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={valorEducação}
                            editable={true}
                            onChangeText={(text) => setValorEducação(text)}
                        />
                    <Text style={styles.Data}>Gasto em Lazer:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={valorLazer}
                            editable={true}
                            onChangeText={(text) => setValorLazer(text)}
                        />
                    <Text style={styles.Data}>Gasto em Outros:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={valorOutros}
                            editable={true}
                            onChangeText={(text) => setValorOutros(text)}
                        /> 
                </View>
            </ScrollView>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button} >
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