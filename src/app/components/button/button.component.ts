import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // Default name for button
  @Input() btnText: string = "Click";
  @Input() btnStyle: string = "";
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  // Todo: emmit event
  onClick(): void {
    this.btnClick.emit();
  }
}
