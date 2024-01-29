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
            navigation.navigate("login")


        } catch (err) {
            alert("Login incorreto!")
            return
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Login de Clientes🧡</Text>
                </View>

                <View>
                    <Text>email</Text>
                    <TextInput placeholder='Nome aqui' value={email} onChangeText={setEmail} />
                </View>

                <View>
                    <Text>Senha</Text>
                    <TextInput placeholder='Senha aqui' secureTextEntry={true} value={password} onChange={setPassword} />
                </View>

                <View>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

