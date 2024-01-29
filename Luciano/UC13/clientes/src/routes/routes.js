import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"

const Stack = createNativeStackNavigator()

import Login from "../pages/Login"

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}