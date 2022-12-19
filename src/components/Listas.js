import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllListas } from "../context/ListaContext";
import Lista from "./Lista";
import Mensagem from "./Mensagem";

export default function Listas() {

    const [listas, setListas] = useState([])
    const [erro, setErro] = useState(false)

    useEffect(() => {
        getAllListas().then(response => {
            setListas(response.data)
        })
            .catch(() => {
                setErro(true)
            })
    }, [listas])

    return (
        <View>
            {
                erro ? 
                <Mensagem erro={erro} mensagem={"Falha ao listar as listas"} bgColor={'#dc3545'}/> :

                <View>
                    {
                        listas.length > 0 ?
                    
                    <FlatList
                        data={listas}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => <Lista {...item} />}
                        style={styles.lista}
                    />
                    : 

                    <View style={styles.listaVazia}>
                        <Text style={styles.texto}>Nenhuma lista cadastrada</Text>
                    </View>
}
                </View>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    lista: {
        flex: 1,
        width: '100%',
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
        textAlign: "center",
        fontWeight: "bold",
        margin: 10,
        padding: 8
    },
});