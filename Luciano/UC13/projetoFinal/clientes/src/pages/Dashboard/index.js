import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { styles } from "./DashboardCSS"

import React, { useEffect, useState } from "react";
import apiLocal from "../../APIs/apiLocal";
import firebase from "../../../firebaseConnect"
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    async function CriarNovoPedido() {
        const clientesId = await AsyncStorage.getItem("@cliente")
        
        const clienteId = JSON.parse(clientesId)
        
        const resposta = await apiLocal.post("/CriarPedidos", {
                clienteId
            })
            const ocupado = resposta.data.dados
            if(ocupado){
                alert("Cliente já possui pedido em aberto")
            }else{
                alert("Pedido enviado com sucesso")
            }
        navigation("/CriarPedidos")
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.botao} onPress={() => { navigation.navigate("login") }}>Sair</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.botaoCriar} onPress={CriarNovoPedido}>Pedidos     </Text>
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