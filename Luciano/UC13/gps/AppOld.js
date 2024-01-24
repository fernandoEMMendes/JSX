import React, { useState, useEffect, useRef } from 'react'
import {
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import {
  requestBackgroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'

export default function App() {

  const [localizacao, setLocalizacao] = useState(null)
  const [loading, setLoading] = useState(false)

  const mapaRef = useRef(MapView)

  async function requisitarLocal() {
    const { granted } = await requestBackgroundPermissionsAsync()
    if (granted) {
      const positionAtual = await getCurrentPositionAsync()
      setLocalizacao(positionAtual)
      setLoading(true)
    }
  }
  useEffect(() => {
    requisitarLocal()
  }, [localizacao])

  useEffect(() => {
    setLoading(false)
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (resposta) => {
      setLocalizacao(resposta)
      mapaRef.current.animateCamera({
        center: resposta.coords
      })
      setLoading(true)
    })
  }, [])

  if (loading === false) {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='orange' barStyle='light-content' translucent={false} />
        <Text>Aguarde Carregando.....</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='orange' barStyle='light-content' translucent={false} />
      {
        localizacao &&
        <MapView
          ref={mapaRef}
          style={styles.mapview}
          loadingEnabled={true}
          initialRegion={{
            latitude: localizacao.coords.latitude,
            longitude: localizacao.coords.longitude,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006
          }}
        >
          <Marker
            coordinate={{
              latitude: localizacao.coords.latitude,
              longitude: localizacao.coords.longitude
            }}
          />
        </MapView>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAG: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
  },
  mapview: {
    height: '100%',
    width: '100%'
  }
})