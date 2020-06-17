import { Component, OnInit} from '@angular/core';
import { Task } from '../../models/task';
import { TaskService} from '../services/task.services';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    providers: [TaskService]
})

export class TaskComponent implements OnInit{
    /* name: string, area: string, duration: number, description: string*/
    public task;

    constructor(
        // private _SERVICE: TaskService
    ){
        // this.task = new Task('Libro', 'Literatura', 15, 'Lectura de la Odisea');
    }

    ngOnInit() {}
}
