import { Component, OnInit } from '@angular/core';
import { RefDataModel } from 'src/app/model/ref-data-model';

import { TaskCategoryVO } from 'src/app/vo/task-category-vo';
import { TaskFilterVO } from 'src/app/vo/task-filter-vo';

import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent implements OnInit {

  filterError! : string;
  completed! :string;

  taskFilter: TaskFilterVO = new TaskFilterVO();
  taskCategories! : TaskCategoryVO[];

  startDate! : NgbDateStruct;
  endDate! : NgbDateStruct;
  scheduledStartDate! : NgbDateStruct;
  scheduledEndDate! : NgbDateStruct;

  constructor(public refDataModel: RefDataModel) { }

  ngOnInit(): void {
    this.completed = 'false';
  }

}
