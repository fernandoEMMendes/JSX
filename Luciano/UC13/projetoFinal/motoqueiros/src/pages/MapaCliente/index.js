import React, { useState, useEffect, useRef } from 'react'
import { useKeepAwake } from "expo-keep-awake"
import {
  View,
  Image
} from 'react-native'

import MapView, { Marker } from "react-native-maps"
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'

import { styles } from "./MapaDoClienteCSS"

export default function MapaDoCliente() {
  useKeepAwake()

  const [localizacao, setLocalizacao] = useState(null)

  const mapaRef = useRef(MapView)

  useEffect(() => {
    async function reqLoc() {
      const { granted } = await requestForegroundPermissionsAsync()
      if (granted) {
        const posicaoAtual = await getCurrentPositionAsync()
        setLocalizacao(posicaoAtual)
      }
    }
    reqLoc()
  }, []);


  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (resposta) => {
      setLocalizacao(resposta)
      mapaRef.current.animateCamera({
        pitch: 70,
        center: resposta.coords
      })
    })
  }, [])
  // console.log('Latitude',localizacao.coords.latitude)
  // console.log('Longitude',localizacao.coords.longitude)




  // const [cliente1, setCliente1] = useState([''])
 
  //   useEffect(() => {
  //       async function loadClientes() {
  //           const resposta = await apiLocal.get("/ListarClientes")
  //           setCliente1(resposta.data);
  //       }
  //       loadClientes()
  //   }, [])

    

  return (
    <View style={styles.container}>
          {localizacao &&
              <MapView
                ref={mapaRef}
                style={styles.mapview}
                loadingEnabled={true}
                initialRegion={{
                  latitude: localizacao.coords.latitude,
                  longitude: localizacao.coords.longitude,
                  latitudeDelta: 0.003,
                  longitudeDelta: 0.003
                }}
              >
                <Marker
                  coordinate={{
                    latitude: localizacao.coords.latitude,
                    longitude: localizacao.coords.longitude,
                  }}
                >
                  <Image
                    style={styles.iconMarker}
                    source={require("../../imgs/moto.png")}
                  />
                </Marker>

              </MapView>
            
          }
      
        {/* Finalizar GPS do motoqueiro
                    Fazer que quando apertar no número do pedido, abrir o gps com a rota
                    para o cliente, com base no cep 
                    
                    MapRef.current.animateCamera() está marcando como indefinido, descobrir pq ou encontrar alternativa */}
      
    </View>
  )
}