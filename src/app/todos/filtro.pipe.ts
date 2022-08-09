import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filtrosValidos } from '../filtro/filtro.actions';

import { Todo } from './models/todo.model';
import { filterTo } from './todo.actions';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  

  
  transform(todos: Todo[], filtroParam: filtrosValidos): Todo[] {


    switch (filtroParam){

      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:       
        return todos
    }

    
    
  }

}
