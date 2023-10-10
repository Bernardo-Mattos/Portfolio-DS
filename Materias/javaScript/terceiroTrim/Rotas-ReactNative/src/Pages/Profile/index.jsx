import { View, Text } from 'react-native'
import React from 'react'
import buttonsNav from '../Components/buttons'

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <buttonsNav 
        navigation={navigation}
        txt= 'Cadastro'
        nav='Cadastro'
      />
      <buttonsNav 
        navigation={navigation}
        txt= 'Login'
        nav='Login'
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
