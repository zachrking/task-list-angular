import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // Default name for button
  @Input() btnText: string = "Click";
  @Input() btnStyle: string = "";

  // Todo: emmit event
  onClick(): void {
    console.log("Add item!");
  }
}
