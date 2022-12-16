import { api } from "../service/api";

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