import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { styles } from "./DashboardCSS"

import React, { useEffect, useState } from "react";
import apiLocal from "../../APIs/apiLocal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Dashboard() {

    const navigation = useNavigation()
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(true)
    const [pedidoId, setPedidoId] = useState("")

    const [pedidos, SetPedidos] = useState([""])
    const [itemsPedido, setItemsPedido] = useState([""])
    const [valTotal, setValTotal] = useState("")
    const [obs, setObs] = useState("")

    useEffect(() => {
        async function buscarPedidos() {
            const id = await AsyncStorage.getItem("@cliente")
            const idParse = JSON.parse(id)

            const resposta = await apiLocal.get("/ListarPedidos")

            const pedidosCliente = resposta.data.filter((palmito) => palmito.clienteId === idParse)
            const pedidosFeitos = pedidosCliente.filter((palmito) => palmito.draft === false && palmito.entrega === false)

            SetPedidos(pedidosFeitos)
        }
        buscarPedidos()
    }, [pedidos])

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

    async function handleVerItems(idPedido) {
        const resposta = await apiLocal.get("/ListarPedidosItem")

        if (resposta.data.filter((palmito) => palmito.pedido.status) !== "A caminho...") {
            return
        }

        const itemPedido = resposta.data.filter((palmito) => palmito.pedido.id === idPedido)
        setItemsPedido(itemPedido)
        setValTotal(itemPedido[0].pedido.ped_val_total)
        setObs(itemPedido[0].pedido.observacao)

        setLoading(false)
        setVisible(true)
        setPedidoId(idPedido)
    }

    async function handleFinalizarPedido() {
        try {

            const string = String(pedidoId)

            await apiLocal.put("/AcabarServico", {
                pedidoId: string,
                novoEntrega: true,
            })

            setVisible(!visible)

        } catch (err) { console.log(err.response.data.error) }
    }

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
                    {pedidos.length !== 0 && (
                        <>
                            {pedidos.map((palmito) => {
                                return (
                                    <View>
                                        <View style={styles.distanciaPequena} />
                                        <TouchableOpacity onPress={() => handleVerItems(palmito.id)}>
                                            <Text style={styles.subTitulo}>{palmito.num}</Text>
                                            <Text style={styles.subTitulo}>{palmito.status}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </>
                    )}


                    <Modal
                        visible={visible}
                        animationType="slide"
                    >
                        {loading === true ? (
                            <>
                                return(
                                <View>
                                    <Text>Carregando</Text>
                                </View>
                                )
                            </>
                        ) : (
                            <SafeAreaView style={styles.container}>
                                <ScrollView>
                                    <View>
                                        <TouchableOpacity>
                                            <Text style={styles.botao} onPress={() => setVisible(false)}>Fechar</Text>
                                        </TouchableOpacity>

                                        {itemsPedido.length !== 0 && (
                                            <>
                                                {itemsPedido.map((palmito) => {
                                                    return (
                                                        <View>
                                                            <Text style={styles.subTitulo}>{palmito.produto.nome} X{palmito.quant}</Text>
                                                            <Text style={styles.subTitulo}>R$ {palmito.val_total}</Text>
                                                        </View>
                                                    )
                                                })}
                                            </>
                                        )}
                                        <View style={styles.distanciaPequena} />
                                        <Text style={styles.subTitulo}>Total: {valTotal}</Text>
                                        <Text style={styles.subTitulo}>Obs: {obs}</Text>
                                        <View style={styles.distancia} />
                                        <TouchableOpacity onPress={() => handleFinalizarPedido()}>
                                            <Text style={styles.subTitulo}>Finalizar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </SafeAreaView>
                        )}
                    </Modal>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}