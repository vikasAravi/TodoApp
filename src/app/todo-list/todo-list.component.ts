import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  Todos: any = [];
  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadTodos();
  }
  

  loadTodos(){
    return this.restApi.getTodos().subscribe((data: {}) => {
      console.log(data);
      this.Todos = data;
    })
  }

  deleteTodo(id){
    this.restApi.deleteTodo(id).subscribe(data => {
      this.loadTodos()
    })
  }

}
