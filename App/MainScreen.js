import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from './Home';
import Transactions from './Transactions';
import Goals from './Goals';
import Historic from './Historic';

const Tab = createBottomTabNavigator ();
function MainScreen ({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={{
                //tabBarShowLabel: false,
                tabBarLabelStyle: { 
                    color: '#FFFFFF',
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#252B3B',
                    borderTopWidth: 2,
                    height: 85,
                }
            }}>
            <Tab.Screen name="Home" component={Home} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={'#FECE00'}/>
                        }
                        return <Ionicons name="home-outline" size={size} color={'#FECE00'}/>
                    }
                }}/>
            <Tab.Screen name="Transactions" component={Transactions}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <FontAwesome name="credit-card-alt" size={size} color={'#FECE00'}/>
                        }
                        return <FontAwesome name="credit-card" size={size} color={'#FECE00'}/>
                    }
                }}/>
            <Tab.Screen name="Goals" component={Goals}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="checkmark-circle" size={size} color={'#FECE00'}/>
                    }
                    return <Ionicons name="checkmark-circle-outline" size={size} color={'#FECE00'}/>
                }
            }}/>
            <Tab.Screen name="Historic" component={Historic}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="bar-chart" size={size} color={'#FECE00'}/>
                    }
                    return <Ionicons name="bar-chart-outline" size={size} color={'#FECE00'}/>
                }
            }}/>
        </Tab.Navigator>
    );
}

export default MainScreen;