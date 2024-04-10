import Rotas from "./src/routes/routes";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

console.disableYellowBox = true

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" barStyle="light-content" translucent={false} />
      <Rotas />
    </NavigationContainer>
  )
}