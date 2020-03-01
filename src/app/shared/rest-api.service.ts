import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../shared/todo';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {


  //Define API call
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  //CRUD Operations

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  //HttpClient API get() methos ==> Fetch Todos list
  getTodos(): Observable<Todo>{
    console.log("hello")
    return this.http.get<Todo>(this.apiURL + '/Todos/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  

  getTodo(id): Observable<Todo>{
    return this.http.get<Todo>(this.apiURL+ '/Todos/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  //HttpClient APi put() method ==> update Todo
  createTodo(Todo): Observable<Todo>{
    return this.http.post<Todo>(this.apiURL + '/Todos', JSON.stringify(Todo), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateTodo(id, Todo): Observable<Todo>{
    return this.http.put<Todo>(this.apiURL + "/Todos/" + id, JSON.stringify(Todo), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteTodo(id): Observable<Todo>{
    return this.http.delete<Todo>(this.apiURL + '/Todos/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
