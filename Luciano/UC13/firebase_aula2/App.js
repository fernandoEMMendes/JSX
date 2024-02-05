import { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import firebase from './firebaseConnect';

export default function App() {

  //Essa é o ID do motoqueiro que vem do backend
  const motoqueiro = "8b11e447-9fdf-4b97-a431-44bda4a02967"

  const [nome, setNome] = useState("")
  const [cidade, setCidade] = useState("")

  async function handleCadastrar() {
    if (!nome || !cidade) {
      alert("Campos vazios!")
      return
    }

    let usuarios = await firebase.database().ref("vendedores").child(motoqueiro)
    let chave = usuarios.push().key

    usuarios.child(chave).set({
      nome: nome,
      cidade: cidade,
    })

    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} barStyle={"default"} backgroundColor="#000000" />
      <Text>ヾ(•ω•`)o</Text>

      <TextInput value={nome} onChangeText={setNome} placeholder='Nome aqui' />
      <TextInput value={cidade} onChangeText={setCidade} placeholder='Cidade aqui' />

      <TouchableOpacity onPress={handleCadastrar}>
        <Text>Salvar</Text>
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
