import { Action, createReducer, on, Store } from "@ngrx/store";
import { _initialStateFactory } from "@ngrx/store/src/store_module";


import * as actions from "./filtro.actions"

const initialState: actions.filtrosValidos = 'todos';


export const filtroReducer = createReducer<actions.filtrosValidos, Action>(
    
        initialState,
        on( actions.setFiltro, ( state , { filtro }) => filtro )
    
)


