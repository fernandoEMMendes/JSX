import React, { useState, useEffect } from 'react';
import MapView from "react-native-maps"
import { StyleSheet, View, StatusBar, Text } from 'react-native';

import { requestBackgroundPermissionsAsync, getCurrentPositionAsync } from "expo-location"
//import * as Location from "expo-location"

export default function App() {
  const [localizacao, setLocalizacao] = useState(null)
  //const [localizacao2, setLocalizacao2] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function gerarLocal() {
      const { granted } = await requestBackgroundPermissionsAsync()
      if (granted) {
        const posicaoAtual = await getCurrentPositionAsync()
        setLocalizacao(posicaoAtual.coords)
        setLoading(true)
      }
    }
    gerarLocal()
  }, [localizacao])


  //useEffect(() => {
  //  async function gerarLocal2() {
  //    const { granted } = await Location.requestBackgroundPermissionsAsync({})
  //    if (granted) {
  //      const posicaoAtual2 = await Location.getCurrentPositionAsync({})
  //      setLoading(true)
  //    }
  //  }
  //  gerarLocal2()
  //}, [localizacao2]);

  if (loading === false) {
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="orange" translucent={false}/>
        <Text style={styles.loading}>Aguarde. . . .</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="orange" translucent={false}/>
      <MapView style={styles.MapView}
        loadingEnabled={true}
        initialRegion={{
          latitude: localizacao.latitude,
          longitude: localizacao.longitude,
          latitudeDelta: 0.006,  //quanto menor o número mair próximo o zoom vai ser
          longitudeDelta: 0.006,
        }}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  loading: {
    textAlign: "center",
    textAlignVertical: "center",
  },

  MapView: {
    height: "100%",
    width: "100%",
  },
})