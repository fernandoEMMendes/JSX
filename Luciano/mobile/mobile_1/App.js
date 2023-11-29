import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Palmeiras não tem mundial!</Text>
        <StatusBar style="auto" />
      </View>

      <View>
        <Text>Palmeiras 1992</Text>
        <StatusBar style='auto' />
      </View>

      <View>
        <Text>Mangos    😉  🕶👌</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
