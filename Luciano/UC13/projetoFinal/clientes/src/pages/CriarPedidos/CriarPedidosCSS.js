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

    tercTitulo: {
        fontSize: 35,
        textAlign: "center",
        color: "blue"
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
    modal: {
        flex: 1,
        textAlignVertical: "center",
        textAlign: "center",
        backgroundColor: "bisque",
        margin: 50,
        padding: 20,
        borderRadius: 50
    },
    modalText: {
        fontSize: 50,
        marginTop: 20,
        marginBottom: 25
    },
    modalCont: {
        fontSize: 50,
        marginLeft: 40,
        marginRight: 40
    },
    modalBotoes: {
        flexDirection: 'row',
    },
})