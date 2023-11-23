import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Header from './Header';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function NewTransaction({ navigation }) { 

  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonSelect = (buttonType) => {
    setSelectedButton(buttonType);
  };

  const [selected, setSelected] = React.useState("");
  const [selected2, setSelected2] = React.useState("");

  const data = [
      {key:'1', value:'Itau'},
      {key:'2', value:'Nubank'},
      {key:'3', value:'XP'},
  ]
  
  const data2 = [
      {key:'1', value:'Moradia'},
      {key:'2', value:'Alimentação'},
      {key:'3', value:'Transporte'},
      {key:'4', value:'Saúde'},
      {key:'5', value:'Educação'},
      {key:'6', value:'Lazer'},
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
  //   try{
  //     const newTransaction = {
  //       category: category,
  //       valorGasto: valor,
  //     }
  //   }
  }

    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Nova Transacao</Text>
            <Text style={styles.type}>Tipo:</Text>
            <View style={styles.ContainerType}>
              <TouchableOpacity style={[styles.ButtonEntrada, selectedButton === 'Entrada' && styles.selectedButton]}
                onPress={() => handleButtonSelect('Entrada')}>
                <Text style={[styles.entrada, selectedButton === 'Entrada' && styles.selectedText]}>Entrada</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ButtonSaida, selectedButton === 'Saida' && styles.selectedButton]}
                onPress={() => handleButtonSelect('Saida')}>
                <Text style={[styles.saida, selectedButton === 'Saida' && styles.selectedText]}>Saída</Text>
              </TouchableOpacity>
            </View>
            <SelectList 
              setSelected={(val) => setSelected(val)} 
              data={data} 
              save="value"
              search={false}
              placeholder='Conta'
              inputStyles={{color:"#FECE00", marginLeft:-10,}}
              dropdownTextStyles={{color:"#FECE00"}}
              dropdownStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, borderRadius:5}}
              boxStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, marginTop:25, borderRadius:5, height:50,}}
              // onSelect={(val) => setCategory(val)}
              // value={category}
            />
            <SelectList
              setSelected={(val) => setSelected2(val)} 
              data={data2} 
              save="value"
              search={false}
              placeholder='Categoria'
              inputStyles={{color:"#FECE00", marginLeft:-10,}}
              dropdownTextStyles={{color:"#FECE00"}}
              dropdownStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, borderRadius:5}}
              boxStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, marginTop:25, borderRadius:5, height:50,}}
              // onSelect={(val) => setAccount(val)}
              // value={account}
            />
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
              placeholderText='Data'
              style={styles.dateTimePicker}
            />
            <TextInput style={styles.input}
              placeholder="Descrição"
              placeholderTextColor={"#FECE00"}
              secureTextEntry
              onChangeText={(text) => setDescricao(text)}
              value={descricao}
            />
            <TextInput style={styles.input2}
              placeholder="Valor"
              placeholderTextColor={"#FECE00"}
              secureTextEntry
              onChangeText={(text) => setValor(text)}
              value={valor}
            />
            <TouchableOpacity style={styles.Button} onPress={addTransaction}>
              <Text style={styles.Add}>ADICIONAR</Text>
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
      //width: 125,
      alignSelf: 'center', 
      backgroundColor: '#252B3B',
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
    },

    Add: {
     alignSelf: 'center',
     fontWeight: "bold",
     fontSize: 18,
    },

  });