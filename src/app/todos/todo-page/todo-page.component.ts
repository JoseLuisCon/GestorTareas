import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  completeAll(){
    
    this.completado = !this.completado
    this.store.dispatch(actions.toggleAll({stateComplete: this.completado}))
  }

}
