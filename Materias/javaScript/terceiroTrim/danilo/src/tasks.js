import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons'

export default function tasks (props){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <FontAwesome 
          name='trash'
          size={20}
          color='#000'
        />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(196, 196, 196 0.20)'
  }
})