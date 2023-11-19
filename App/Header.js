import React from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header () {

    const navigation = useNavigation();

    const Settings = () => {
        navigation.navigate('Settings')
      };

    const Notifications = () => {
        navigation.navigate('Notifications') 
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={Settings}>
                <Ionicons name="settings-outline" size={24} color="#FECE00"/>
            </TouchableOpacity>
            <Image source={require('./assets/VirtuHome.png')} style={styles.image}/>
            <TouchableOpacity onPress={Notifications}>
                <MaterialCommunityIcons name="bell-outline" size={24} color='#FECE00'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    header : {
        height : 100,
        paddingTop: 40,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 8,
        backgroundColor: '#252B3B',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    image: {
        width: 200,
        height: 35,
        alignContent: 'center',
    }
});