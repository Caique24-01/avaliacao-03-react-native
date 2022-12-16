import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EditIcon from '../assets/edit.png'
import ItensIcon from '../assets/list-numbers.png'

export default function Lista({ item }) {
    const { navigate } = useNavigation();
    return (
        <View style={styles.cartao}>
            <View style={styles.textoContainer}>
                <Text style={styles.texto} numberOfLines={1}>{item.titulo}</Text>
            </View>
            <TouchableOpacity style={[styles.botaoAdicionar, {backgroundColor: '#FFA500'}]} onPress={() => navigate('Editar Lista', item)}>
                <Image style={styles.botaoTexto} source={EditIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoAdicionar, {backgroundColor: '#32CD32'}]} onPress={() => navigate('Itens', item)}>
                <Image style={styles.botaoTexto} source={ItensIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cartao: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: 250,
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textoContainer: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: "space-between",
    },
    texto: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 8,
        maxWidth: 200,
    },
    botaoAdicionar: {
        backgroundColor: "#EFEFEF",
        width: 28,
        height: 28,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 4
    },
    botaoTexto: {
        height: 20,
        width: 20
    }
})