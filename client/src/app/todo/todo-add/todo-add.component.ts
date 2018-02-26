import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  is_done = false
  isDoneArr:any = [{
    status: true,
    title: 'Done'
  },{
    status: false,
    title: 'Not Done'
  }]
  messageClass;
  message;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  saveTodo(frm: NgForm) {
    const formValues = Object.assign({}, frm.value)
    this.api.post("todos/post-todo", formValues).subscribe(res => {
      this.messageClass = "alert alert-success"
      this.message = res.data
      
      setTimeout(()=>{
        this.router.navigate(['/todo-list'])
        this.message = false
      }, 2000)

      frm.reset()
    }, error => {
      console.log(error)
    })
  }
}
