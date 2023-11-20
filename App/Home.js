import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      <Text style={styles.Saldo}>Gastos Novembro: R$900,00</Text>
      <VictoryPie data={DATA}
        colorScale={['yellow', '#DC143C', '#1E90FF', '#00FF7F', '#FFA500', '#9932CC']}
        origin={{ y: 220 }}
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

  Saldo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: "#fff",
    marginTop: 80,
    alignSelf: 'center',
  }

});