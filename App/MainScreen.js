import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './NavMainScreen/Home';
import Favorites from './NavMainScreen/Favorites';
import Notifications from './NavMainScreen/Notifications';
import Profile from './NavMainScreen/Profile';
import Settings from './NavMainScreen/Settings';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
            <Tab.Screen name="Favorites" component={Favorites}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <MaterialCommunityIcons name="star" size={size} color={'#FECE00'}/>
                        }
                        return <MaterialCommunityIcons name="star-outline" size={size} color={'#FECE00'}/>
                    }
                }}/>
            <Tab.Screen name="Notifications" component={Notifications}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <MaterialCommunityIcons name="bell" size={size} color={'#FECE00'}/>
                    }
                    return <MaterialCommunityIcons name="bell-outline" size={size} color={'#FECE00'}/>
                }
            }}/>
            <Tab.Screen name="Profile" component={Profile}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <FontAwesome name="user" size={size} color={'#FECE00'}/>
                    }
                    return <FontAwesome name="user-o" size={size} color={'#FECE00'}/>
                }
            }}/>
            <Tab.Screen name="Settings" component={Settings}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="settings" size={size} color={'#FECE00'}/>
                    }
                    return <Ionicons name="settings-outline" size={size} color={'#FECE00'}/>
                }
            }}/>
        </Tab.Navigator>
    );
}

export default MainScreen;