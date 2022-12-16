import { StyleSheet, Text, View } from "react-native";

export default function Mensagem({ erro, mensagem, bgColor }) {
    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            {
                erro ?
                    <View>
                        <Text style={styles.texto}>Erro com o servidor!</Text>
                        <Text style={styles.texto}>{mensagem}</Text>
                    </View>
                    :
                    <View>
                        <Text style={styles.texto}>{mensagem}</Text>
                    </View>

            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '80%',
        height: 'auto',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    texto: {
        color: '#FFFFFF',
        textAlign: "center",
        fontWeight: "bold",
        margin: 10,
        padding: 8
    },
})