import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Header from './Header';

export default function NewTransaction({ navigation }) { 

  const [category, setCategory] =  useState('');
  const [valor, setValor] = useState('');

  const addTransaction = async () => {
  //   try{
  //     const newTransaction = {
  //       category: category,
  //       valorGasto: valor,
  //     }
  //   }
  }

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Moradia'},
      {key:'2', value:'Alimentação'},
      {key:'3', value:'Transporte'},
      {key:'4', value:'Saúde'},
      {key:'5', value:'Educação'},
      {key:'6', value:'Lazer'},
  ]

    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Nova Transacao</Text>
            <SelectList
              setSelected={(val) => setSelected(val)} 
              data={data} 
              save="value"
              search={false}
              placeholder='Categoria'
              inputStyles={{color:"#FECE00", marginLeft:-10,}}
              dropdownTextStyles={{color:"#FECE00"}}
              dropdownStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, borderRadius:5}}
              boxStyles={{borderColor:"#FECE00", marginLeft:40, marginRight:40, marginTop:80, borderRadius:5}}
              onSelect={(val) => setCategory(val)}
              value={category}
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
      marginTop: 50,
    },

    Button: {
      backgroundColor: "#FECE00",
      borderWidth: 2, 
      borderColor: '#FECE00', 
      borderRadius: 5, 
      padding: 10, 
      alignSelf: 'center',
      width: 150,
      marginTop: 150,
      height: 50,
    },

    Add: {
     alignSelf: 'center',
     fontWeight: "bold",
     fontSize: 18,
    },
  });