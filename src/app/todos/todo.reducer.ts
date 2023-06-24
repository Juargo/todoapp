import { createReducer, on } from '@ngrx/store';
import {
  borrar,
  crear,
  editar,
  limpiarTodos,
  toggle,
  toggleAll,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Limpiar habitación'),
  new Todo('Lavar la ropa'),
  new Todo('Sacar la basura'),
];

export const todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      }
      return todo;
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      }
      return todo;
    });
  }),
  on(borrar, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  }),
  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => ({
      ...todo,
      completado,
    }));
  }),
  on(limpiarTodos, (state) => {
    return state.filter((todo) => !todo.completado);
  })
);
