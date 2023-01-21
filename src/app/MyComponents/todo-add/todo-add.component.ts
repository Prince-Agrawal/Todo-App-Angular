import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() addInputTodo: EventEmitter<Todo> = new EventEmitter();

  title: string;
  desc: string;

  constructor() { 
    this.title="",
    this.desc=""
  }

  ngOnInit(): void {
  }

  addTodo(){
    const todo = {
      title: this.title,
      description: this.desc
    }

    this.addInputTodo.emit(todo);
    console.log("Add Todo Function call")
  }
}
