import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { styles } from "./DashboardCSS"

import React, { useEffect, useState } from "react";
import firebase from "../../../firebaseConnect"

export default function Dashboard() {

    const navigation = useNavigation()
    const [motoqueiros, setMotoqueiros] = useState([""])
    const [latitudeFb, setLatitudeFb] = useState([""])
    const [LongitudeFb, setLongitudeFb] = useState([""])
    const [pedidos, setPedidos] = useState("")
    const [chave, setChave] = useState([""])

    useEffect(() => {
        async function acompanharPedido() {
            await firebase.database().ref("motoqueiros").on("value", (snapshot) => {
                setLatitudeFb([""])
                setLongitudeFb([""])
                snapshot?.forEach((search) => {
                    let data = {
                        latitude: search.val().localizacao.latitude,
                        longitude: search.val().localizacao.longitude
                    }
                    setLatitudeFb(data.latitude)
                    setLongitudeFb(data.longitude)
                })
            })
        }
        acompanharPedido()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.botao} onPress={() => { navigation.navigate("login") }}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.distanciaPequena} />

                <View>
                    <Text style={styles.titulo}>Dashboard</Text>
                    <Text style={styles.subTitulo}>Acompanhar Pedidos</Text>
                    <Text>{latitudeFb}</Text>
                    <Text>{LongitudeFb}</Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}