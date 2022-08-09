import { createAction, props } from "@ngrx/store";
import { filtrosValidos } from "../filtro/filtro.actions";



export const crear = createAction(
        '[TODO] Crear Todo', 
        props<{texto: string}>()
);

export const toggle = createAction(
        '[TODO] Toggle Todo', 
        props<{id: number}>()
);
export const editar = createAction(
        '[TODO] Editar Todo', 
        props<{id: number, texto: string}>()
);
export const borrar = createAction(
        '[TODO] Borrar Todo', 
        props<{id: number}>()
);
export const toggleAll = createAction(
        '[TODO] ToggleAll Todo',
        props<{ stateComplete: boolean }>()
);
export const filterTo = createAction(
        '[TODO] ToggleAll Todo',
        props<{ filtro: filtrosValidos }>()
);
export const limpiarCompletados = createAction(
        '[TODO] LimpiarCompletados Todo'
);