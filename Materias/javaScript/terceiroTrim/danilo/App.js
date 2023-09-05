import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tt}>Lista</Text>
      <View style={styles.containerAdd}>
        <TextInput 
        placeholder="Digite o nome do produto" 
        style={styles.input}
        />
        <TouchableOpacity style={styles.btn}>
         <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInput}>
        <FlatList/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    padding: 10
  },
  containerAdd:{
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent:'center'
  },
  tt:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '5%'
  },
  input:{
    backgroundColor: '#fff',
    height: 60,
    width: '70%',
    paddingLeft: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
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
});
