import { compileInjectable } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-child',
  template: `
    <h2>Welcome {{ name }}</h2>

    <div>
      Here is the data from the parent <strong>{{ parentData }}</strong>
      <br /><br />
      This is again parent data in alias PData {{ pData }};
    </div>
    <br /><br />
    <div>
      Emit event to pass the value to the parent
      <button (click)="fireEvent()">Fire Event</button>
    </div>
  `,
  styles: [],
})
export class CompChildComponent {
  public name = 'SathiyameyJeyam';
  @Input() public parentData: any;
  @Input('parentData') public pData: any;
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Hello Parent!');
  }
}
