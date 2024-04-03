import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Keyboard } from 'react-native'

import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import firebase from '../../../firebaseConnect'
import apiLocal from "../../APIs/apiLocal"

import { styles } from "./DashboardCSS"

export default function Dashboard() {

    const navigation = useNavigation()
    const [user, setUser] = useState('')
    const [id, setId] = useState('')
    const [localizacao, setLocalizacao] = useState(null)

    const [pedidos, setPedidos] = useState([""])
    const [rotaIniciada, setRotaIniciada] = useState(false)

    useEffect(() => {
        async function listarPedidos() {
            const resposta = await apiLocal.get("/ListarPedidos")
            setPedidos(resposta.data)
        }
        listarPedidos()
    }, [pedidos])


    useEffect(() => {
        async function requisitarLocal() {
            const { granted } = await requestForegroundPermissionsAsync()
            if (granted) {
                const positionAtual = await getCurrentPositionAsync()
                setLocalizacao(positionAtual)
            }
        }
        requisitarLocal()
    }, [])



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

        // usuarios.child("pedidos").set({
        //     pedido: numeroBrabo
        // })

        setRotaIniciada(true)

        Keyboard.dismiss()
    }

    async function selecionarPedido(pedidoId) {
        await apiLocal.put("/AdicionarPedido", {
            pedidoId: pedidoId,
            motoqueiroId: id
        })
    }

    function botaoFinalizar() {
        setRotaIniciada(false)
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
                                                <Text style={styles.subTitulo}>{palmito.num}</Text>
                                                {/* Finalizar GPS do motoqueiro
                                                Fazer que quando apertar no número do pedido, abrir o gps com a rota
                                                para o cliente, com base no cep */}
                                            </View>
                                        )}
                                    </>
                                )
                            })}
                        </>
                    )}


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
                                                        <View style={styles.distancia} />
                                                        <TouchableOpacity onPressOut={() => selecionarPedido(palmito.id)}>
                                                            <Text style={styles.subTitulo}>{palmito.num}</Text>
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