import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
import Header from './Header';

export default function Settings({ navigation }) {

  const [toggle1Enabled, setToggle1Enabled] = useState(true);
  const [toggle2Enabled, setToggle2Enabled] = useState(true);

  const toggleSwitch1 = () => setToggle1Enabled(previousState => !previousState);
  const toggleSwitch2 = () => setToggle2Enabled(previousState => !previousState);

  const ChangePassword = () => {
    navigation.navigate('ChangePassword')
  };
 
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Settings</Text>
      <View style={styles.ContainerNotifications}>
        <Text style={styles.Notifications}>Notifications</Text>
        <Switch style={styles.Switch1}
            trackColor={{false: '#767577', true: '#FECE00'}}
            thumbColor={toggle1Enabled ? '#fff' : '#f4f3f4'}
            onValueChange={toggleSwitch1}
            value={toggle1Enabled} />
      </View>
      {/* <Text style={styles.op2}>Security Alerts</Text> */}
      <View style={styles.ContainerDarkMode}>
        <Text style={styles.DarkMode}>Dark mode</Text>
        <Switch style={styles.Switch2}
            trackColor={{false: '#767577', true: '#FECE00'}}
            thumbColor={toggle2Enabled ? '#fff' : '#f4f3f4'}
            onValueChange={toggleSwitch2}
            value={toggle2Enabled} />
      </View>
      {/* <Text style={styles.op4}>Acessibility mode</Text>     */}
      <TouchableOpacity onPress={ChangePassword}>
        <Text style={styles.ChangePassword}>Change Password</Text>
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
    paddingTop: 30,
  },

  Notifications: {
  color: '#FECE00',
  fontSize: 20,
  marginLeft: 50,
  marginTop: 50,
},

// op2: {
//   color: '#FECE00',
//   fontSize: 20,
//   marginLeft: 50,
//   marginTop: 30,
// },

DarkMode: {
  color: '#FECE00',
  fontSize: 20,
  marginLeft: 50,
  marginTop: 30,
},

// op4: {
//   color: '#FECE00',
//   fontSize: 20,
//   marginLeft: 50,
//   marginTop: 30,
// },

ContainerNotifications: {
 flexDirection: 'row',
},

Switch1: {
  marginTop: 50,
  marginLeft: 80,
  transform: [{scaleX: 0.9}, {scaleY: 0.9}],
},

ContainerDarkMode: {
  flexDirection: 'row',
 },

Switch2: {
  marginTop: 30,
  marginLeft: 95,
  transform: [{scaleX: 0.9}, {scaleY: 0.9}],
},

ChangePassword: {
  color: '#FECE00',
  fontSize: 20,
  marginLeft: 50,
  marginTop: 30, 
},

});