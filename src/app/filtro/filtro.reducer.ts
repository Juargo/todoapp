import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export interface filtroState {
  filtro: filtrosValidos;
}

export const estadoInicial: filtroState = {
  filtro: 'todos',
};

export const filtroReducer = createReducer(
  estadoInicial,
  on(setFiltro, (state, { filtro }) => ({
    ...state,
    filtro,
  }))
);
