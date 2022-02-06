import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/model/task-model';
import { TaskVO } from 'src/app/vo/task-vo';


@Component({
  selector: 'app-task-grid',
  templateUrl: './task-grid.component.html',
  styleUrls: ['./task-grid.component.css']
})
export class TaskGridComponent implements OnInit {
  tasks: TaskVO[]=[];


  constructor(private taskModel:TaskModel) { }

  ngOnInit(): void {
  }

}
