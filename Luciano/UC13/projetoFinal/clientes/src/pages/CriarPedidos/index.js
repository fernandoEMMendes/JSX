import { SafeAreaView, ScrollView, View, Text, Modal, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native"
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import apiLocal from "../../APIs/apiLocal";
import { styles } from "./CriarPedidosCSS";

export default function CriarPedidos() {

    const navigation = useNavigation()

    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(false)

    const [produtos, setProdutos] = useState([""])
    const [produtosId, setProdutosId] = useState("")
    const [produtosNome, setProdutosNome] = useState("")

    const [quant, setQuant] = useState(1)
    const [valProd, setValProd] = useState(0)
    const [mostrarVal, setMostrarVal] = useState(0)

    const [obs, setObs] = useState("")
    const [valTotal, setValTotal] = useState("")

    const [listarPeds, setListarPeds] = useState([""])

    useEffect(() => {
        async function listarPedidosItem() {
            const resposta = await apiLocal.get("/ListarPedidosItem")

            const id = await AsyncStorage.getItem("@idPedido")
            const idParse = JSON.parse(id)

            const filtrar = resposta.data.filter((palmito) => palmito.pedidoId === idParse)

            setListarPeds(filtrar)

            setLoading(false)
        }
        listarPedidosItem()
    }, [listarPeds])

    useEffect(() => {
        async function verProdutos() {
            const resposta = await apiLocal.get(`/ListarProdutos`)
            setProdutos(resposta.data)
        }
        verProdutos()
    }, [produtos])

    useEffect(() => {
        function calcularValor() {
            const conta = quant * valProd
            setMostrarVal(conta)
        }
        calcularValor()
    }, [quant])

    useEffect(() => {
        async function calcularValorTotal() {
            const id = await AsyncStorage.getItem("@idPedido")
            const idParse = JSON.parse(id)
            const resposta = await apiLocal.get(`/SomarItensPedido/${idParse}`)
            setValTotal(resposta.data)
        }
        calcularValorTotal()
    }, [listarPeds])

    async function handleProduto(id, nome, preco) {
        setProdutosId(id)
        setProdutosNome(nome)

        setValProd(preco)
        setMostrarVal(preco)

        setQuant(1)

        setVisible(!visible)
    }


    function handleAdd() {
        setQuant(quant + 1)
    }

    function handleDel() {
        if (quant <= 1) {
            return
        }
        setQuant(quant - 1)
    }

    async function handleAdicionarProduto() {

        try {
            const id = await AsyncStorage.getItem("@idPedido")
            const idParse = JSON.parse(id)

            await apiLocal.post("/CriarPedidosItem", {
                produtoId: produtosId,
                quant: quant,
                val_total: mostrarVal,
                pedidoId: idParse
            })

            setVisible(!visible)

        } catch (err) {
            console.log(err)
        }
    }

    async function handleFinalizarPedido() {

        try {
            const rascunho = "Aguardando confirmação"

            const id = await AsyncStorage.getItem("@idPedido")
            const idParse = JSON.parse(id)

            await apiLocal.put("/ConfirmarPedidos", {
                pedidoId: idParse,
                novoObservacao: obs,
                novoDraft: false,
                novoRascunho: rascunho,
                novoValor: valTotal
            })

            navigation.navigate("dashboard")
        } catch (err) {
            console.log(err)
        }
    }

    if (loading === true) {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Text>Carregando... 👌</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <View>
                        <TouchableOpacity>
                            <Text style={styles.botao} onPress={() => { navigation.navigate("dashboard") }}>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.distancia} />

                    <View>
                        <Text style={styles.titulo}>Fazer Pedidos</Text>
                    </View>

                    <View style={styles.distanciaPequena} />

                    <View>
                        {produtos.length !== 0 && (
                            <>
                                {
                                    produtos.map((palmito) => {
                                        return (
                                            <View>
                                                <View style={styles.distanciaPequena} />
                                                <TouchableOpacity onPress={() => handleProduto(palmito.id, palmito.nome, palmito.preco)}>
                                                    <Text style={styles.subTitulo}>{palmito.nome}</Text>
                                                    <Text style={styles.subTitulo}>R$: {palmito.preco}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }
                            </>
                        )}


                        <Modal
                            visible={visible}
                            animationType="fade"
                            transparent={false}
                        >
                            <SafeAreaView style={styles.modal}>
                                <ScrollView>

                                    <View>
                                        <TouchableOpacity>
                                            <Text style={styles.subTitulo} onPress={() => setVisible(!visible)}>Fechar</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View>
                                        <Text style={styles.titulo}>{produtosNome}</Text>
                                        <View style={styles.distanciaPequena} />
                                        <Text style={styles.modalText}>quantidade</Text>

                                        <View style={styles.modalBotoes}>
                                            <TouchableOpacity onPress={() => handleAdd()}>
                                                <Text style={styles.modalText}>➕</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.modalCont}>{quant}</Text>
                                            <TouchableOpacity onPress={() => handleDel()}>
                                                <Text style={styles.modalText}>➖</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View>
                                            <Text style={styles.modalCont}>R$ {mostrarVal}</Text>
                                        </View>

                                        <View style={styles.distanciaGrande} />
                                        <TouchableOpacity onPress={() => handleAdicionarProduto()}>
                                            <Text style={styles.tercTitulo}>Adicionar</Text>
                                        </TouchableOpacity>
                                    </View>

                                </ScrollView>
                            </SafeAreaView>
                        </Modal>

                    </View>

                    <View style={styles.distanciaGrande} />

                    <View>
                        <Text style={styles.titulo}>Carrinho</Text>
                        {listarPeds.length !== 0 && (
                            <>
                                {listarPeds.map((palmito) => {
                                    return (
                                        <View>
                                            <Text style={styles.subTitulo}>{palmito.produto.nome}</Text>
                                            <Text style={styles.subTitulo}>Quant: {palmito.quant}</Text>
                                            <Text style={styles.subTitulo}>R$: {palmito.val_total}</Text>
                                            <View style={styles.distanciaPequena} />
                                        </View>
                                    )
                                })}
                            </>
                        )}
                    </View>

                    <View>
                        <Text style={styles.subTitulo}>Alguma observação?</Text>
                        <TextInput value={obs} onChangeText={setObs} style={{ backgroundColor: "white", color: "black" }} placeholder="Digite aqui!" />

                        <View style={styles.distanciaGrande} />

                        <Text style={styles.subTitulo}>Total: R${valTotal}</Text>
                        <TouchableOpacity onPress={() => handleFinalizarPedido()}>
                            <Text style={styles.subTitulo}>Fechar Pedido!</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView >
        )
    }
}