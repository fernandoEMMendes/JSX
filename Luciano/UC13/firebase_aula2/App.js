import { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from './firebaseConnect';

export default function App() {
  
  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('usuarios').set('EdvaldoOliveira')
    }
    dados()
  },[])
  
  async function dados2(){
    await firebase.database().ref('usuarios').set('EdvaldoOliveira')
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} barStyle={"default"} backgroundColor="#000000" />
      <Text>ヾ(•ω•`)o</Text>
      
      <TouchableOpacity onPress={dados2}>
        <Text>wnduawbnduawbduawdbi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
