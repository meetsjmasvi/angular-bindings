import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    {{ name }}
    <button>Click Me</button><br />
    <button (click)="onClick()">Show Name</button> {{ msg }}<br />
    <button (click)="showEvent($event)">Show Event</button><br />
    <button (click)="msg1 = 'Sathiyameyjeyam'">Inline Assginment</button
    >{{ msg1 }}<br />
  `,
  styles: [],
})
export class EventBindingComponent {
  public name = 'Sathiyameyjeyam';
  public msg = 'Welcome in here!';
  public msg1 = '';
  constructor() {}

  onClick() {
    this.msg = 'Welcome in here!';
  }

  showEvent(event: MouseEvent) {
    console.log(event);
  }
}
