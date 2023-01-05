import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h2>Welcome {{ name }}</h2>
    <h2 [style.color]="'orange'">Sytle Binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Sytle Binding</h2>
    <h2 [style.color]="highlightColor">Sytle Binding</h2>
    <h2 [ngStyle]="colorStyles">Sytle Binding</h2>
  `,
  styles: [],
})
export class StyleBindingComponent {
  public name = 'SathiyameyJeyam';
  public hasError = false;
  public isSpecial = true;
  public highlightColor = 'blue';
  public colorStyles = {
    color: 'red',
    fontStyle: 'italic',
  };
}
