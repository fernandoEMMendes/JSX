import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./DashboardCSS"

export default function Dashboard() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Dashboard</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}