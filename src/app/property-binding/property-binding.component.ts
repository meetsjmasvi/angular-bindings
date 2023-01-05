import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <h2>Welcome to {{ name }};</h2>
    <input id="{{ myId }}" type="text" /><br />
    <input [id]="myId" type="text" /><br />
    <input disabled="{{ false }}" type="text" /><br />
    This will have no effect due to interpolation
    <input [disabled]="false" type="text" /><br />
    Whereas work well with property binding
    <input [disabled]="isDisabled" type="text" /><br />
    Using property variable with property binding
  `,
  styles: [],
})
export class PropertyBindingComponent {
  public name = 'Sathiyameyjeyam';
  public myId = 'testId';
  public isDisabled = false;

  constructor() {}
}
