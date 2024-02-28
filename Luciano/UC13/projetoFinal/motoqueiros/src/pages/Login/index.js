import { Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./LoginCSS"
import apiLocal from "../../APIs/apiLocal"
import { useNavigation } from '@react-navigation/native';
import firebase from "../../../firebaseConnect"
import { requestForegroundPermissionsAsync } from 'expo-location'


export default function Login() {

    const navigation = useNavigation()

    const [nusuario, setNusuario] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        async function requisitarLocal() {
            const { granted } = await requestForegroundPermissionsAsync()
        }
        requisitarLocal()
    }, [])

    async function handleLogin(e) {
        e.preventDefault()

        if (!nusuario || !password) {
            alert("Campos em branco não são permitidos")
            return
        }

        try {
            const resposta = await apiLocal.post("/LoginMotoqueiros", {
                nusuario, password
            })

            await AsyncStorage.setItem("@token", JSON.stringify(resposta.data.token))

            await AsyncStorage.setItem("@idusuario", JSON.stringify(resposta.data.id))
            await AsyncStorage.setItem("@nusuario", JSON.stringify(resposta.data.nusuario))

            navigation.navigate("dashboard")

            setNusuario("")
            setPassword("")

        } catch (err) {
            alert("Login incorreto!")
            return
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.distancia} />

                <View>
                    <Text style={styles.inputTitulo}>Nome</Text>
                    <View style={styles.distanciaPequena} />
                    <TextInput style={styles.input} placeholder='Nome aqui' value={nusuario} onChangeText={setNusuario} />

                    <View style={styles.distanciaPequena} />

                    <Text style={styles.inputTitulo}>Senha</Text>
                    <View style={styles.distanciaPequena} />
                    <TextInput style={styles.input} placeholder='Senha aqui' secureTextEntry={true} value={password} onChangeText={setPassword} />
                </View>

                <View style={styles.distancia} />

                <View>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.botao}>[Enviar]</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
