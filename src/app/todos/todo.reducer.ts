import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import * as actions from "./todo.actions"


const estadoInicial: Todo[] = [
    new Todo('Todo 1'),
    new Todo('Todo 2'),
    new Todo('Todo 3'),

];



const _todoReducer  = createReducer(
    estadoInicial,
    on(
      actions.crear,
      (state, { texto }) => [...state, new Todo(texto)]
    ),
    on(
      actions.toggle,
      (state, { id }) => {
        return state.map( todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completado: !todo.completado
            }
          }else {
            return todo;
          }
        } )
      }
    ),
    on(
      actions.editar,
      (state, { id, texto }) => {
        return state.map( todo => {
          if (todo.id === id) {
            return {
              ...todo,
              texto: texto
            }
          }else {
            return todo;
          }
        } )
      }
    ),
    on(
      actions.borrar,
      (state, {id}) => state.filter( todo => todo.id !== id)
     
    ),
    on(
      actions.toggleAll,
      (state, {stateComplete}) => 
        state.map( todo => {
            return {
              ...todo,
              completado: stateComplete
            }
        } )
      
    ),
    on(actions.limpiarCompletados, (todo)=> {

      return todo.filter(item => !item.completado)


    })
    
  );
  
  export function todoReducer(state: Todo[] | undefined, action: Action) {
    return _todoReducer (state, action);
  }

