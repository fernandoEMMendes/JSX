import {
  StatusBar, Text,
  View, SafeAreaView, ScrollView,
  TextInput, TouchableOpacity
} from 'react-native';
import { styles } from "./css"
import { useState, useEffect } from 'react';
import apiCep from './APIs/apiCep';


export default function App() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [cep, setCep] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [rua, setRua] = useState("")

  const [viaCep, setViaCep] = useState("")

  async function handleCep() {
    if (cep.length < 8 || cep.length > 8) {
      toast.warn('CEP incorreto')
      return
    }
    
    const response = await apiCep.get(`${cep}/json`)
    setViaCep(response.data)
  }

  useEffect(() => {
    function addViaCep() {
      setEstado(viaCep.uf || estado)
      setCidade(viaCep.localidade || cidade)
      setBairro(viaCep.bairro || bairro)
      setRua(viaCep.logradouro || rua)
    }
    addViaCep()
  }, [handleCep]);

  function handleClick(e) {
    e.preventDefault()

    if (!nome || !email || !senha) {
      alert("Campos em branco não são permitidos")
      return
    }

    alert(`
          nome: ${nome} \n 
          email: ${email} \n
          senha: ${senha} \n
          cep: ${cep} \n
          estado: ${estado} \n
          cidade: ${cidade} \n
          bairro: ${bairro} \n
          rua: ${rua}`)
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor="bisque" barStyle="dark-content" />

      <ScrollView>
        <View>
          <Text style={styles.titulo}>Formulário🧾</Text>
        </View>

        <View style={styles.distancia} />

        <View>
          <Text style={styles.titulo2}>Insira seu Nome abaixo</Text>
          <TextInput style={styles.borda} placeholder='escreva aqui' value={nome} onChangeText={setNome} />

          <Text style={styles.titulo2}>Insira seu Email abaixo</Text>
          <TextInput style={styles.borda} placeholder='escreva aqui' value={email} onChangeText={setEmail} />

          <Text style={styles.titulo2}>Insira sua Senha abaixo</Text>
          <TextInput secureTextEntry={true} style={styles.borda} placeholder='escreva aqui' value={senha} onChangeText={setSenha} />

          <Text style={styles.titulo2}>Insira seu CEP abaixo</Text>
          <TextInput style={styles.borda} placeholder="escreva aqui" onBlur={handleCep} value={cep} onChangeText={setCep} />

          <Text style={styles.titulo2}>Insira seu Estado abaixo</Text>
          <TextInput readOnly style={styles.borda} placeholder="escreva aqui" value={estado} onChangeText={setEstado} />

          <Text style={styles.titulo2}>Insira sua Cidade abaixo</Text>
          <TextInput readOnly style={styles.borda} placeholder="escreva aqui" value={cidade} onChangeText={setCidade} />

          <Text style={styles.titulo2}>Insira seu Bairro abaixo</Text>
          <TextInput readOnly style={styles.borda} placeholder="escreva aqui" value={bairro} onChangeText={setBairro} />

          <Text style={styles.titulo2}>Insira sua Rua abaixo</Text>
          <TextInput readOnly style={styles.borda} placeholder="escreva aqui" value={rua} onChangeText={setRua} />
        </View>

        <View style={styles.distancia} />

        <View>
          <TouchableOpacity>
            <Text style={styles.botao} onPress={handleClick}>[Enviar]</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.distancia}/>

        <View style={styles.fundoFooter}>
          <Text style={styles.fotter}>(☞ﾟヮﾟ)☞❤☜(ﾟヮﾟ☜)</Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
