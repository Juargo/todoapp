import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, toggle } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial :Todo[]=[];

export const todoReducer = createReducer(
    estadoInicial,
  on(crear, (state,{texto}) => [...state,new Todo(texto)]),
  on(toggle, (state,{id}) => {
    return state.map(todo=>{
        if(todo.id===id){
            return{
                ...todo,
                completado:!todo.completado
            }
        }
        return todo
    })
  }),
  on(editar, (state,{id,texto}) => {
    return state.map(todo=>{
        if(todo.id===id){
            return{
                ...todo,
                texto
            }
        }
        return todo
    })
  }),
  on(borrar, (state,{id}) => {
    return state.filter(todo=>todo.id!==id)
  }),
);