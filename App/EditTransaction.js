import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from './Header';
import axios from 'axios';
import { API_IP } from './config';

export default function EditTransaction({ navigation, route}) { 

    const [senhaAtual, setSenhaAtual] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [date, setDate] = useState(new Date());
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState();
    const [userId, setUserId] = useState('');
    const [accountId, setAccountId] = useState('');

    useEffect( () => {
        async function getTransaction() {
            await axios.get(`http://${API_IP}:3000/transaction/${route.params.transactionId}`)
            .then(function (response) {
                if (response.status == 200){
                    setDescription(response.data[0].description);
                    setType(response.data[0].type);
                    setCategory(response.data[0].category);
                    setAmount(String(response.data[0].amount));
                    setUserId(response.data[0].userId);
                    setAccountId(response.data.accountId);
                }
            })
            .catch(function (err){
                console.log("Error")
            })
        }
        getTransaction()
      }, []);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); 
        setDate(currentDate);
      };
      const showDatePicker = () => {
        setShow(true);
      };

    const categoriesExpense = [
        {key:'1', value:'Moradia'},
        {key:'2', value:'Alimentação'},
        {key:'3', value:'Transporte'},
        {key:'4', value:'Saúde'},
        {key:'5', value:'Educação'},
        {key:'6', value:'Lazer'},
        {key:'7', value:'Outros'},
    ]
  
    const categoriesIncome = [
      {key:'1', value:'Salário'},
      {key:'2', value:'Presente'},
      {key:'3', value:'Prêmio'},
      {key:'4', value:'Investimento'},
      {key:'5', value:'Outros'},
  ]

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://${API_IP}:3000/transaction/${route.params.transactionId}`, {
                accountId: accountId,
                userId: route.params.userId,
                type: type,
                category: category,
                date: date,
                description: description,
                amount: amount
            });
        console.log(response);
        alert("Transação atualizada!");
        navigation.navigate('Main', {userId: route.params.userId}, { transactionCreated: true });
    
        } catch (error) {
        console.error(error);
        alert('Erro ao logar Axios: ' + error.message);
        // Lógica adicional para lidar com o erro
        }
    };

    const handleDelete = async () => {
        try {
          const response = await axios.delete(`http://${API_IP}:3000/transaction/delete/${route.params.transactionId}`);
          console.log(response);
          navigation.navigate('Main', { userId: route.params.userId, transactionCreated: true });
        } catch (error) {
          console.error(error);
          alert("Transação excluída!");
          alert('Erro ao fazer a requisição DELETE: ' + error.message);
        }
      };

    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Editar Transação</Text>
            <View style={styles.ContainerContent}>
                <ScrollView>
                    <Text style={styles.Assunto}>Descrição:</Text>
                        <TextInput style={styles.Input} 
                            value={description}
                            editable={true}
                            onChangeText={(text) => setDescription(text)}
                        />
                    <Text style={styles.Assunto}>Data:</Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                        placeholderText='Data'
                        placeholderTextColor= '#FECE00'
                        style={styles.dateTimePicker}
                        />
                    <SelectList
                        setSelected={(val) => setCategory(val)}
                        data={type === 'income' ? categoriesIncome : categoriesExpense} 
                        save="value"
                        search={false}
                        placeholder='Categoria'
                        inputStyles={{color:"#FECE00", marginLeft:-10,}}
                        dropdownTextStyles={{color:"#FECE00"}}
                        dropdownStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, borderRadius:5}}
                        boxStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, marginTop:25, borderRadius:5, height:50,}}
                        />
                    <Text style={styles.Assunto}>Valor: </Text>
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={amount}
                            onChangeText={(val) => setAmount(val)}
                        />
                </ScrollView>
            </View>
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
    data: {
        width: '80%', 
        height: 50,
        borderColor: '#FECE00',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 8,
        marginBottom: 12,
        color: "#FECE00",
        alignSelf: 'center',
        marginTop: 25,
      },
  
      dateTimePicker: {
        borderColor: '#FECE00',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 25,
        height: 47,
        //width: 125,
        alignSelf: 'center', 
        backgroundColor: '#252B3B',
      },

});