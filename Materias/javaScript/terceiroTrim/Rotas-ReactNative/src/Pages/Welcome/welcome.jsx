import { View, Text, StyleSheet } from "react-native";
import React from "react";
import buttonsNav from '../Components/buttons'

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <buttonsNav 
        navigation={navigation}
        txt= 'Cadastro'
        nav='Cadastro'
      />
      <buttonsNav 
        navigation={navigation}
        txt= 'Profile'
        nav='Profile'
      />
      <buttonsNav 
        navigation={navigation}
        txt= 'Home'
        nav='Home'
      />
      <buttonsNav 
        navigation={navigation}
        txt='Login'
        nav='Login'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
  }

});
