import { TaskVO } from "../vo/task-vo";
import { Injectable } from "@angular/core";

@Injectable({       // Da ga lahko inejctas v constructor neke komponente
    providedIn :'root'
})
export class TaskModel {
tasks! : TaskVO[];


};