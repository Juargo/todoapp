import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Form, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input() todo:Todo 
  @ViewChild('inputFisico') txtInputFisico:ElementRef;

  chkCompletado:FormControl
  txtInput: FormControl

  editando:boolean = false

  constructor(){}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado,[] )
    this.txtInput = new FormControl(this.todo.texto,[Validators.required])
  }

  editar():void{
    this.editando = true
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.focus()
    },1)
  }

  terminarEdicion():void{
    this.editando=false
  }

}
