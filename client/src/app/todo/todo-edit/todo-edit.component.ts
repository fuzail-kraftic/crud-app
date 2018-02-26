import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router,private api: ApiService) {}
  todoObj: any = []
  messageClass;
  message;
  isDoneArr:any = [{
    status: true,
    title: 'Done'
  },{
    status: false,
    title: 'Not Done'
  }]

  ngOnInit() { 
    const todoId = this.route.snapshot.params 
    
    this.api.get("todos/get-todo/"+todoId.id).subscribe(res => {
      console.log(res)
      this.todoObj = res.data
    })
  }


  updateTodo() {
    this.api.put("todos/put-todo/"+this.todoObj.id, this.todoObj).subscribe(res => {
      this.messageClass = "alert alert-success"
      this.message = res.data
      
      setTimeout(()=>{
        this.message = false
        this.router.navigate(['/todo-list'])
      }, 2000)
    }, error => {
      console.log(error)
    })
    console.log(this.todoObj)
  }
}
