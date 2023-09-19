import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

function MainScreen({ navigation }) {
  
};

  const Header = () => {
    return (
    <View style={styles.header}>
      <Image
        source={require('./assets/VirtuHome.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor:'#252B3B'
  },
});

export default MainScreen;