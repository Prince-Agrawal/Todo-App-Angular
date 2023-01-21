import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  localItems: any = ""
  constructor(private titleService:Title) { 
    this.titleService.setTitle("My Todos");
    this.localItems = localStorage.getItem("todos");
    if(this.localItems==null){
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localItems);
    }
  }

  deleteTodo(todo: Todo){
    this.todos.splice( this.todos.indexOf(todo) , 1);
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }

  ngOnInit(): void {
  }

}
