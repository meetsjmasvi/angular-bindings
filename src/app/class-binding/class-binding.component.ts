import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h2>Welcome {{ name }}</h2>
    <div [class]="cname">{{ name }}</div>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class ClassBindingComponent {
  public name = 'Sathiyameyjeyam';
  public cname = 'text-success';
}
