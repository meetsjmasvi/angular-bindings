import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
    <h2>Welcome {{ name }}</h2>
    <div>
      <input [(ngModel)]="txtbox" />
      {{ txtbox }}
    </div>
  `,
  styles: [],
})
export class TwowayBindingComponent {
  public name = 'SathiyameyJeyam';
  public txtbox = '';
}
