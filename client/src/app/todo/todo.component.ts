import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: any = []
  constructor(private router: Router, private api: ApiService) { }
  getAllTodos(){
    this.api.get("todos/get-all-todos").subscribe(response => {
      console.log(response)
      this.todos = response.data
    })
  }

  ngOnInit() {
    this.getAllTodos()
  }
  
  deleteTodo(id: number){
    console.log("Deleted :("+id)
    this.api.delete("todos/delete-todo/"+id).subscribe(response => {
      this.getAllTodos()
    })
  }
}
