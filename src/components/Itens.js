import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { getAllItens } from "../context/ItemContext"
import Item from "./Item"
import Mensagem from "./Mensagem"

export default function Itens() {

    const route = useRoute();

    const [itens, setItens] = useState([])
    const [erro, setErro] = useState(false)

    const { navigate } = useNavigation()


    useEffect(() => {
        getAllItens(route.params.id)
            .then(response => {
                setItens(response.data)
            })
            .catch(erro => {
                console.log(erro)
                setErro(true)
            })
    }, [itens])

    return (
        <View style={styles.container}>
            {
                erro ?
                    <Mensagem erro={erro} mensagem={"Falha ao listar os itens"} bgColor={'#dc3545'} /> :

                    <View>
                        {
                            itens.length > 0 ?

                                <FlatList
                                    data={itens}
                                    keyExtractor={(item) => item.id}
                                    renderItem={(item) => <Item {...item} />}
                                    style={styles.lista}
                                />
                                :

                                <View style={styles.listaVazia}>
                                    <Text style={styles.texto}>Nenhum item cadastrado</Text>
                                    <TouchableOpacity
                                        style={styles.botao}
                                        onPress={() => navigate('Novo Item', route.params)}
                                    >
                                        <Text style={styles.botaoTexto}>Novo item</Text>
                                    </TouchableOpacity>
                                </View>
                        }
                    </View>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        height: '100%',
        justifyContent: "center",
    },
    lista: {
        width: '100%',
        height: '100%',
    },
    listaVazia: {
        width: 'auto',
        height: 'auto',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: '#FFA500'
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        margin: 10,
        padding: 8
    },
    botao: {
        height: 40,
        width: 100,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    botaoTexto: {
        fontSize: 18,
        fontWeight: '400',
        color: '#FFA500',
    },
});