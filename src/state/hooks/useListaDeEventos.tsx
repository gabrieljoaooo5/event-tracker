import { useRecoilValue } from "recoil"
import { listadeEventosState } from "../atom"

const useListaDeEventos = () => {
    return useRecoilValue(listadeEventosState)
}

export default useListaDeEventos