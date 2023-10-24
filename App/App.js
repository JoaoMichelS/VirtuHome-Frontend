import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import NewuserScreen from './NewUserScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';

import Home from './NavMainScreen/Home';
import Favorites from './NavMainScreen/Favorites';
import Notifications from './NavMainScreen/Notifications';
import Profile from './NavMainScreen/Profile';
import Settings from './NavMainScreen/Settings';
import Header from './NavMainScreen/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function MainStack(){
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Main" component={MainScreen} />
//         <Stack.Screen name="NewUser" component={NewuserScreen} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

function App(){
  return (
    <NavigationContainer> 
      <MainScreen /> 
    </NavigationContainer>
  )
}
export default App;
