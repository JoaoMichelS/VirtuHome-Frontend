import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryLabel } from 'victory-native';

export default function Historic() { 
  
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Histórico</Text>
      <VictoryChart domain={{ x: [0.5, 3.5], y: [0, 7.5] }}>
        <VictoryGroup offset={12} colorScale={['yellow', '#DC143C', '#1E90FF', '#00FF7F', '#FFA500', '#9932CC']} 
                      labels={["Setembro", "Outubro", "Novembro"]} 
                      labelComponent={
                        <VictoryLabel
                          style={[
                            { fill: "white" }
                          ]}/>}
        >
          <VictoryBar data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 4 }]} />
          <VictoryBar data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 5 }]} />
          <VictoryBar data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 6 }]} />
          <VictoryBar data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 7 }]} />
          <VictoryBar data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 7 }]} />
          <VictoryBar data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 7 }]} />
        </VictoryGroup>
      </VictoryChart>
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
  }
});