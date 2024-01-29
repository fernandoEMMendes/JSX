import { SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { styles } from "./LoginCSS"
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import apiLocal from '../../APIs/apiLocal';
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Login() {

    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault()

        if (!email || !password) {
            alert("Campos em branco não são permitidos")
            return
        }

        try {
            const resposta = await apiLocal.post("/LoginClientes", {
                email, password
            })

            await AsyncStorage.setItem("@token", JSON.stringify(resposta.data.token))
            await AsyncStorage.setItem("@email", JSON.stringify(resposta.data.email))
            navigation.navigate("Dashboard")


        } catch (err) {
            alert("Login incorreto!")
            return
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.titulo}>Login de Clientes🧡</Text>
                </View>

                <View style={styles.distancia} />

                <View>
                    <Text style={styles.inputTitulo}>email</Text>
                    <View style={styles.distanciaPequena} />
                    <TextInput style={styles.input} placeholder='Nome aqui' value={email} onChangeText={setEmail} />
                </View>

                <View style={styles.distanciaPequena} />

                <View>
                    <Text style={styles.inputTitulo}>Senha</Text>
                    <View style={styles.distanciaPequena} />
                    <TextInput style={styles.input} placeholder='Senha aqui' secureTextEntry={true} value={password} onChange={setPassword} />
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

