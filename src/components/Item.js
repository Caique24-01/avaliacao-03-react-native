import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import EditIcon from '../assets/edit.png'
import CheckIcon from '../assets/check-circle.png'
import UncheckIcon from '../assets/uncheck-circle.png'
import { concluir, desconcluir } from "../context/ItemContext"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

export default function Item({ item }) {

    const [concluido, setConcluido] = useState(item.concluido)

    const { navigate } = useNavigation()

    function marcarConcluido() {
        concluir(item.id)
            .then(() => {
                setConcluido(!item.concluido)                
            }).catch(() => {
                Alert.alert('Erro', "Não foi possível alterar o estado do item")
            })
    }

    function desmarcarConcluido() {
        desconcluir(item.id)
            .then(() => {
                setConcluido(!item.concluido)
            }).catch(() => {
                Alert.alert('Erro', 'Não foi possível alterar o estado do item')
            })
    }

    return (
        <View style={styles.cartao}>
            <View style={styles.textoContainer}>
                <Text style={styles.texto} numberOfLines={1}>{item.titulo}</Text>
            </View>
            <TouchableOpacity style={[styles.botaoAdicionar, { backgroundColor: '#FFA500' }]} onPress={() => navigate('Editar Item', item)}>
                <Image style={styles.botaoTexto} source={EditIcon} />
            </TouchableOpacity>
            {
                concluido ?
                    <TouchableOpacity style={[styles.botaoAdicionar, { backgroundColor: '#1E90FF' }]} onPress={() => desmarcarConcluido()}>
                        <Image style={styles.botaoTexto} source={CheckIcon} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={[styles.botaoAdicionar, { backgroundColor: '#696969' }]} onPress={() => marcarConcluido()}>
                        <Image style={styles.botaoTexto} source={UncheckIcon} />
                    </TouchableOpacity>}
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