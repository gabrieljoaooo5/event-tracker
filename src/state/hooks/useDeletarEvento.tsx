import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listadeEventosState } from "../atom";

const useDeletarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listadeEventosState)
    return (evento: IEvento) => {
        setListaDeEventos((listaAntiga) => [
            ...listaAntiga.filter(evt => evento.id !== evt.id)
        ])
    }
}

export default useDeletarEvento