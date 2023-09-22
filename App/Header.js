import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header () {
    return (
        <View style={styles.header}>
            <SimpleLineIcons name="menu" size={24} color="#FECE00"/>
            {/* <Image source={require('./assets/icon.png')} style={styles.image}/> */}
            <MaterialCommunityIcons name="bell" size={24} color='#FECE00'/>
            <FontAwesome5 name="user-alt" size={24} color="#FECE00"/>
        </View>
    )
}

const styles = StyleSheet.create ({
    header : {
        height : 100,
        paddingTop: 38,
        backgroundColor: '#252B3B',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    // image: {
    //     width:200,
    //     height:200,
    //     marginBottom:30,
    // }
});