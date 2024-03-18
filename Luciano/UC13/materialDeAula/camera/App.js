import { useState, useEffect } from "react"
import { Camera, CameraType, requestCameraPermissionsAsync } from "expo-camera"
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [type, setType] = useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions()

  if (!permission) {
    return <View />
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Você precisa dar permisão para acessar a camera!</Text>

        <View style={styles.espaco} />

        <TouchableOpacity onPress={requestPermission}>
          <Text style={styles.botaum}>Permitir!</Text>
        </TouchableOpacity>
      </View>
    )
  }

  function mudarTipoCamera() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back))
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <StatusBar backgroundColor="black" barStyle="light-content" translucent={false} />

          <TouchableOpacity style={styles.button} onPress={mudarTipoCamera}>
            <Text style={styles.buttonText}>Girar Camera!</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  botaum: {
    fontSize: 50
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 50
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
