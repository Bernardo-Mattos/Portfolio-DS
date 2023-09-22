import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function buttonsNav({ navigation , nav, txt }) {
  return (
    <View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(nav)}>
            <Text>{txt}</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    btn:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    }

});