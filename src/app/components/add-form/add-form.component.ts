import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  @Output() addItemEvent: EventEmitter<any> = new EventEmitter();
  item: string = "";
  day: string = "";
  remind: boolean = false;

  onSubmit() {
    if(!this.item || !this.day) {
      alert("Task or Day and Time cannot be empty.");
      return;
    }

    let newTask: Task = {
      text: this.item,
      day: this.day,
      remind: this.remind
    }

    // Todo: add task on db
    this.addItemEvent.emit(newTask);

    this.item = ""; 
    this.day = "";
    this.remind = false;
  }
}
