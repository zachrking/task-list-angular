import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() titleName!: string;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  onAddTask(task: Task): void {
    this.taskService
      .addTask(task)
      .subscribe(
        (task) => (
          this.tasks.push(task)
        )
      );
  }
  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe(
        (tasks) => {
          this.tasks = tasks
        }
      );
  }

}
