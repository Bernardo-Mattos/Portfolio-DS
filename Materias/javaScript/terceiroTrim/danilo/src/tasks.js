import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons'

export default function Task({ data, onDelete }) { 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => onDelete(data.key)}>
        <FontAwesome 
          name='trash'
          size={20}
          color='#000'
        />
      </TouchableOpacity>
      <Text>{data.items}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(196, 196, 196, 0.20)', 
    marginTop: 12,
    padding: 13,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center', 
  },
})
