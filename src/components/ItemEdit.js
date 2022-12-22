import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { deleteItem, ItemContexto, updateItem } from "../context/ItemContext";
import Mensagem from "./Mensagem";

export default function ItemEdit() {


    const {itemContexto} = useContext(ItemContexto)

    const [titulo, setTitulo] = useState(itemContexto.titulo)
    const [erro, setErro] = useState(false);
    const [mensagem, setMensagem] = useState("")
    const [submitted, setSubmitted] = useState(false);

    const { navigate } = useNavigation()

    function alteraItem() {
        const data = {
            titulo: titulo
        }
        updateItem(itemContexto.id, itemContexto.lista.id, data)
            .then(() => {
                setMensagem("Item alterado!")
                setSubmitted(true)

            })
            .catch(() => {
                setMensagem("Falha ao alterar item")
                setErro(true)
            })
    }

    function excluirItem() {
        Alert.alert("Tem certeza que deseja excluir este item? ", '', [{
            text: "Cancelar",
            onPress: () => { }
        },
        {
            text: "Excluir", onPress: () => deleteItem(itemContexto.id).
                then(() => {
                    setMensagem("Item excluído")
                    setSubmitted(true)
                })
                .catch(() => {
                    setMensagem("Falha ao excluir item")
                    setErro(true)
                })
        }])
    }

    return (
        <View style={styles.container}>
            {
                submitted ?
                    <View style={styles.formContainer}>
                        <Mensagem mensagem={mensagem} bgColor={'#90EE90'} />
                        <TouchableOpacity
                            style={[styles.botao, { backgroundColor: '#FFFFFF', }]}
                            onPress={() => navigate('Itens')}
                        >
                            <Text style={{ color: '#90EE90' }}>Voltar</Text>
                        </TouchableOpacity>

                    </View> :
                    <View>

                        {
                            erro ?
                                <View style={styles.formContainer}>
                                    <Mensagem erro={erro} mensagem={mensagem} bgColor={'#dc3545'} />
                                    <TouchableOpacity
                                        style={[styles.botao, { backgroundColor: '#FFFFFF', }]}
                                        onPress={() => setErro(false)}
                                    >
                                        <Text style={{ color: '#dc3545' }}>Voltar</Text>
                                    </TouchableOpacity>

                                </View> :
                                <View style={styles.formContainer}>
                                    <Text style={styles.titulo}>Preencha os campos</Text>

                                    <View style={styles.inputArea}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Titulo"
                                            placeholderTextColor="#fff"
                                            autoCapitalize="none"
                                            value={titulo}
                                            onChangeText={setTitulo}
                                        />
                                    </View>
                                    {
                                        titulo.length ?

                                            <TouchableOpacity
                                                style={styles.botao}
                                                onPress={() => alteraItem()}
                                            >
                                                <Text style={styles.botaoTexto}>Editar</Text>
                                            </TouchableOpacity>
                                            : <Text>Campo título obrigatório</Text>
                                    }
                                    <TouchableOpacity
                                        style={[styles.botao, { backgroundColor: '#dc3545' }]}
                                        onPress={() => excluirItem()}
                                    >
                                        <Text style={styles.botaoTexto}>Excluir</Text>
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
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',

    },
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#051933',
        marginBottom: 20,
    },
    inputArea: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '90%',
        backgroundColor: "#696969",
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
        color: '#fff',
    },
    botao: {
        marginTop: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
        backgroundColor: '#006400',
        marginBottom: 5,
    },
    botaoTexto: {
        fontSize: 18,
        fontWeight: '400',
        color: '#FFFFFF',
    },
})