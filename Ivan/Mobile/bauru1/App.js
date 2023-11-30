import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Cidade de Bauru - SP</Text>
      </View>
      <View style={styles.distancia}>
        <Text style={styles.conteudo}>
          Bauru é um município brasileiro do interioro de São Paulo
          sendo o mais populoso do Centro-Oeste paulista, É uma das 19 cidades que
          integram a Região Imediata de Bauru que, por sua vez, é uma das quatro
          regiões imediatas que integram a Região Intermediária de Bauru, que é formada por 48 cidades
        </Text>
        <Image source={require("./imgs/bauru.jpeg")} style={styles.image} />
      </View>

      <View style={styles.distancia}>
        <Text style={styles.conteudo2}>
          Bauru é conhecida por um sanduíche que leva o mesmo nome, criado
          pelo advogado bauruense Casimiro Pinto Neto no bar Ponto Chic, localizado
          no Largo do Paiçandu, na cidade de São Paulo, em 1934, quando era aluno
          da Faculdade de Direito da Universidade de São Paulo. Mais tarde, o
          sanduíche ganhou fama devido ao bar "Zé do Esquinão", durante décadas
          instalado no centro urbano de Bauru.
        </Text>
        <Image source={require("./imgs/bauru2.jpg")} style={styles.image} />
      </View>

      <View style={styles.secaoesquerda}>
        <Image source={require("./imgs/bauru3.jpg")} style={styles.imagemEsquerda} />
        <Text style={styles.conteudo3}>
          A área do município, segundo o Instituto Brasileiro de
          Geografia e Estatística, é de 667,684 km².[2] Situa-se a 22º18′54” de
          latitude sul e 49º03′39” de longitude oeste e está a uma distância de 326
          quilômetros a noroeste da capital paulista. Limita-se com: Reginópolis (a
          norte); Arealva (a nordeste); Pederneiras (a leste); Piratininga (a sul);
          Agudos (sudeste); e Avaí (oeste).
        </Text>
      </View>

      <View style={styles.secaodireita}>
        <Text style={styles.conteudo4}>
          A área do município, segundo o Instituto Brasileiro de
          Geografia e Estatística, é de 667,684 km².[2] Situa-se a 22º18′54” de
          latitude sul e 49º03′39” de longitude oeste e está a uma distância de 326
          quilômetros a noroeste da capital paulista. Limita-se com: Reginópolis (a
          norte); Arealva (a nordeste); Pederneiras (a leste); Piratininga (a sul);
          Agudos (sudeste); e Avaí (oeste).
        </Text>
        <Image source={require("./imgs/bauru4.jpg")} style={styles.imagemDireita} />
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: "red",
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  distancia: {
    padding: 10,
    marginTop: 10
  },
  conteudo: {
    backgroundColor: "beige",
    fontSize: 16,
    textAlign: 'justify'
  },
  conteudo2: {
    backgroundColor: "beige",
    fontSize: 16,
    textAlign: 'justify',
    padding: 5,
    marginTop: -30
  },
  conteudo3: {
    backgroundColor: "beige",
    fontSize: 16,
    marginRight: 150
  },
  conteudo4: {
    backgroundColor: "beige",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 5
  },
  secaoesquerda: {
    flexDirection: "row",
    padding: 10
  },
  imagemEsquerda: {
    width: 150,
    height: 300,
    resizeMode: "cover"
  },
  secaodireita:{
    flexDirection: "row",
    padding: 10,
    paddingRight: 160
  },
  imagemDireita:{
    width: 150,
    height: 300,
    resizeMode: "cover", 
  }
});
