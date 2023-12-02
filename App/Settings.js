import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
import Header from './Header';
import { API_IP } from './config';

export default function Settings({ navigation }) {

  const [toggle1Enabled, setToggle1Enabled] = useState(true);

  const toggleSwitch1 = () => setToggle1Enabled(previousState => !previousState);
  
  const ChangePassword = () => {
    navigation.navigate('ChangePassword')
  };

  const LoginScreen = () => {
    navigation.navigate('Login')
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
      <TouchableOpacity onPress={ChangePassword}>
        <Text style={styles.ChangePassword}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={LoginScreen}>
        <Text style={styles.Logout}>Log Out</Text>
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

ContainerNotifications: {
 flexDirection: 'row',
},

Switch1: {
  marginTop: 50,
  marginLeft: 80,
  transform: [{scaleX: 0.9}, {scaleY: 0.9}],
},

ChangePassword: {
  color: '#FECE00',
  fontSize: 20,
  marginLeft: 50,
  marginTop: 30, 
},

Logout: {
  color: '#FECE00',
  fontSize: 20,
  marginLeft: 50,
  marginTop: 30, 
},
});