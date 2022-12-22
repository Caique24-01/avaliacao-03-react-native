import { createContext, useState } from "react";
import { api } from "../service/api";

export const ListaContexto = createContext({})

export function ListaProvider({ children }) {
    const [listaContexto, setListaContexto] = useState({})

    return (
        <ListaContexto.Provider value={{
            listaContexto, setListaContexto
        }}>
            {children}
        </ListaContexto.Provider>
    )
}

export async function getAllListas() {
    return await api.get('/listas')
}
export async function createLista(data) {
    return await api.post('/listas', data)
}
export async function updateLista(idLista, data) {
    return await api.put(`/listas/${idLista}`, data)
}
export async function deleteLista(idLista) {
    return await api.delete(`/listas/${idLista}`)
}