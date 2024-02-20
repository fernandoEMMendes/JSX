import React, { useState, useEffect } from 'react'
import firebase from './firebaseConnect'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';

export default function App() {

  //identificação do vendedor
  const vendedor = Math.floor(Math.random() * 999999)

  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  const [vendedores, setVendedores] = useState("")

  async function cadastroFB() {
    if (!nome || !cidade) {
      alert('Campos Vazios')
    }
    let usuarios = await firebase.database().ref('vendedores')
    let chave = usuarios.push().key

    usuarios.child(chave).set({
      nome: nome,
      cidade: cidade
    })
    Keyboard.dismiss()
  }

  useEffect(() => {
    async function buscarVendedores() {
      await firebase.database().ref("vendedores").on("value", (palmito) => {
        palmito?.forEach((search) => {
          let data = {
            key: search.key,
            nome: search.val().nome,
            cidade: search.val().cidade
          }
          setVendedores(oldArray => [...oldArray, data])
          console.log(vendedores)
        })
      })
    }
    buscarVendedores()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000000' barStyle={'default'} translucent={false} />
      <Text style={styles.textoTitulo}>Usando o Firebase</Text>

      <TextInput
        style={styles.inputFormulario}
        placeholder='Digite Seu Nome'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.inputFormulario}
        placeholder='Digite Sua Cidade'
        value={cidade}
        onChangeText={setCidade}
      />
      <TouchableOpacity style={styles.botaoEnviar} onPress={cadastroFB}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>

      <Text>{vendedores.nome}</Text>
      <Text>{vendedores.cidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  textoTitulo: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: 'bold'
  },
  inputFormulario: {
    marginTop: 10,
    height: 50,
    width: '95%',
    fontSize: 20,
    padding: 7.5,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center'
  },
  botaoEnviar: {
    marginTop: 10,
    backgroundColor: '#005CFF',
    height: 50,
    width: '50%',
    borderRadius: 10
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 7.5
  }
});
