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

        // const ocupado = resposta.data.dados
        // // if(ocupado){
        // //     alert("Cliente já possui pedido em aberto")
        // // }else{
        // //     alert("Pedido enviado com sucesso")
        // // }

        const resposta2 = await apiLocal.get("/ListarPedidos")

        const pedidoExt = resposta2.data.filter((item) => item.clienteId === clienteId)
        const filtrarPedido = pedidoExt.filter((item) => item.draft === true)

        const idPedido = filtrarPedido.map((item) => item.id)

        await AsyncStorage.setItem("@idPedido", JSON.stringify(idPedido[0]))

        navigation.navigate("CriarPedidos")
    }

    // Fazer Listar do pedidos do cliente, para acompanha-los (cozinha, motoboy, etc...)
    // Só mostrar pedidos que não sejam RASCUNHOS!!!
    // Fazer botão para o cliente completar a entrega e finalizar o atendimento
    // Tomar 2 cervejas 😎

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.botao} onPress={() => { navigation.navigate("login") }}>Sair</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.botaoCriar} onPress={CriarNovoPedido}>🛒      </Text>
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