import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from './Header';

export default function EditGoal({ navigation, route}) { 

    const [senhaAtual, setSenhaAtual] = useState('SuaSenhaAtual'); // Substitua 'SuaSenhaAtual' pela senha atual real

    const handleChangeSenhaAtual = (text) => {
        setSenhaAtual(text);
    };

    const handleSubmit = () => {
        // Adicione aqui a lógica para atualizar a senha no seu sistema
    };

    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Editar Meta</Text>
            <ScrollView>
                <View style={styles.ContainerContent}>
                    <Text style={styles.Assunto}>Descrição da Meta: </Text>
                        <TextInput style={styles.Input} 
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Assunto}>Renda mensal:</Text>
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Assunto}>Data de Início:</Text>
                        <TextInput style={styles.Input} 
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Assunto}>Data de Término: </Text>
                        <TextInput style={styles.Input} 
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Assunto}>Quantos R$ gostaria de economizar no período:</Text>
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Assunto}>Gasto em Moradia:</Text>
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Data}>Gasto em Alimentação:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Data}>Gasto em Transporte:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Data}>Gasto em Saúde:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Data}>Gasto em Educação:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Data}>Gasto em Lazer:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
                        />
                    <Text style={styles.Data}>Gasto em Outros:</Text> 
                        <TextInput style={styles.Input} 
                            keyboardType='numeric'
                            value={senhaAtual}
                            onChangeText={handleChangeSenhaAtual}
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