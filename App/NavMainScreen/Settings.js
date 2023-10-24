import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
import Header from './Header';

export default function Settings() {

  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.op1}>Notifications</Text>
      <Text>{isEnabled.toString()}</Text>
      <Switch
        value={isEnabled}
        onValueChange={(value) => setIsEnabled(value)}
        trackColor={{ false: "#FECE00", true: "#FECE00" }}
        thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
      />
      <Text style={styles.op2}>Security Alerts</Text>
      <Text style={styles.op3}>Dark mode</Text>
      <Text style={styles.op4}>Acessibility mode</Text>    
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
    paddingTop: 30,
  },
op1: {
  color: '#FECE00',
  fontSize: 20,
  paddingLeft: 50,
  paddingTop: 35,
},
op2: {
  color: '#FECE00',
  fontSize: 20,
  paddingLeft: 50,
  paddingTop: 20,
},
op3: {
  color: '#FECE00',
  fontSize: 20,
  paddingLeft: 50,
  paddingTop: 20,
},
op4: {
  color: '#FECE00',
  fontSize: 20,
  paddingLeft: 50,
  paddingTop: 20,
}
});