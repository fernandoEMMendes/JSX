import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Keyboard, Modal, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from 'expo-location'
import MapView, { Marker } from "react-native-maps"

import AsyncStorage from '@react-native-async-storage/async-storage'
import firebase from '../../../firebaseConnect'
import apiLocal from "../../APIs/apiLocal"

import { styles } from "./DashboardCSS"
import { useKeepAwake } from "expo-keep-awake"

import { useNavigation } from '@react-navigation/native'

export default function Dashboard() {
    useKeepAwake()

    const navigation = useNavigation()

    const [user, setUser] = useState('')
    const [id, setId] = useState('')

    const [localizacao, setLocalizacao] = useState(null)
    const mapaRef = useRef(MapView)

    const [pedidos, setPedidos] = useState([""])
    const [rotaIniciada, setRotaIniciada] = useState(false)

    const [visible, setVisible] = useState(false)

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

    // Finalizar a parte de requição da cordenada
    // incluir a localização atual do motoqueiro
    // o destino dele e a rota

    useEffect(() => {
        async function listarPedidos() {
            const resposta = await apiLocal.get("/ListarPedidos")
            setPedidos(resposta.data)
        }
        listarPedidos()
    }, [pedidos])

    useEffect(() => {
        async function loadNome() {
            const iNome = await AsyncStorage.getItem('@nusuario')
            const nome = JSON.parse(iNome)
            setUser(nome)
        }
        loadNome()
    }, [])

    useEffect(() => {
        async function loadID() {
            const iID = await AsyncStorage.getItem('@idusuario')
            const Id = JSON.parse(iID)
            setId(Id)
        }
        loadID()
    }, [])



    async function handleInicio() {
        await AsyncStorage.clear()
        navigation.navigate('login')
    }


    async function botaoFireBase() {

        const RecuperadoId = await AsyncStorage.getItem('@idusuario')
        const recId = JSON.parse(RecuperadoId)

        let usuarios = await firebase.database().ref('motoqueiros').child(recId)

        usuarios.child("localizacao").set({
            latitude: localizacao.coords.latitude,
            longitude: localizacao.coords.longitude
        })

        setRotaIniciada(true)

        Keyboard.dismiss()
    }

    async function selecionarPedido(pedidoId, pedNum) {
        await apiLocal.put("/AdicionarPedido", {
            pedidoId: pedidoId,
            motoqueiroId: id
        })

        const RecuperadoId = await JSON.parse(AsyncStorage.getItem('@idusuario'))

        let usuarios = await firebase.database().ref("motoqueiros").child(RecuperadoId)
        usuarios.child("pedidos").set({
            pedido: pedNum
        })
    }

    function botaoFinalizar() {
        setRotaIniciada(false)
    }

    function handleVisible(estado) {
        setVisible(estado)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View>
                    <TouchableOpacity>
                        <Text style={styles.botao} onPress={handleInicio}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.distanciaPequena} />

                <View>
                    <Text style={styles.subTitulo}>Ola, {user}</Text>

                    <View style={styles.distancia} />
                    <Text style={styles.subTitulo}>Pedido Selecionados</Text>
                    {pedidos.length !== 0 && (
                        <>
                            {pedidos.map((palmito) => {
                                return (
                                    <>
                                        {palmito.motoqueiroId === id && (
                                            <View>
                                                <TouchableOpacity onPress={() => handleVisible(true)}>
                                                    <Text style={styles.subTitulo} key={palmito.id} >{palmito.num}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                    </>
                                )
                            })}
                        </>
                    )}

                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={visible}
                    >
                        <SafeAreaView style={styles.container}>
                            <ScrollView>
                                <View>
                                    <TouchableOpacity onPress={() => handleVisible(false)}>
                                        <Text style={styles.botao}>Fechar</Text>
                                    </TouchableOpacity>
                                    {localizacao &&
                                        <View>

                                        </View>
                                    }
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </Modal>
                    {/* Finalizar GPS do motoqueiro
                    Fazer que quando apertar no número do pedido, abrir o gps com a rota
                    para o cliente, com base no cep */}

                    <View style={styles.distancia} />
                    {rotaIniciada === false && (
                        <>
                            <Text style={styles.subTitulo}>Pedido Disponiveis</Text>


                            {pedidos.length !== 0 && (
                                <>
                                    {pedidos.map((palmito) => {
                                        return (
                                            <>
                                                {palmito.status === "Aguardando entregador..." && (
                                                    <View>
                                                        <View style={styles.distancia} key={palmito.id} />
                                                        <TouchableOpacity onPressOut={() => selecionarPedido(palmito.id, palmito.num)}>
                                                            <Text style={styles.subTitulo} key={palmito.id}>{palmito.num}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )}
                                            </>
                                        )
                                    })}
                                </>
                            )}


                        </>
                    )}

                    <TouchableOpacity
                        style={[styles.buttonFirebase, rotaIniciada === true && { opacity: 0.5 }]}
                        onPress={botaoFireBase}
                        disabled={rotaIniciada === true}>
                        <Text style={styles.textButtonFire}>iniciar Rota</Text>
                    </TouchableOpacity>

                    <View style={styles.distanciaGrande} />

                    <TouchableOpacity
                        style={[styles.buttonFirebase2, rotaIniciada === false && { opacity: 0.5 }]}
                        onPress={botaoFinalizar}
                        disabled={rotaIniciada === false}>
                        <Text style={styles.textButtonFire}>Finalizar Rota</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}