import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Palmeiras não tem mundial!</Text>
        <View style={styles.headerLine}></View>
      </View>

      <ScrollView style={styles.content}>

        <Text style={styles.Texto} ></Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D2BD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center'
  },
  headerText: {
    color: "black",
    fontSize: 24
  },
  headerLine: {
    backgroundColor: "purple",
    height: 2,
    width: 300,
    marginTop: 5
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  Text: {
    color: "black",
    fontSize: 16,
    textAlign: 'justify'
  }

});
