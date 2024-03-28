import { SafeAreaView, ScrollView, View, Text, Modal, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./CriarPedidosCSS";

import React, { useState, useEffect } from "react";
import apiLocal from "../../APIs/apiLocal";

export default function CriarPedidos() {

    const [visible, setVisible] = useState(false)

    const [clienteId, setClienteId] = useState("");

    const [categoria, setCategoria] = useState([""])
    const [categoriaId, setCategoriaId] = useState("")

    const [produtos, setProdutos] = useState([""])
    const [produtosId, setProdutosId] = useState("")
    const [quant, setQuant] = useState("")
    const [obs, setObs] = useState("")
    const [valTotal, setValTotal] = useState("")

    const [listarPeds, setListarPeds] = useState([""])

    useEffect(() => {
        async function verCategorias() {
            const resposta = await apiLocal.get("/ListarCategorias")
            setCategoria(resposta.data)
        }
        verCategorias()
    }, [categoria]);

    // useEffect(() => {
    //     async function verProdutos() {
    //         const resposta = await apiLocal.get(`/ListarProdutosCategoria//${categoriaId}`)
    //         setProdutos(resposta.data.filter((item) => { item.categoriaId === categoriaId }))
    //     }
    //     verProdutos()
    // }, [categoriaId])

    function toggleModal(modal) {
        setVisible(modal)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.distancia} />

                <View>
                    <Text style={styles.titulo}>Fazer Pedidos</Text>
                </View>

                <View style={styles.distanciaPequena} />

                <View>
                    <TouchableOpacity>
                        <Text style={styles.subTitulo} onPress={() => setVisible(!visible)}>Escolher Categoria</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        onRequestClose={() => setVisible(false)}>
                        <SafeAreaView style={styles.container}>
                            <ScrollView>

                                <View>
                                    <Text style={styles.titulo}>Modal opened</Text>
                                </View>

                                <View>
                                    <Pressable>
                                        <Text style={styles.subTitulo} onPress={() => setVisible(!visible)}>Fechar Modal</Text>
                                    </Pressable>
                                </View>

                            </ScrollView>
                        </SafeAreaView>
                    </Modal>

                </View>

            </ScrollView>
        </SafeAreaView >
    )
}