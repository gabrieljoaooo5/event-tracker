import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { obterId } from "../../utils"
import { listadeEventosState } from "../atom"

const useAdicionarEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listadeEventosState)

    return (evento: IEvento) => {
        const hoje = new Date()
        if (evento.inicio < hoje) {
            throw new Error("Eventos nao podem ser cadastrados com data menor do que a atual.")
        }
        evento.id = obterId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento