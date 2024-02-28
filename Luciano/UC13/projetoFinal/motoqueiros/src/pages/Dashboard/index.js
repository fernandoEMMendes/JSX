import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Keyboard } from 'react-native'

import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import firebase from '../../../firebaseConnect'

import { styles } from "./DashboardCSS"
import GifImage from '@lowkey/react-native-gif';

export default function Dashboard() {

    const navigation = useNavigation()
    const [user, setUser] = useState('')
    const [id, setId] = useState('')
    const [localizacao, setLocalizacao] = useState(null)

    const numeroBrabo = Math.floor(Math.random() * 999)

    async function handleInicio() {
        await AsyncStorage.clear()
        navigation.navigate('login')
    }

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

    async function botaoFireBase() {

        const RecuperadoId = await AsyncStorage.getItem('@idusuario')
        const recId = JSON.parse(RecuperadoId)

        let usuarios = await firebase.database().ref('motoqueiros').child(recId)

        usuarios.child("localizacao").set({
            latitude: localizacao.coords.latitude,
            longitude: localizacao.coords.longitude
        })

        usuarios.child("pedidos").set({
            pedido: numeroBrabo
        })
        alert('Dados enviados ao FireBase!')

        Keyboard.dismiss()
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
                    <Text style={styles.titulo}>Dashboard</Text>
                    <Text style={styles.subTitulo}>Motoqueiro: {user}</Text>
                    <Text style={styles.subTitulo}>Pedido Selecionados</Text>
                    <Text style={styles.subTitulo}>Pedido Disponíveis</Text>
                    <TouchableOpacity
                        style={styles.buttonFirebase}
                        onPress={botaoFireBase}>
                        <Text style={styles.textButtonFire}>iniciar Rota</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonInicio}
                        onPress={handleInicio}>
                        <Text style={styles.textButtonInicio}>Limpar dados</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.distanciaPequena} />

                <View style={styles.gifCaixa}>
                    <GifImage
                        source={{
                            uri: "https://media1.tenor.com/m/qDk_KMn1d1MAAAAC/coffee-morning-good-morning-coffee-images.gif"
                        }}
                        style={styles.gif}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}