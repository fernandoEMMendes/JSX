import { SafeAreaView, ScrollView, View, Text, Modal, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native"
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import apiLocal from "../../APIs/apiLocal";
import { styles } from "./CriarPedidosCSS";

export default function CriarPedidos() {

    const navigation = useNavigation()

    const [visible, setVisible] = useState(false)

    const [produtos, setProdutos] = useState([""])
    const [produtosId, setProdutosId] = useState("")
    const [produtosNome, setProdutosNome] = useState("")
    const [quant, setQuant] = useState("")
    const [obs, setObs] = useState("")
    const [valTotal, setValTotal] = useState("")

    const [listarPeds, setListarPeds] = useState([""])

    useEffect(() => {
        async function verProdutos() {
            const resposta = await apiLocal.get(`/ListarProdutos`)
            setProdutos(resposta.data)
        }
        verProdutos()
    }, [produtos])

    function handleProduto(id, nome) {
        setProdutosId(id)
        setProdutosNome(nome)
        setVisible(!visible)
    }

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
                                            <TouchableOpacity onPress={() => handleProduto(palmito.id, palmito.nome)}>
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
                        animationType="slide"
                        onRequestClose={() => setVisible(false)}>
                        <SafeAreaView style={styles.container}>
                            <ScrollView>

                                <View>
                                    <TouchableOpacity>
                                        <Text style={styles.subTitulo} onPress={() => setVisible(!visible)}>Fechar</Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Text style={styles.titulo}>{produtosNome}</Text>
                                    <View style={styles.distanciaPequena} />
                                    <Text style={styles.subTitulo}>quantidade</Text>
                                    <TextInput style={{ backgroundColor: "white" }} value={quant} onChangeText={setQuant} />
                                    <View style={styles.distanciaGrande} />
                                    <TouchableOpacity>
                                        <Text style={styles.tercTitulo}>Adicionar produto</Text>
                                    </TouchableOpacity>
                                </View>

                            </ScrollView>
                        </SafeAreaView>
                    </Modal>

                </View>

                <View style={styles.distanciaGrande} />

                <View>
                    <Text style={styles.titulo}>Carrinho</Text>
                </View>

            </ScrollView>
        </SafeAreaView >
    )
}