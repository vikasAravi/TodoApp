import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})




export class TodoCreateComponent implements OnInit {


  todoDetails: any  = {title: '', description: '', priority: '', status: ''};

  priorities: any = [
    {value: 'High', viewValue: 'High'},
    {value: 'Moderate', viewValue: 'Moderate'},
    {value: 'Low', viewValue: 'Low'}
  ]

  statusOptions: any = [
    {value: "Pending", viewValue: "Pending"},
    {value: "In Progress", viewValue: "In Progress"},
    {value: "Completed", viewValue: "Completed"}
  ]
  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
    
  }

  addTodo(){
    console.log("hello")
    console.log(this.todoDetails)
    this.restApi.createTodo(this.todoDetails).subscribe((data: {}) => {
      this.router.navigate(['/todo-list'])
    })
  }
  reset(){
    this.todoDetails.title = "";
    this.todoDetails.description = "";
    this.todoDetails.status = "";
    this.todoDetails.priority ="";

  }

}
