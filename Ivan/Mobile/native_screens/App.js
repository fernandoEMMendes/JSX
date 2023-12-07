import { Image, ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {

  function Home({ navigation }) {
    return (
      <ImageBackground source={require("./imgs/abertura.jpg")} style={styles.backgroundImage}>
        <View style={styles.ajustenatela}>
          <Text style={styles.texto1}>
            Seja bem vindo ao portal sobre a Cidade de Bauru
          </Text>

          <View style={styles.separador}></View>
          <Button title='Economia' onPress={() => navigation.navigate("Economia")} />

          <View style={styles.separador}></View>
          <Button title='Saude' onPress={() => navigation.navigate("Saude")} />

          <View style={styles.separador}></View>
          <Button title='Turismo' onPress={() => navigation.navigate("Turismo")} />
        </View>
      </ImageBackground>
    )
  }

  function Economia({ navigation }) {
    return (
      <ImageBackground source={require("./imgs/economia.jpg")} style={styles.backgroundImage}>
        <View style={styles.ajustenatela}>
          <View style={styles.estilotextoborda}>
            <Text style={styles.texto2}>
              Economia {'\n\n'}
              Em 2020, o PIB per capita era de R$ 40.021,97.
              Na comparação com outros municípios do estado,
              ficava nas posições 183 de 645 entre os municípios
              do estado e na 1024 de 5570 entre todos os municípios.
              Já o percentual de receitas externas em 2015 era de 47%,
              o que o colocava na posição 616 de 645 entre os municípios
              do estado e na 4963 de 5570. Em 2017, o total de receitas
              realizadas foi de R$ 1.302.951,88 (x1000) e o total de despesas
              empenhadas foi de R$ 1.172.323,48 (x1000). Isso deixa o município n
              as posições 20 e 19 de 645 entre os municípios do estado e na 59
              e 55 de 5570 entre todos os municípios.
            </Text>
          </View>
          <View style={styles.separador}></View>

          <Button title='Retornar' onPress={() => navigation.navigate("Home")} />
        </View>
      </ImageBackground>
    )
  }

  function Saude({navigation}) {
    return (
      <ImageBackground
        source={require('./imgs/saude.jpeg')}
        style={styles.backgroundImage} >


        <View style={styles.ajustenatela}>

          <View style={styles.estilotextoborda}>
            <Text style={styles.texto2}>

              Saude
              {'\n\n'}
              A taxa de mortalidade infantil média na cidade é
              de 12,09 para 1.000 nascidos vivos. As internações
              devido a diarreias são de 0,2 para cada 1.000 habitantes.
              Comparado com todos os municípios do estado, fica nas
              posições 198 de 645 e 386 de 645, respectivamente.
              Quando comparado a cidades do Brasil todo, essas
              posições são de 2291 de 5570 e 4284 de 5570, respectivamente.

            </Text>
          </View>

          <View style={styles.separador}></View>

          <Button
            title="Retornar"
            onPress={() => navigation.navigate('Home')}
          />

        </View>
      </ImageBackground>
    );
  }

  function Turismo({navigation}) {
    return (
      <ImageBackground
        source={require('./imgs/economia.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.ajustenatela}>
        <View style={styles.estilotextoborda}>
         
                      <View style={styles.alinhamento2}>
  
                            <View style={styles.blocoImagemTexto}>
                              <Image source={require('./imgs/bauru5.jpeg')} style={styles.imagemQuatro} />
                              <Text style={styles.textoBranco}> Calcadão da Batista </Text>
                            </View>
                            <View style={styles.blocoImagemTexto}>
                              <Image source={require('./imgs/bauru6.jpeg')} style={styles.imagemQuatro} />
                              <Text style={styles.textoBranco}> ITE</Text>
                            </View>
  
                      </View>
  
          
                       <View style={styles.espaco}></View>
                       <View style={styles.espaco}></View>
  
          
                       <View style={styles.alinhamento2}>
  
                            <View style={styles.blocoImagemTexto}>
                              <Image source={require('./imgs/bauru7.jpeg')} style={styles.imagemQuatro} />
                              <Text style={styles.textoBranco}> SENAC </Text>
                            </View>
                            <View style={styles.blocoImagemTexto}>
                              <Image source={require('./imgs/bauru8.jpeg')} style={styles.imagemQuatro} />
                              <Text style={styles.textoBranco}> Vitoria Régia</Text>
                            </View>
  
                       </View>
  
                               
            
                      <View style={styles.alinhamento2}>
                            <View style={styles.blocoImagemTexto}>
                              <Image source={require('./imgs/bauru9.jpeg')} style={styles.imagemQuatro} />
                              <Text style={styles.textoBranco}> Centro </Text>
                            </View>
                            <View style={styles.blocoImagemTexto}>
                              <Image source={require('./imgs/bauru10.jpeg')} style={styles.imagemQuatro} />
                              <Text style={styles.textoBranco}> Museu Bauru</Text>
                            </View>
                       
                      </View>
  
                      <View style={styles.separador}></View>
  
                      <Button title="Retornar"
                        onPress={() => navigation.navigate('Home')}                 
                      />
  
                    <View style={styles.separador}></View>
  
                    <Button title="Saude"
                      onPress={() => navigation.navigate('Saude')} />               
        </View>
        </View>
  
      </ImageBackground>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Economia" component={Economia} />
        <Stack.Screen name="Saude" component={Saude} />
        <Stack.Screen name="Turismo" component={Turismo} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({

  separador: {
    marginTop: 25,
  },

  ajustenatela: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'flex-center',
    justifyContent: 'center',
  },

  texto1: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },

  texto2: {
    color: 'white',
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 10,
    marginTop: 10,

  },
  backgroundImage: {
    flex: 1,

  },

  estilotextoborda: {
    borderWidth: 1,
    borderColor: 'white', // Cor da borda (pode ser ajustada conforme necessário)
    borderRadius: 8,
    padding: 16,
    textAlign: 'center',
  },

  imagemQuatro: {
    width: 200,
    height: 100,
    backgroundColor: 'cyan',
    margin: 5,
  },

  alinhamento2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  blocoImagemTexto: {
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },

  textoBranco: {
    color: 'white', // Defina a cor do texto como branca
  },

});
