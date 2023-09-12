import React from "react"
import { StyleSheet ,View, Text, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons'

export default function tasks ({data}){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <FontAwesome 
          name='trash'
          size={20}
          color='#000'
        />
      </TouchableOpacity>
      <Text>{ data.item }</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(196, 196, 196 0.20)',
    marginTop: 12,
    padding: 12,
    borderRadius: 4,
    flexDirection: 'row'  
  }
})