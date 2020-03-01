import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

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
  id = this.actRoute.snapshot.params['id'];
  todoDetails:any  = {title: '', description: '', priority: '', status: ''};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getTodo(this.id).subscribe((data: {}) => {
      this.todoDetails = data;
    })
  }
  
  updateTodo(){
    this.restApi.updateTodo(this.id, this.todoDetails).subscribe(data => {
      this.router.navigate(['todo-list'])
    })
  }

}


