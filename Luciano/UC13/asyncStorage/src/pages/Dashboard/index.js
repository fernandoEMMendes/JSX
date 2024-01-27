import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native"
import { styles } from "./DashboardCSS.js"
import { useNavigation } from "@react-navigation/native"

import GifImage from '@lowkey/react-native-gif';

export default function Dashboard() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View>
                    <TouchableOpacity>
                        <Text style={styles.botao} onPress={() => { navigation.navigate("login") }}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.distanciaPequena} />

                <View>
                    <Text style={styles.titulo}>Dashboard</Text>
                    <Text style={styles.subTitulo}>Pedido Selecionados</Text>
                    <Text style={styles.subTitulo}>Pedido Disponíveis</Text>
                </View>

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