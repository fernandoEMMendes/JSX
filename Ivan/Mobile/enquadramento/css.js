import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'bisque',
    },

    distancia: {
        marginTop: 20,
    },

    fundoTitulo: {
        marginTop: 60,
        backgroundColor: "#c47138",
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    },

    titulo: {
        fontSize: 25,
        fontFamily: "serif",
        fontWeight: "bold",
        fontStyle: "italic",

        textAlign: "center",
        textAlignVertical: "center",
    },

    subTitulo: {
        fontSize: 20,
        fontFamily: "serif"
    },

    alinharImagens: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    alinharImagens2: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    imagens: {
        borderWidth: 2,
        borderColor:"black",
        borderRadius:8,

        width: 120,
        height: 100,
        margin: 10,
    },

    imagens2: {
        borderWidth: 2,
        borderColor:"black",
        borderRadius:8, 

        width: 180,
        height: 100,
        margin: 10,
    },

    blocoImagens: {
        flexDirection: "column",
        alignItems: "center",
    },

    descricao: {
        padding: 20,
        fontSize: 20,
        fontFamily: "serif",
        textAlign:"justify",
    },

    fundoFooter: {
        padding: 34,
        backgroundColor: "black",
    },

    fotter: {
        textAlign: "center",
        fontSize: 30,
        color: "white"
    }
});