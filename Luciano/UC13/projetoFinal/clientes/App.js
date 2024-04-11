import Rotas from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "react-native"

console.disableYellowBox = true

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" barStyle="light-content" translucent={false} />
      <Rotas />
    </NavigationContainer>
  )
}