import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlignVertical: "center",
        backgroundColor: "bisque"
    },

    distanciaPequena: {
        marginBottom: 25,
    },

    distancia: {
        marginBottom: 50,
    },

    distanciaGrande: {
        marginBottom: 100
    },

    titulo: {
        fontSize: 50,
        textAlign: "center",
    },

    subTitulo: {
        fontSize: 35,
        textAlign: "center"
    },

    botao: {
        fontSize: 30,
        textAlign: "left",
    },

    botaoCriar: {
        fontSize: 30,
        margin: -45,
        alignSelf: "flex-end",
    },

    gifCaixa: {
        alignItems: "center",
    },

    gif: {
        width: 300,
        height: 300,
    },
})