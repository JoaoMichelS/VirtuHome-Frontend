import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from './Home';
import Transactions from './Transactions';
import Goals from './Goals';
import Historic from './Historic';
import { API_IP } from './config';

const Tab = createBottomTabNavigator ();
function MainScreen ({ navigation, route }) {
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
            <Tab.Screen name="Home" component={Home} initialParams={{ userId: route.params.userId, transactionCreated: true }}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={'#FECE00'}/>
                        }
                        return <Ionicons name="home-outline" size={size} color={'#FECE00'}/>
                    }
                }}/>
            <Tab.Screen name="Transactions" component={Transactions} initialParams={{ userId: route.params.userId }}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <FontAwesome name="credit-card-alt" size={size} color={'#FECE00'}/>
                        }
                        return <FontAwesome name="credit-card" size={size} color={'#FECE00'}/>
                    }
                }}/>
            <Tab.Screen name="Goals" component={Goals} initialParams={{ userId: route.params.userId }}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="checkmark-circle" size={size} color={'#FECE00'}/>
                    }
                    return <Ionicons name="checkmark-circle-outline" size={size} color={'#FECE00'}/>
                }
            }}/>
            <Tab.Screen name="Historic" component={Historic} initialParams={{ userId: route.params.userId }}
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