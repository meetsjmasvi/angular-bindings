import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
    <h2>Welcome {{ name }}</h2>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">Red Color</div>
      <div *ngSwitchCase="'blue'">Blue Color</div>
      <div *ngSwitchCase="'orange'">Orange Color</div>
      <div *ngSwitchCase="'green'">Green Color</div>
    </div>
  `,
  styles: [],
})
export class SwitchComponent {
  public name = 'SathiyameyJeyam';
  public color = 'green';
}
