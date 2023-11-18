import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from 'victory-native';
import Header from './Header';

export default function Home() {

  const DATA = [
    {x: 'Moradia', y: 100},
    {x: 'Alimentação', y: 100},
    {x: 'Transporte', y: 100},
    {x: 'Saude', y: 100},
    {x: 'Educação', y: 100},
    {x: 'Lazer', y: 100},
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.ContainerSaldo}>
        <Text style={styles.Saldo}>Gastos Novembro: R$900,00</Text>
      </Text>
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

  ContainerSaldo: {
    marginTop: 80,
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#FFFFFF', 
    width: 350,
    alignSelf: 'center',
    borderRadius: 12,
    textAlign: 'center',
    marginBottom: 30,
  },

  Saldo: {
    fontWeight: 'bold',
    fontSize: 20,
  }

});