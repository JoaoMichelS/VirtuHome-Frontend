import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from 'victory-native';
import Header from './Header';

export default function Home() {

  const DATA = [
    {x: 'Mercado', y: 600},
    {x: 'Luz', y: 200},
    {x: 'Agua', y: 100},
];


  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Home</Text>
      <Text style={styles.ContainerSaldo}>
        <Text style={styles.Saldo}>Gastos Novembro: R$900,00</Text>
      </Text>
      <VictoryPie data={DATA}
        colorScale={['#00CED1', 'tomato', 'yellow', '#00FF7F', '#FF69B4', '#8A2BE2', ]}
        origin={{ y: 180 }}
        labelPlacement={
          ({ index }) => index
          ? "parallel"
          : "vertical"
        }
        labels={
          ({ datum }) => `${datum.x}: ${datum.y}`
        }
        labelRadius={45}
      />
    </View>
  );
}

//DATA.map((value) => value.color)

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
    marginTop: 40,
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