import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import NewuserScreen from './NewUserScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import Settings from './Settings';
import ChangePassword from './ChangePassword';
import NewTransaction from './NewTransaction';
import NewGoal from './NewGoal';
import Notifications from './Notifications';

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="NewUser" component={NewuserScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="NewTransaction" component={NewTransaction} />
        <Stack.Screen name="NewGoal" component={NewGoal} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;