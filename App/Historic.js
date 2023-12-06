import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from 'victory-native';

export default function Historic() {
  const [transactionsJanuary, setTransactionsJanuary] = useState([]);
  const [transactionsFebruary, setTransactionsFebruary] = useState([]);
  const [transactionsMarch, setTransactionsMarch] = useState([]);
  const [transactionsApril, setTransactionsApril] = useState([]);
  const [transactionsMay, setTransactionsMay] = useState([]);
  const [transactionsJune, setTransactionsJune] = useState([]);
  const [transactionsJuly, setTransactionsJuly] = useState([]);
  const [transactionsAugust, setTransactionsAugust] = useState([]);
  const [transactionsSeptember, setTransactionsSeptember] = useState([]);
  const [transactionsOctober, setTransactionsOctober] = useState([]);
  const [transactionsNovember, setTransactionsNovember] = useState([]);
  const [transactionsDecember, setTransactionsDecember] = useState([]);

  // Dados de exemplo para o histórico
  const data = [
    { month: 'Setembro', receita: 100, despesa: 80 },
    { month: 'Outubro', receita: 120, despesa: 90 },
    { month: 'Novembro', receita: 150, despesa: 110 },
  ];

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      async function getTransactionsByDaterange() {
        console.log(route.params.userId);
        await axios.get(`http://${API_IP}:3000/transaction/user/${route.params.userId}`)
          .then(async function (response) {
            if (response.status == 200) {
              const transactions = response.data;
              console.log(transactions);
              const transactionsWithAccountNames = await Promise.all(transactions.map(async (transaction) => {
                console.log(transaction.accountId);
                const accountResponse = await axios.get(`http://${API_IP}:3000/account/${transaction.accountId}`);
                console.log("response:", accountResponse.data);
                const accountName = accountResponse.data.name; 
                return { ...transaction, accountName };
              }));
              setUserTransactions(transactionsWithAccountNames);
            }
          })
          .catch(function (err) {
            console.log("Error here")
          })
      }
      getTransactionsByDaterange();
  
      if (route.params?.transactionCreated) {
        getTransactionsByDaterange();
      }
    });
    return unsubscribe;
  }, [navigation, route.params?.transactionCreated]);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Histórico</Text>
      <View style={styles.ContainerGrafico}>
        <VictoryChart domainPadding={{ x: 30 }} theme={{ width: 600 }}>
          <VictoryGroup offset={10}>
            <VictoryBar
              data={data}
              x="month"
              y="receita"
              style={{ data: { fill: 'green' } }}
            />
            <VictoryBar
              data={data}
              x="month"
              y="despesa"
              style={{ data: { fill: 'red' } }}
            />
          </VictoryGroup>
          <VictoryAxis tickValues={data.map(item => item.month)} />
          <VictoryAxis dependentAxis />
        </VictoryChart>
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
    marginBottom: 60,
  },
  ContainerGrafico: {
    backgroundColor: '#fff',
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 12,
  },
});