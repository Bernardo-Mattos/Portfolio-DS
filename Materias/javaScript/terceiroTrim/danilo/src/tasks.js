import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons'

export default function Task({ data, onDelete }) { // Renomeie a função para "Task" e adicione "onDelete" aos parâmetros
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => onDelete(data.key)}>
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
  container: {
    backgroundColor: 'rgba(196, 196, 196, 0.20)', // Corrija a sintaxe do valor rgba
    marginTop: 12,
    padding: 12,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center', // Adicione isso para centralizar verticalmente o ícone e o texto
  },
})
