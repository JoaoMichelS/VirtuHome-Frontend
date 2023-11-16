import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './Home';
import Transactions from './Transactions';
import Goals from './Goals';
import Planning from './Planning';
//import Settings from './NavMainScreen/Settings';  

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator ();

//settings, notifications

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
            <Tab.Screen name="Planning" component={Planning}
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