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
        textAlign: "left"
    },

    gifCaixa: {
        alignItems: "center",
    },

    gif: {
        width: 300,
        height: 300,
    },

    buttonFirebase: {
        borderColor: 'black',
        backgroundColor: 'green',
        borderRadius: 15,
        padding: 10,
        width: 390,
        marginTop: 150,
        marginLeft: 12,
        marginRight: 10,
    },

    textButtonFire: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    buttonInicio: {
        marginTop: 30,
        borderColor: 'black',
        backgroundColor: "red",
        borderRadius: 11,
        padding: 10,
        width: 390,
        marginLeft: 12,
        marginRight: 10,
    },

    textButtonInicio: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
})