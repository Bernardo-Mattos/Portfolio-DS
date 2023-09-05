import {StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
      source={require('./assets/download.png')}
      />
      <Text style={styles.text}>Login</Text>
      <TextInput 
      style={styles.input}
      placeholder='Nome'/>
      <TextInput
      style={styles.input}
      placeholder='Senha'
      />
      <View>
        <Button
          title='sim'
          onPress={() => {navigator.navigate('./')}}
          />
      </View>
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
    width: 350,
    height: 50,
    marginTop: 50,
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
  },
  btn:{
    marginTop:40,
    width: 350,
    borderRadius: 10,
    height: 40,
  },
})