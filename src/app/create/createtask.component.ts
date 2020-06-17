import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../services/task.services';

@Component({
  selector: 'app-create',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css'],
  providers: [TaskService]
})
export class CreateComponent implements OnInit {

  task: Task;
  constructor(
    private _TASKSERVICE: TaskService

  ) {
    this.task = new Task('', '', 0, '');
  }

  ngOnInit() {

  }

  onSubmit(form) {
    this._TASKSERVICE.saveTask(this.task).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    ); // Utilizamos el metodo subscribe de Observable para recojer lo que API  devuelve (tiene 2 funciones res y err)

    form.reset();
  }

}
