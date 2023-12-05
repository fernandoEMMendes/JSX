import { Image, StatusBar, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { styles } from "./css.js"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar translucent={true} backgroundColor="#c47138" barStyle="dark-content" />

        <View style={styles.fundoTitulo}>
          <Text style={styles.titulo}>Bauru</Text>
          <Text style={styles.subTitulo}>A cidade que nunca dorme</Text>
        </View>

        <View style={styles.distancia} />

        <View style={styles.alinharImagens2}>
          <View style={styles.blocoImagens}>
            <Image style={styles.imagens} source={require("./imgs/bauru.jpeg")} />
            <Text>Text</Text>
          </View>

          <View style={styles.blocoImagens}>
            <Image style={styles.imagens} source={require("./imgs/bauru2.jpg")} />
            <Text>Text</Text>
          </View>

          <View style={styles.blocoImagens}>
            <Image style={styles.imagens} source={require("./imgs/bauru5.jpg")} />
            <Text>Text</Text>
          </View>
        </View>

        <View style={styles.distancia} />

        <View style={styles.alinharImagens2}>
          <View style={styles.blocoImagens}>
            <Image style={styles.imagens2} source={require("./imgs/bauru3.jpg")} />
            <Text>Text</Text>
          </View>

          <View style={styles.blocoImagens}>
            <Image style={styles.imagens2} source={require("./imgs/bauru4.jpg")} />
            <Text>Text</Text>
          </View>
        </View>

        <View style={styles.distancia} />

        <View>
          <Text style={styles.descricao}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ultricies augue, quis facilisis ligula. Cras malesuada sollicitudin sem nec pretium. Nulla ullamcorper lectus at finibus bibendum. Donec mattis nulla eu neque vehicula, in cursus nulla elementum. Phasellus quis justo non metus aliquam dictum sed et tortor. Maecenas finibus sem lectus, vel laoreet elit hendrerit quis. Nam mollis ac ex vitae aliquam. Maecenas euismod dignissim odio at finibus. Suspendisse vel eleifend dui. Suspendisse condimentum ante vitae tincidunt rutrum. Nulla facilisi. Aliquam ac iaculis erat. Morbi blandit pulvinar risus, sit amet eleifend augue ultricies sed. Proin lacus dolor, mattis sed fringilla sed, hendrerit non ligula. Integer faucibus vitae neque a vulputate. Sed cursus porta urna eget blandit.
          </Text>
        </View>

        <View style={styles.fundoFooter}>
          <Text style={styles.fotter}>Bauru - 2023</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

