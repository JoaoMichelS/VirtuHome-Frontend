import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { VictoryPie } from 'victory-native';
import Header from './Header';

export default function Home() {

  const DATA = [
    {x: 'Moradia', y: 100},
    {x: 'Alimentação', y: 100},
    {x: 'Transporte', y: 100},
    {x: 'Saúde', y: 100},
    {x: 'Educação', y: 100}, 
    {x: 'Lazer', y: 100},
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.Saldo}>Saldo Atual: </Text>
        <VictoryPie data={DATA}
          colorScale={['yellow', '#DC143C', '#1E90FF', '#00FF7F', '#FFA500', '#9932CC']}
          origin={{ y: 200 }}
          labels={
            ({ datum }) => `${datum.x}: ${datum.y}`
          }
          labelRadius={50}
          labelPlacement={({ index }) => index
            ? "parallel"
            : "parallel"
          }
        />
        <Text style={styles.Contas}>Contas</Text>
        <Text style={styles.ContainerContas}>
          <Text style={styles.Conta}></Text>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252B3B',
  },

  Saldo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: "#fff",
    marginTop: 50,
    alignSelf: 'center',
  },

  Contas: {
    color: '#FECE00',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
  },

  ContainerContas: {
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#FFFFFF', 
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 5,
  },

  Conta: {
    fontWeight: 'bold',
    fontSize: 20,
  }

});