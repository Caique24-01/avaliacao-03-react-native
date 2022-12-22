import { createContext, useState } from "react";
import { api } from "../service/api";

export const ItemContexto = createContext({})

export function ItemProvider({ children }) {
    const [itemContexto, setItemContexto] = useState({})
    return (
        <ItemContexto.Provider value={{
            itemContexto, setItemContexto
        }}>
            {children}
        </ItemContexto.Provider>
    )
}

export async function getAllItens(idLista) {
    return await api.get(`/itens/lista/${idLista}`)
}

export async function createItem(idLista, data) {
    return await api.post(`/itens/lista/${idLista}`, data)
}

export async function updateItem(idItem, idLista, data){
    return await api.put(`/itens/${idItem}/lista/${idLista}`, data)
}

export async function deleteItem(idItem){
    return await api.delete(`/itens/${idItem}`)
}

export async function concluir(idItem) {
    return await api.put(`/itens/${idItem}/concluir`)
}

export async function desconcluir(idItem) {
    return await api.put(`/itens/${idItem}/desconcluir`)
}