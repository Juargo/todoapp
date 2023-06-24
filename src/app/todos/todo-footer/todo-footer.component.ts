import { Component, OnDestroy, OnInit } from '@angular/core';
import * as actions from '../../filtro/filtro.actions';
import * as actionsTodo from '../todo.actions';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription.add(
      this.store.subscribe((state) => {
        this.filtroActual = state.filtro.filtro;
        this.pendientes = state.todos.filter((todo) => !todo.completado).length;
      })
    );
  }

  cambiarFiltro(filtro: actions.filtrosValidos): void {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }

  limpiarCompletados(): void {
    this.store.dispatch(actionsTodo.limpiarTodos());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
