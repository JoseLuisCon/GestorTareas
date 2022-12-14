import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/app.reducer'
import { Todo } from '../models/todo.model'
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() itemTodo!: Todo
  @ViewChild('f') txtInputFisico!: ElementRef

  chkCompletado!: FormControl
  txtInput!: FormControl

  editando: boolean = false

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.itemTodo.completado)
    this.txtInput = new FormControl(this.itemTodo.texto, Validators.required)

    this.chkCompletado.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggle({ id: this.itemTodo.id }))
    })
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.itemTodo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1)
  }

  terminarEdicion() {
    this.editando = false

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.itemTodo.texto) return;

    this.store.dispatch(
      actions.editar({ id: this.itemTodo.id, texto: this.txtInput.value }),
    )
  }

  borrarTodoItem(){
    this.store.dispatch(actions.borrar({id: this.itemTodo.id}));
  }
}
