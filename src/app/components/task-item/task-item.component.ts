import { Component, Input } from '@angular/core';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() taskItem: Task = {
    text: "", day: "",
    remind: false
  };

}
