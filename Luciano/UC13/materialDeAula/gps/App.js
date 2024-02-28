import React, { useState, useEffect, useRef } from "react"
import { Image, View, Text, StyleSheet, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps"
import {
    requestForegroundPermissionsAsync, getCurrentPositionAsync,
    watchPositionAsync, LocationAccuracy
} from "expo-location"
import { useKeepAwake } from "expo-keep-awake"

export default function App() {
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
    }, [localizacao]);

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
        }, (response) => {
            setLocalizacao(response)
            mapaRef.current.animateCamera({
                pitch: 0,
                center: response.coords
            })
        })
    }, [])

    return (
        <View style={Styles.centralizar}>
            <StatusBar translucent={false} />
            {localizacao &&
                <View>
                    <Text style={Styles.texto}>APP GPS</Text>
                    <MapView
                        ref={mapaRef}
                        style={Styles.mapview}
                        initialRegion={{
                            latitude: localizacao.coords.latitude,
                            longitude: localizacao.coords.longitude,
                            latitudeDelta: 0.003,
                            longitudeDelta: 0.003,
                        }}
                    >

                        <Marker
                            coordinate={{
                                latitude: localizacao.coords.latitude,
                                longitude: localizacao.coords.longitude,
                            }} >

                            <Image style={Styles.iconMaker} source={require("./src/imgs/kiwi.png")} />
                        </Marker>
                    </MapView>
                    <Text style={Styles.texto}>Fernando EM Mendes</Text>
                </View>
            }
        </View>
    )
}

const Styles = StyleSheet.create({
    centralizar: {
        flex: 1,
    },

    texto: {
        fontSize: 30,
        color: "white",
        backgroundColor: "black",
        textAlign: "center",
        textAlignVertical: "center"
    },

    mapview: {
        height: "90%",
        width: "100%",
    },

    iconMaker: {
        height: 50,
        width: 45,
        resizeMode: 'contain'
    }
})