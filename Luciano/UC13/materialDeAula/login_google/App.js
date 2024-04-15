import { styles } from './AppCSS';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle={'light-content'} translucent={true} />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}


