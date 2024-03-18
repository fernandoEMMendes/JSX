import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import QRCode from "react-native-qrcode-svg"

export default function App() {

  const [textoEntrada, setTextoEntrada] = useState("")
  const [qrValor, setQrValor] = useState("")
  const [ativo, setAtivo] = useState(false)

  function handleGerar() {
    if (textoEntrada === "") { return }
    setQrValor(textoEntrada)
    setTextoEntrada("")
    setAtivo(true)
    Keyboard.dismiss()
  }

  function handleLimpar() {
    setQrValor("")
    setTextoEntrada("")
    setAtivo(false)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor="black" barStyle="light-content" />
      <Text style={styles.tituloTexto}>Gerador de QRCode</Text>

      {qrValor.length > 0 ? (
        <QRCode
          value={qrValor ? qrValor : "NA"}
          size={200}
          color="#000000"
          backgroundColor='#FFFFFF'
        />
      ) : (
        <Text>¯\_(ツ)_/¯</Text>
      )}

      <TextInput style={styles.entradaDados} placeholder='Digite aqui' value={textoEntrada} onChangeText={setTextoEntrada} />

      <TouchableOpacity style={styles.buttonGerar} onPress={handleGerar} disabled={ativo === true}>
        <Text style={[styles.textoGerar, { opacity: ativo === true ? 0.3 : 1 }]} >Gerar QRCode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLimpar} onPress={handleLimpar} disabled={ativo === false}>
        <Text style={[styles.textoLimpar, { opacity: ativo === false ? 0.3 : 1 }]}>Limpar QRCode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloTexto: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  entradaDados: {
    marginTop: 30,
    borderWidth: 1,
    height: 40,
    width: '70%',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10
  },
  buttonGerar: {
    backgroundColor: '#005CFF',
    marginTop: 20,
    height: 45,
    width: '70%',
    borderRadius: 10,
  },
  textoGerar: {
    textAlign: 'center',
    padding: 6.25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  buttonLimpar: {
    backgroundColor: '#DB063E',
    marginTop: 20,
    height: 45,
    width: '70%',
    borderRadius: 10,
  },
  textoLimpar: {
    textAlign: 'center',
    padding: 6.25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});