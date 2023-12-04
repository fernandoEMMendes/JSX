import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' translucent={false} barStyle="dark-content" />

      <View style={styles.br} />


      <ScrollView>
        <View style={styles.tituloFundo}>
          <Text style={styles.titulo}>🌆Cidade de Bauru🌆</Text>
        </View>

        <View style={styles.textoFundo}>
          <Text style={styles.texto}>
            Bauru é um município brasileiro do interior de São Paulo,sendo o mais
            populoso do Centro-Oeste paulista. É uma das 19 cidades que integram a
            Região Imediata de Bauru que, por sua vez, é uma das quatro regiões
            imediatas que integram a Região Intermediária de Bauru, que é formada por 48
            cidades
          </Text>
        </View>

        <View style={styles.textoFundo}>
          <Text style={styles.texto}>
            Historicamente, a região ocupada por Bauru era território
            disputado
            entre dois grupos indígenas: os caingangues e os guaranis. No
            século XVIII,
            bandeirantes paulistas tentaram se estabelecer na região, que
            era ponto de
            travessia das monções (expedições fluviais) que se dirigiam até
            Mato Grosso e
            Goiás, mas foram impedidos por ataques dos índios locais.
          </Text>
        </View>

        <View style={styles.textoFundo2}>
          <Text style={styles.texto}>
            O Jardim Botânico municipal começou a ser construído na década de 1910, no lugar onde se extraía água para abastecer a cidade, sendo que o lugar era rico em nascentes e a mata as protegia.
            O Centro de Visitação do parque foi inaugurado em 7 de julho de 2003, onde estão expostas informações sobre o parque, cujas principais atrações são as trilhas ecológicas, o herbário e o viveiro.
            O Horto Florestal de Bauru conta com 50 hectares, abrigando uma estação experimental de pesquisa de pinus, eucalipto e outras espécies exóticas e nativas da flora.
            O Parque Zoológico Municipal de Bauru, inaugurado em 24 de agosto de 1980, conta com diversas espécies de animais, recebendo em média 150 mil pessoas por ano.
          </Text>
        </View>

        <View style={styles.footerFundo}>
          <Text style={styles.footer}>
            Cidade Bauru™
          </Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloFundo: {
    margin: 15,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "lightskyblue",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  textoFundo: {
    padding: 20,
  },
  textoFundo2: {
    padding: 20,
    backgroundColor: "lightgreen",
  },

  texto: {
    textAlign: "justify",
    fontFamily: "monospace",
  },

  footerFundo: {
    backgroundColor: "black",
    padding: 10,
  },

  footer: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
  }
});
