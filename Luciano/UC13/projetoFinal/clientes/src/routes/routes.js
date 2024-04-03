import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"

const Stack = createNativeStackNavigator()

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import CriarPedidos from "../pages/CriarPedidos"

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CriarPedidos"
                component={CriarPedidos}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}