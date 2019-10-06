import getters from "./getters"

export default {
    nuevaCompra: (state, { precio }) => {
        state.compras = state.compras + 1
        state.costos = state.costos + precio
    },
    getPaises: (state, { paises }) => {
        state.paises = paises
    },
    setLikes: (state, { like }) => {
        if (like) state.likes++
        else state.likes--
    },
    resetValues: (state) => {
        state.compras = 0
        state.costos = 0
        getters.promedio = 0
        state.likes = 0

    }

}