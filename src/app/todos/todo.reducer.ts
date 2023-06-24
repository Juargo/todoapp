import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial :Todo[]=[];

export const todoReducer = createReducer(
    estadoInicial,
  on(crear, (state,{texto}) => [...state,new Todo(texto)]),
);