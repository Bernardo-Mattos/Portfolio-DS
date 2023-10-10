import { View, Text } from 'react-native'
import React from 'react'
import buttonsNav from '../Components/buttons'

export default function Home({navigation}) {
  return (
    <View>
      <Text>home</Text>
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
        txt= 'Cadastro'
        nav='Cadastro'
      />
      <buttonsNav 
        navigation={navigation}
        txt='Welcome'
        nav='Welcome'
      />
    </View>
  )
}