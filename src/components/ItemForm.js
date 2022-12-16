import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createItem } from "../context/ItemContext";
import Mensagem from "./Mensagem";

export default function ItemForm() {
    const [titulo, setTitulo] = useState("")
    const [erro, setErro] = useState(false);
    const [mensagem, setMensagem] = useState("")
    const [submitted, setSubmitted] = useState(false);

    const route = useRoute()

    function newLista() {
        const data = {
            titulo: titulo
        }

        createItem(route.params.id, data)
            .then(() => {
                setMensagem("Lista adicionada!")
                setSubmitted(true)
                setTitulo("")

            })
            .catch(() => {
                setMensagem("Falha ao cadastrar lista")
                setErro(true)
                setTitulo("")
            })
    }

    return (
        <View style={styles.container}>
            {
                submitted ?
                    <View style={styles.formContainer}>
                        <Mensagem mensagem={mensagem} bgColor={'#90EE90'}/>
                        <TouchableOpacity
                            style={[styles.botao, { backgroundColor: '#FFFFFF', }]}
                            onPress={() => setSubmitted(false) }
                        >
                            <Text style={{ color: '#90EE90' }}>Voltar</Text>
                        </TouchableOpacity>

                    </View> :
                    <View>

                        {
                            erro ?
                                <View style={styles.formContainer}>
                                    <Mensagem erro={erro} mensagem={mensagem} bgColor={'#dc3545'}/>
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
                                        titulo.length > 0  ?

                                            <TouchableOpacity
                                                style={styles.botao}
                                                onPress={() => newLista()}
                                            >
                                                <Text style={styles.botaoTexto}>Adicionar</Text>
                                            </TouchableOpacity>
                                            :  <Text style={[styles.input, {backgroundColor: '#dc3545'}]}>Campo título obrigatório</Text> 
                                    }
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
        width: '55%',
        backgroundColor: "#696969",
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
        color: '#fff',
    },
    botao: {
        height: 40,
        width: 100,
        backgroundColor: '#006400',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    botaoTexto: {
        fontSize: 18,
        fontWeight: '400',
        color: '#FFFFFF',
    },
})