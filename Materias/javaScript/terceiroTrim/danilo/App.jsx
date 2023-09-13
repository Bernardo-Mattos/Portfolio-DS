import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from 'react';
import Task from './src/tasks';

export default function App() {
  const [taskText, setTaskText] = useState(''); 
  const [taskList, setTaskList] = useState([]); 

  function handleAdd() {
    if (taskText === '') {
      return;
    }
  
    const newTask = {
      key: Date.now().toString(),
      items: taskText,
    };
  
    setTaskList((oldList) => [newTask, ...oldList]);
    setTaskText('');
  }

  function handleDelete(key) {
    const updatedList = taskList.filter((task) => task.key !== key);
    setTaskList(updatedList);
  }

  return (
    <View style={styles.container}> 
      <Text style={styles.tt}>Lista</Text> 
      <View style={styles.containerInput}> 
        <TextInput 
          placeholder="Digite o nome do produto" 
          style={styles.input}
          value={taskText}
          onChangeText={setTaskText} 
        />
        <TouchableOpacity style={styles.btn} onPress={handleAdd}> 
         <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}> 
      <FlatList 
        data={taskList}
        keyExtractor={(item) => item.key}
        style={styles.list}
        renderItem={({ item }) => <Task item={item} onDelete={handleDelete} />}
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
