import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        textAlignVertical: 'center',
        backgroundColor: "bisque",
    },

    titulo: {
        fontSize: 25,
        textAlign: "center",
    },

    titulo2: {
        fontSize: 25,
    },

    distancia: {
        marginBottom: 40,
    },

    borda: {
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 8,
        padding: 5,

        fontSize: 20
    },

    botao: {
        fontSize: 50,
        textAlign: "center"
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