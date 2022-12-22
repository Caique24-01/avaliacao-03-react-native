import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native"
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { getAllItens } from "../context/ItemContext"
import Item from "./Item"
import Mensagem from "./Mensagem"
import AddIcon from "../assets/plus-circle.png"
import { ListaContexto } from "../context/ListaContext";

export default function Itens() {

    const { navigate } = useNavigation()

    const {listaContexto} = useContext(ListaContexto)

    const [itens, setItens] = useState([])
    const [erro, setErro] = useState(false)

    useEffect(() => {
        getAllItens(listaContexto.id)
            .then(response => {
                setItens(response.data)
            })
            .catch(() => {
                setErro(true)
            })
    }, [itens])

    return (
        <View style={styles.container}>
            <Text style={styles.nomeLista}>Lista {listaContexto.titulo}</Text>
            {
                erro ?
                    <Mensagem erro={erro} mensagem={"Falha ao listar os itens"} bgColor={'#dc3545'} /> :

                    <View>
                        {
                            itens.length > 0 ?
                                <>
                                    <FlatList
                                        data={itens}
                                        keyExtractor={(item) => item.id}
                                        renderItem={(item) => <Item {...item} />}
                                        style={styles.lista}
                                    />
                                    <TouchableOpacity style={[styles.botaoAdicionar, { backgroundColor: '#FFA500' }]} onPress={() => navigate('Novo Item')}>
                                        <Image style={styles.botaoTextoAdicionar} source={AddIcon} />
                                    </TouchableOpacity>
                                </>
                                :

                                <View style={styles.listaVazia}>
                                    <Text style={styles.texto}>Nenhum item cadastrado</Text>
                                    <TouchableOpacity
                                        style={styles.botao}
                                        onPress={() => navigate('Novo Item')}
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
    nomeLista: {
        position: 'relative',
        justifyContent: "center",
        textAlign: "center",
        color: '#696969',
        opacity: 0.3, 
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 25
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
        color: '#FFF',
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
    botaoAdicionar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 4,
        position: 'absolute',
        right: 25,
        bottom: 45

    },
    botaoTextoAdicionar: {
        height: 25,
        width: 25
    }
});