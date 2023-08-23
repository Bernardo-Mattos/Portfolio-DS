import {StyleSheet, Text, View, Image, TextInput } from 'react-native';

 export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
      source={require('./assets/download.png')}
      />
      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.input}
      placeholder='Nome'
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: 'auto',
    height: 100,
    backgroundColor: '#000',
    alignItems:'center'
  },
  image :{
    marginTop:25,
    borderRadius: 500
  },
  text:{
    color:'#fff',
    marginTop: 50,
    fontSize:50
  },
  input:{
    color:"#000",
    backgroundColor: '#fff',
    width: 300,
    height: 40,
    marginTop: 50,
    borderRadius: 10
  }
})