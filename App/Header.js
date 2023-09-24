import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header () {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <SimpleLineIcons name="menu" size={24} color="#FECE00"/>
            </TouchableOpacity>
            <Image source={require('./assets/VirtuHome.png')} style={styles.image}/>
            <TouchableOpacity>
                <MaterialCommunityIcons name="bell" size={24} color='#FECE00'/>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="user-alt" size={24} color="#FECE00"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    header : {
        height : 100,
        paddingTop: 40,
        backgroundColor: '#252B3B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 8,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
    },
    image: {
        width: 200,
        height: 30,
    }
});