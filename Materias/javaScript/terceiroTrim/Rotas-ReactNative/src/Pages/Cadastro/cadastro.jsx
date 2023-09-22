import { View, Text } from 'react-native'
import React from 'react'
import buttonsNav from '../Components/buttons'

export default function Cadastro({navigation}) {
  return (
    <View style={styles.container}>
      <Text>cadastro</Text>
      <buttonsNav 
        navigation={navigation}
        txt= 'login'
        nav='Login'
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
        txt='Welcome'
        nav='Welcome'
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