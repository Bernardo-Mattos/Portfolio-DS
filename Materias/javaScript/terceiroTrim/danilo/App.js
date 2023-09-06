import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from 'react';
import tasks from './src/tasks';

export default function App() {
  const [tasks, setTasks] = useState('')
  const [list, setList] = useState([])

  function handleAdd(){
    if (tasks === ''){
      return
    }
    const data = {
      key: Date.now(),
      item: tasks
    }
    setList(oldArray => [data, ...oldArray])
    setTasks('')
  }


  return (
    <View style={styles.container}> 
      <Text style={styles.tt}>Lista</Text> 
      <View style={styles.containerInput}> 
        <TextInput 
        placeholder="Digite o nome do produto" 
        style={styles.input}
        /> 
        <TouchableOpacity style={styles.btn}> 
         <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}> 
        <FlatList 
        style={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    padding: 10,
  },
  containerInput:{
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    height: '15%',
    elevation: 20,
    shadowColor: '#000',
  },
  tt:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '8%'
  },
  input:{
    backgroundColor: '#fff',
    height: 60,
    width: '70%',
    paddingLeft: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    fontSize: 15,
    fontWeight: '500'
  },
  btn:{
    backgroundColor:"#3897f1",
    width: '25%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  containerList:{
    width: '95%',
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center'
  }
});
