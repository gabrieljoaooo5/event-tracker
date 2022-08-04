import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

export const listadeEventosState = atom<IEvento[]>({
    key: "listadeEventosState",
    default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: "filtroDeEventos",
    default: {}
})