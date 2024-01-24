import { StatusBar, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./css"
import apiLocal from "./src/APIs/apiLocal"


export default function App() {

  const [nusuario, setNusuario] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(e) {
    e.preventDefault()

    if (!nusuario || !password) {
      alert("Campos em branco não são permitidos")
      return
    }

    try {
      const resposta = await apiLocal.post("/LoginMotoqueiros", {
        nusuario, password
      })

      alert("Login feito com sucesso ༼ つ ◕_◕ ༽つ")

      await AsyncStorage.setItem("@token", JSON.stringify(resposta.data.token))
      await AsyncStorage.setItem("@nusuario", JSON.stringify(resposta.data.nusuario))
      return

    } catch (err) {
      alert("Erro ao validar login!")
      return
    }
  }

  async function handleAsyncToken() {
    const recuperaToken = await AsyncStorage.getItem("@token")
    if (recuperaToken == null) {
      alert("Por favor, faço o login primeiro")
      return
    }
    const transformaToken = JSON.parse(recuperaToken)
    alert(`${transformaToken}`)
  }

  async function handleAsyncNusuario() {
    const recuperaNusuario = await AsyncStorage.getItem("@nusuario")
    if (recuperaNusuario == null) {
      alert("Por favor, faço o login primeiro")
      return
    }
    const transformaNusuario = JSON.parse(recuperaNusuario)
    alert(`${transformaNusuario}`)
  }

  async function handleAsyncApagar() {
    await AsyncStorage.removeItem("@token")
    await AsyncStorage.removeItem("@nusuario")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} barStyle="dark-content" />
      <ScrollView>

        <View>
          <Text style={styles.titulo}>Login</Text>
        </View>

        <View style={styles.distancia} />

        <View>
          <Text style={styles.inputTitulo}>Nome</Text>
          <View style={styles.distanciaPequena} />
          <TextInput style={styles.input} placeholder='Nome aqui' value={nusuario} onChangeText={setNusuario} />

          <View style={styles.distanciaPequena} />

          <Text style={styles.inputTitulo}>Senha</Text>
          <View style={styles.distanciaPequena} />
          <TextInput style={styles.input} placeholder='Senha aqui' secureTextEntry={true} value={password} onChangeText={setPassword} />
        </View>

        <View style={styles.distancia} />

        <View>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.botao}>[Enviar]</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAsyncNusuario}>
            <Text style={styles.botao}>[async_Nome]</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAsyncToken}>
            <Text style={styles.botao}>[async_Token]</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAsyncApagar}>
            <Text style={styles.botao}>[async_Apagar]</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
