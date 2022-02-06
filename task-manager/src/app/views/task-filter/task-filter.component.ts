import { Component, OnInit } from '@angular/core';
import { RefDataModel } from 'src/app/model/ref-data-model';



@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent implements OnInit {

  constructor(public refDataModel: RefDataModel) { }

  ngOnInit(): void {
  }

}
