import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VictoryPie, VictoryLabel } from 'victory-native';
import Header from './Header';
import axios from 'axios';
import { API_IP } from './config';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation, route}) {

  const [userAccounts, setUserAccounts] = useState([]);
  const [userTransactions, setUserTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState();
  const [totalExpense, setTotalExpense] = useState();
  const [expenseData, setExpenseData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);

  const totalBalance = userAccounts.reduce((accumulator, account) => accumulator + parseFloat(account.balance), 0);
  const formattedTotalBalance = totalBalance.toFixed(2);

  const pieData = userAccounts.map((account) => ({
    x: account.name, 
    y: parseFloat(account.balance), 
  }));

  const processData = async () => {
    const expenseCategories = {};
    const incomeCategories = {};

    userTransactions.forEach(transaction => {
      if (transaction.type === 'expense') {
        if (!expenseCategories[transaction.category]) {
          expenseCategories[transaction.category] = parseFloat(transaction.amount);
        } else {
          expenseCategories[transaction.category] += parseFloat(transaction.amount);
        }
      } else if (transaction.type === 'income') {
        if (!incomeCategories[transaction.category]) {
          incomeCategories[transaction.category] = parseFloat(transaction.amount);
        } else {
          incomeCategories[transaction.category] += parseFloat(transaction.amount);
        }
      }
    });

    const expenseChartData = Object.keys(expenseCategories).map(category => ({
      x: category,
      y: expenseCategories[category],
    }));
    setExpenseData(expenseChartData);
    

    const incomeChartData = Object.keys(incomeCategories).map(category => ({
      x: category,
      y: incomeCategories[category],
    }));
    setIncomeData(incomeChartData);
  };

  // Defina uma função separada para carregar os dados
const loadUserData = async () => {
  try {
    const accountsResponse = await axios.get(`http://${API_IP}:3000/account/user/${route.params.userId}`);
    const transactionsResponse = await axios.get(`http://${API_IP}:3000/transaction/user/${route.params.userId}`);

    if (accountsResponse.status === 200) {
      setUserAccounts(accountsResponse.data);
    }

    if (transactionsResponse.status === 200) {
      setUserTransactions(transactionsResponse.data);

      let totalReceitas = 0;
      let totalDespesas = 0;

      transactionsResponse.data.forEach(transaction => {
        if (transaction.type === 'income') {
          totalReceitas += parseFloat(transaction.amount);
        } else if (transaction.type === 'expense') {
          totalDespesas += parseFloat(transaction.amount);
        }
      });

      setTotalIncome(totalReceitas.toFixed(2));
      setTotalExpense(totalDespesas.toFixed(2));
    }
  } catch (error) {
    console.log('Error loading user data:', error);
    // Lógica adicional para lidar com o erro
  }
};

useFocusEffect(
  React.useCallback(() => {
    loadUserData();
    processData();
  }, [])
);

// Na tela Main, use useEffect para chamar loadUserData ao carregar a tela
useEffect(() => {
  const fetchData = async () => {
    try {
      const accountsResponse = await axios.get(`http://${API_IP}:3000/account/user/${route.params.userId}`);
      const transactionsResponse = await axios.get(`http://${API_IP}:3000/transaction/user/${route.params.userId}`);

      if (accountsResponse.status === 200) {
        setUserAccounts(accountsResponse.data);
      }

      if (transactionsResponse.status === 200) {
        setUserTransactions(transactionsResponse.data);

        let totalReceitas = 0;
        let totalDespesas = 0;

        transactionsResponse.data.forEach(transaction => {
          if (transaction.type === 'income') {
            totalReceitas += parseFloat(transaction.amount);
          } else if (transaction.type === 'expense') {
            totalDespesas += parseFloat(transaction.amount);
          }
        });

        setTotalIncome(totalReceitas.toFixed(2));
        setTotalExpense(totalDespesas.toFixed(2));
        
        // Chama a função processData após setUserTransactions para atualizar os dados do gráfico
        processData();
      }
    } catch (error) {
      console.log('Error loading user data:', error);
      // Lógica adicional para lidar com o erro
    }
  };

  fetchData();

  if (route.params?.transactionCreated) {
    fetchData();
  }
}, [navigation, route.params?.transactionCreated]);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.Saldo}>{`Saldo Total: R$${formattedTotalBalance}`}</Text>
        <View style={styles.ContainerRD}>
        </View>
        <View style={styles.chartContainer}>
        <View style={styles.chart}>
          <Ionicons name="arrow-up-circle" size={40} color="#32CD32"/>
          <View style={styles.ContainerReceita}> 
            <Text style={styles.Receitas}>Receitas</Text>
            <Text style={styles.ValorReceitas}>R${totalIncome}</Text>
          </View>
          <VictoryPie
            data={incomeData} 
            colorScale={['#DC143C', '#1E90FF', '#00FF7F', '#FFA500', '#9932CC', '#FF69B4']}
            labelComponent={<VictoryLabel style={{ fontSize: 12 }} />}
            labels={({ datum }) => `${datum.x}`} // Formato do label
            labelRadius={10}
            labelPlacement={({ index }) => (index ? 'parallel' : 'parallel')}
            width={250} // Largura do gráfico de despesas
            height={250} // Altura do gráfico de despesas
          />
        </View>

        <View style={styles.chart}>
          <Ionicons name="arrow-down-circle" size={40} color="red"/>
          <View style={styles.ContainerDespesa}>
            <Text style={styles.Despesas}>Despesas</Text>
            <Text style={styles.ValorDespesas}>R${totalExpense}</Text>
          </View>
          <VictoryPie
            data={expenseData}
            colorScale={['#DC143C', '#1E90FF', '#00FF7F', '#FFA500', '#9932CC', '#FF69B4']}
            labelComponent={<VictoryLabel style={{ fontSize: 12 }} />}
            labels={({ datum }) => `${datum.x}`} // Formato do label
            labelRadius={10}
            labelPlacement={({ index }) => (index ? 'parallel' : 'parallel')}
            width={250} // Largura do gráfico de despesas
            height={250} // Altura do gráfico de despesas

          />
        </View>
      </View>
        <Text style={styles.Contas}>Contas</Text>
        <View style={styles.ContainerContas}>
        {/* <ScrollView> */}
          {userAccounts?.map((account, i) => {
            return (
            <TouchableOpacity key={i} style={styles.ContainerChamado}>
                <Text style={styles.Departamento}>{account.name}</Text>
                <Text style={styles.Assunto}>R${account.balance}</Text>
            </TouchableOpacity>    
            );
          })}
        <VictoryPie
          data={pieData}
          colorScale={['yellow', '#DC143C', '#1E90FF', '#00FF7F', '#FFA500', '#9932CC', '#FF69B4']}
          labels={({ datum }) => `${datum.x}: R$${datum.y}`} // Formato do label
          labelRadius={50}
          labelPlacement={({ index }) => (index ? 'parallel' : 'parallel')}
        />
        {/* </ScrollView> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252B3B',
  },

  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  chart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor:'#ccc',
    borderRadius: 10, 
    padding: 10,
  },

  Saldo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: "#fff",
    marginTop: 50,
    alignSelf: 'center',
  },

  ContainerRD: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 42,
  },

  // ContainerReceita: {
    
  // },
  
  Receitas: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 8,
  },

  ValorReceitas: {
    color: '#32CD32',
    fontSize: 23,
    marginLeft: 8,
    marginRight: 30,
  },

  // ContainerDespesa: {

  // },

  Despesas: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 8,
  },

  ValorDespesas: {
    color: 'red',
    fontSize: 23,
    marginLeft: 8,
  },
  
  Contas: {
    color: '#FECE00',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
  },

  ContainerContas: {
    marginTop: 20,
    flexDirection: 'column',
    marginBottom: 150,
  },

  Conta: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  Departamento: {
    color: "#000000",
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },

  Assunto: {
      color: "#000000",
      fontSize: 18,
      marginTop: 6,
      marginLeft: 10,
      alignSelf: 'center',
  },

  Data: {
      fontSize: 12,
      textAlign: 'right',
      marginRight: '5%',
      bottom : 76,
      padding: -50,
      paddingTop: '5%',
  },

  ContainerChamado: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 10,
    width: 330,
    alignSelf: 'center',
    height: 55,
    borderRadius: 5,
  }

});