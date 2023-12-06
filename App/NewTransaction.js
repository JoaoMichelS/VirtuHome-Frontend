import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list';
import Header from './Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { API_IP } from './config';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function NewTransaction({ navigation, route }) { 

  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonSelect = (buttonType) => {
    setSelectedButton(buttonType);
  };

  const [selected, setSelected] = React.useState("");
  const [selected2, setSelected2] = React.useState("");
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');

  useEffect( () => {
    async function getAccounts() {
        await axios.get(`http://${API_IP}:3000/account/user/${route.params.userId}`)
        .then(function (response) {
            if (response.status == 200){
                setAccounts(response.data);
            }
        })
        .catch(function (err){
            console.log("Error")
        })
    }
    getAccounts()
  }, []);
  
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

  const [account, setAccount] =  useState('');
  const [category, setCategory] =  useState('');

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); 
    setDate(currentDate);
  };
  const showDatePicker = () => {
    setShow(true);
  };

  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const addTransaction = async () => {
    try {
      const response = await axios.post(`http://${API_IP}:3000/transaction`, {
        accountId: selectedAccount,
        userId: route.params.userId,
        type: selectedButton,
        category: selected2,
        date: date,
        description: descricao,
        amount: valor
      });
      console.log(response);
      alert("Transação criada!");
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
            <Text style={styles.title}>Nova Transacao</Text>
            <ScrollView>
            <Text style={styles.type}>Tipo:</Text>
            <View style={styles.ContainerType}>
              <TouchableOpacity style={[styles.ButtonEntrada, selectedButton === 'income' && styles.selectedButton]}
                onPress={() => handleButtonSelect('income')}>
                <Text style={[styles.entrada, selectedButton === 'income' && styles.selectedText]}>Entrada</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ButtonSaida, selectedButton === 'expense' && styles.selectedButton]}
                onPress={() => handleButtonSelect('expense')}>
                <Text style={[styles.saida, selectedButton === 'expense' && styles.selectedText]}>Saída</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.type}>Conta:</Text>
            <Picker
                selectedValue={selectedAccount}
                onValueChange={(itemValue) => setSelectedAccount(itemValue)}
                style={{
                  color: '#FECE00', // Cor do texto selecionado
                  marginTop: 20,
                }}
                dropdownIconColor="#FECE00" // Cor do ícone do dropdown
                itemStyle={{
                  color: '#FECE00', // Cor do texto nos itens do dropdown
                  width: 335,
                  alignSelf: 'center',
                  borderColor: '#FECE00',
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 50,
                }}
              >
                {accounts.map((account) => (
                <Picker.Item key={account.userId} label={account.name} value={account.accountId} />
              ))}
            </Picker>
            <SelectList
              setSelected={(val) => setSelected2(val)}
              data={selectedButton === 'income' ? categoriesIncome : categoriesExpense} 
              save="value"
              search={false}
              placeholder='Categoria'
              inputStyles={{color:"#FECE00", marginLeft:-10,}}
              dropdownTextStyles={{color:"#FECE00"}}
              dropdownStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, borderRadius:5}}
              boxStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, marginTop:25, borderRadius:5, height:50,}}
            />
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="spinner"
              onChange={onChange}
              placeholderText='Data'
              placeholderTextColor= '#FECE00'
              style={styles.dateTimePicker}
              textColor='#FECE00'
            />
            <TextInput style={styles.input}
              placeholder="Descrição"
              placeholderTextColor={"#FECE00"}
              onChangeText={(text) => setDescricao(text)}
              value={descricao}
            />
            <TextInput style={styles.input2}
              placeholder="Valor"
              keyboardType='numeric'
              placeholderTextColor={"#FECE00"}
              onChangeText={(text) => setValor(text)}
              value={valor}
            />
            <TouchableOpacity style={styles.Button} onPress={addTransaction}>
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

    type: {
      color: "#FECE00",
      alignSelf: 'center',
      marginTop: 35,
      fontSize: 16,
    },

    ContainerType: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 25,
    },

    ButtonEntrada: {
      borderWidth: 1, 
      borderColor: '#FECE00', 
      borderRadius: 5, 
      padding: 10, 
      width: 90,
      height: 45,
      marginTop: -8
    },

    entrada: {
      color: "#FECE00",
      alignSelf: 'center',
      fontWeight: 'bold',
    },

    ButtonSaida:{
      borderWidth: 1, 
      borderColor: '#FECE00', 
      borderRadius: 5, 
      padding: 10, 
      width: 90,
      height: 45,
      marginLeft: 55,
      marginTop: -8,
    },

    saida:{
      color: "#FECE00",
      alignSelf: 'center',
      fontWeight: 'bold',
    },

    selectedButton: {
      backgroundColor: '#FECE00',
    },

    selectedText: {
      color: '#252B3B',
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
      width: 275,
      alignSelf: 'center', 
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
      marginTop: 25,
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
      marginTop: 12,
    },

    Button: {
      backgroundColor: "#FECE00",
      borderWidth: 2, 
      borderColor: '#FECE00', 
      borderRadius: 5, 
      padding: 10, 
      alignSelf: 'center',
      width: 150,
      marginTop: 28,
      height: 50,
      marginBottom: 50,
    },

    Add: {
     alignSelf: 'center',
     fontWeight: "bold",
     fontSize: 18,
    },

  });